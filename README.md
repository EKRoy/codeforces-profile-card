# codeforces-profile-card
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Codeforces Profile Card Widget</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <div class="container">
        <div class="search-section">
            <input 
                type="text" 
                id="usernameInput" 
                placeholder="Enter Codeforces username..." 
                class="username-input"
            >
            <button id="searchBtn" class="search-btn">Search</button>
        </div>

        <div id="profileCard" class="profile-card hidden">
            <!-- Profile content will be inserted here -->
        </div>

        <div id="errorMessage" class="error-message hidden"></div>
        <div id="loadingSpinner" class="spinner hidden"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
