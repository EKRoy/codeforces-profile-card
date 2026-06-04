const API_BASE = 'https://codeforces.com/api';

let chartInstance = null;

const elements = {
    usernameInput: document.getElementById('usernameInput'),
    searchBtn: document.getElementById('searchBtn'),
    profileCard: document.getElementById('profileCard'),
    errorMessage: document.getElementById('errorMessage'),
    loadingSpinner: document.getElementById('loadingSpinner'),
};

// Event listeners
elements.searchBtn.addEventListener('click', searchProfile);
elements.usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchProfile();
});

async function searchProfile() {
    const username = elements.usernameInput.value.trim();
    
    if (!username) {
        showError('Please enter a username');
        return;
    }

    showLoading(true);
    hideError();
    hideCard();

    try {
        const userData = await fetchUserInfo(username);
        displayProfile(userData);
    } catch (error) {
        showError(error.message);
    } finally {
        showLoading(false);
    }
}

async function fetchUserInfo(username) {
    const response = await fetch(`${API_BASE}/user.info?handles=${username}`);
    
    if (!response.ok) {
        throw new Error('User not found');
    }

    const data = await response.json();
    
    if (!data.result || data.result.length === 0) {
        throw new Error('User not found');
    }

    return data.result[0];
}

function displayProfile(user) {
    const ratingColor = getRatingColor(user.rating);
    const maxRatingColor = getRatingColor(user.maxRating);
    const rank = getRank(user.maxRating);
    const joinDate = getJoinDate(user.registrationTimeSeconds);
    
    const html = `
        <div class="profile-header-bar">
            <div class="header-stats">
                <div class="header-stat">
                    <span class="stat-label">Profile views</span>
                    <span class="stat-value">${(user.rating || 0).toLocaleString()}</span>
                </div>
                <div class="header-stat">
                    <span class="stat-icon">🏆</span>
                    <div class="stat-text">
                        <span class="stat-label">Codeforces</span>
                        <span class="stat-value">${user.friendOfCount || 0}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-content">
            <div class="chart-section">
                <div class="chart-container">
                    <canvas id="ratingChart"></canvas>
                </div>
                <div class="chart-legend">
                    <div class="legend-item">
                        <div class="legend-color" style="background: #667eea;"></div>
                        <span>Problems Solved</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background: #764ba2;"></div>
                        <span>Contests</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background: #f1c40f;"></div>
                        <span>Contributions</span>
                    </div>
                    <div class="legend-item">
                        <div class="legend-color" style="background: #ff69b4;"></div>
                        <span>Other</span>
                    </div>
                </div>
            </div>

            <div class="user-info">
                <div class="user-header">
                    <div class="user-avatar">
                        <img src="${user.avatar}" alt="${user.handle}">
                    </div>
                    <div class="user-details">
                        <div class="user-name">
                            <span class="user-name-icon">✓</span>
                            <span>${user.handle}</span>
                        </div>
                        <div class="user-fullname">${user.firstName || ''} ${user.lastName || 'User'}</div>
                        <div class="user-member-since">Member since ${joinDate}</div>
                    </div>
                </div>

                <div class="rank-box">
                    <div class="rank-title" style="color: ${maxRatingColor};">${rank}</div>
                    <div class="rank-subtitle">
                        <span class="rank-icon">▲</span>
                        <span>Max Rank</span>
                    </div>
                </div>

                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-item-label">Max Rating</div>
                        <div class="stat-item-value rating" style="color: ${maxRatingColor};">
                            ${user.maxRating || user.rating}
                        </div>
                    </div>
                    <div class="stat-item contests">
                        <div class="stat-item-label">Contests</div>
                        <div class="stat-item-value contests">${user.ratingUpdateTimeSeconds ? '170' : '0'}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    elements.profileCard.innerHTML = html;
    showCard();
    
    // Render chart after HTML is added
    setTimeout(() => {
        renderRatingChart(user);
    }, 100);
}

function renderRatingChart(user) {
    const ctx = document.getElementById('ratingChart');
    
    if (!ctx) return;
    
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Calculate some mock stats based on rating
    const ratingPercentage = Math.min((user.rating / 3000) * 100, 100);
    
    chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Problems', 'Contests', 'Contributions', 'Other'],
            datasets: [{
                data: [ratingPercentage, 25, 20, 100 - ratingPercentage - 45],
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#f1c40f',
                    '#ff69b4'
                ],
                borderColor: 'white',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function getRank(rating) {
    if (rating >= 3000) return 'International Grandmaster';
    if (rating >= 2600) return 'Grandmaster';
    if (rating >= 2400) return 'Master';
    if (rating >= 2300) return 'Candidate Master';
    if (rating >= 2100) return 'Expert';
    if (rating >= 1900) return 'Specialist';
    if (rating >= 1600) return 'Pupil';
    if (rating >= 1400) return 'Newbie';
    return 'Beginner';
}

function getRatingColor(rating) {
    if (rating >= 3000) return '#ff0000';      // Red
    if (rating >= 2600) return '#ff8c00';      // Orange
    if (rating >= 2400) return '#aa00aa';      // Purple
    if (rating >= 2300) return '#0000ff';      // Blue
    if (rating >= 2100) return '#0088ff';      // Cyan
    if (rating >= 1900) return '#00aa00';      // Green
    if (rating >= 1600) return '#888888';      // Grey
    if (rating >= 1400) return '#00aa00';      // Light Green
    if (rating >= 1200) return '#0088ff';      // Light Blue
    return '#666666';                          // Dark Grey
}

function getJoinDate(timestamp) {
    if (!timestamp) return 'Unknown';
    const date = new Date(timestamp * 1000);
    return date.getFullYear();
}

function showError(message) {
    elements.errorMessage.textContent = message;
    elements.errorMessage.classList.remove('hidden');
}

function hideError() {
    elements.errorMessage.classList.add('hidden');
}

function showCard() {
    elements.profileCard.classList.remove('hidden');
}

function hideCard() {
    elements.profileCard.classList.add('hidden');
}

function showLoading(show) {
    if (show) {
        elements.loadingSpinner.classList.remove('hidden');
    } else {
        elements.loadingSpinner.classList.add('hidden');
    }
}

// Load EK_Roy's profile on page load
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('user') || 'EK_Roy';
    
    elements.usernameInput.value = username;
    searchProfile();
});
