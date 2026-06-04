# 🏆 Codeforces Profile Card Widget

> A beautiful, interactive widget to display Codeforces user profiles with real-time data and stunning visualizations!

<div align="center">

[![Codeforces](https://img.shields.io/badge/Codeforces-EK__Roy-1f71ff?logo=codeforces&logoColor=white&style=for-the-badge)](https://ekroy.github.io/codeforces-profile-card/?user=EK_Roy)
[![GitHub](https://img.shields.io/badge/GitHub-EKRoy-black?logo=github&style=for-the-badge)](https://github.com/EKRoy)
[![Website](https://img.shields.io/badge/Website-Live_Demo-blue?style=for-the-badge)](https://ekroy.github.io/codeforces-profile-card/)

---

## 🎬 Live Demo

**[👉 Click Here to View My Codeforces Profile 👈](https://ekroy.github.io/codeforces-profile-card/?user=EK_Roy)**

*The widget shows: Profile stats, doughnut chart, user information, rating, rank, and more!*

---

</div>

## 🌟 Features

- 🔍 **Search Any Profile** - Enter any Codeforces username to view their profile
- 📊 **Interactive Charts** - Beautiful doughnut chart showing rating distribution
- 🏆 **Rank Display** - Shows Expert, Master, Specialist, Pupil, etc. with accurate colors
- 👤 **User Details** - Avatar, handle, full name, and member since date
- 📈 **Live Statistics** - Max rating, contests participated, profile views
- 🎨 **Modern UI** - Gradient backgrounds, smooth animations, professional design
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Real-time API** - Fetches live data directly from Codeforces API
- 🏷️ **Badge Header** - Professional badge-style stats display

## 🚀 How to Use

### Option 1: View My Profile (Default)
```
https://ekroy.github.io/codeforces-profile-card/
```
*Automatically loads my profile (EK_Roy)*

### Option 2: View Any Codeforces User
```
https://ekroy.github.io/codeforces-profile-card/?user=tourist
https://ekroy.github.io/codeforces-profile-card/?user=Petr
https://ekroy.github.io/codeforces-profile-card/?user=MiFarah
```

### Option 3: Clone & Run Locally
```bash
git clone https://github.com/EKRoy/codeforces-profile-card.git
cd codeforces-profile-card
# Open index.html in your browser
```

## 📸 What You'll See

The widget displays:
- **Header Bar**: Profile views and Codeforces stats in professional badges
- **Left Side**: Beautiful doughnut chart with color-coded segments
- **Right Side**: User information including:
  - Profile avatar
  - Username with verification badge
  - Full name
  - Member since date
  - Max rank (with accurate Codeforces colors)
  - Max rating
  - Contests participated

## 🛠️ Technologies

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure |
| **CSS3** | Modern styling with gradients & animations |
| **JavaScript ES6+** | API calls & DOM manipulation |
| **Chart.js** | Interactive doughnut charts |
| **Codeforces API** | Real-time user data |

## 📊 Codeforces Rating Tiers

| Rating | Rank | Color |
|---|---|---|
| 3000+ | International Grandmaster | 🔴 Red |
| 2600-2999 | Grandmaster | 🟠 Orange |
| 2400-2599 | Master | 🟣 Purple |
| 2300-2399 | Candidate Master | 🔵 Blue |
| 2100-2299 | Expert | 🔷 Cyan |
| 1900-2099 | Specialist | 🟢 Green |
| 1600-1899 | Pupil | ⚫ Grey |
| 1400-1599 | Newbie | 🟢 Light Green |

## 📁 Project Structure

```
codeforces-profile-card/
│
├── 📄 index.html          # Main HTML file with search UI
├── 🎨 styles.css          # Modern CSS with gradients & animations
├── ⚙️ script.js           # API integration & functionality
├── 📖 README.md           # This file
│
└── 📁 joke-generator/     # Bonus: Random Joke Generator
    ├── index.html
    ├── styles.css
    ├── script.js
    └── README.md
```

## 🎨 Customization Guide

### Change Default Username
Edit the last line in `script.js`:
```javascript
const username = params.get('user') || 'EK_Roy';  // Change to your username
```

### Modify Colors
Edit `styles.css`:
```css
/* Background gradient */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Badge colors */
.header-stat:first-child {
    background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
}

.header-stat:last-child {
    background: linear-gradient(135deg, #1627e3 0%, #0d1aa8 100%);
}
```

### Change Chart Colors
Edit `script.js`:
```javascript
backgroundColor: [
    '#667eea',    // Problems Solved
    '#764ba2',    // Contests
    '#f1c40f',    // Contributions
    '#ff69b4'     // Other
]
```

## 📱 Responsive Design

✅ **Desktop (1200px+)** - Two-column layout with full chart
✅ **Tablet (768px-1200px)** - Optimized grid layout
✅ **Mobile (<768px)** - Single column, touch-friendly buttons

## 🎁 Bonus: Random Joke Generator

This repo also includes a fun **Random Joke Generator**!

**Features:**
- 🎭 Multiple joke types (General, Programming, Knock-Knock, Dad jokes)
- 💾 Save favorite jokes with localStorage
- 📋 Copy & share jokes
- 🎨 Beautiful UI with animations

📂 **Located in:** `joke-generator/` folder

[👉 View Joke Generator README](./joke-generator/README.md)

## 🔗 API Integration

**Endpoint Used:**
```
https://codeforces.com/api/user.info?handles=USERNAME
```

**Data Fetched:**
- User profile information
- Rating & max rating
- Rank information
- Avatar URL
- Member since date
- Full name
- Friend count
- Contest participation

## ⚡ Performance

- ✅ Lightweight (< 50KB)
- ✅ Fast API responses
- ✅ Smooth animations
- ✅ Optimized for all devices
- ✅ No external dependencies (except Chart.js)

## 🐛 Error Handling

Gracefully handles:
- ✅ Invalid usernames
- ✅ Network errors
- ✅ API failures
- ✅ Missing data
- ✅ Loading states

User-friendly error messages displayed on screen.

## 🔮 Future Enhancements

- [ ] User comparison (side-by-side profiles)
- [ ] Recent contests performance
- [ ] Problem-solving statistics
- [ ] Friends list integration
- [ ] Dark mode toggle
- [ ] Profile caching
- [ ] Export as PDF/Image
- [ ] Multiple language support
- [ ] User authentication
- [ ] Leaderboard view

## 📖 Usage Examples

### 1. View My Profile
```
https://ekroy.github.io/codeforces-profile-card/
```

### 2. View Specific User
```
https://ekroy.github.io/codeforces-profile-card/?user=tourist
```

### 3. Embed in Your Website
```html
<a href="https://ekroy.github.io/codeforces-profile-card/?user=YOUR_USERNAME" 
   target="_blank" 
   style="display: inline-block; margin: 20px 0;">
   <button style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
      View My Codeforces Profile
   </button>
</a>
```

### 4. Add to README
```markdown
[![My Codeforces Profile](https://img.shields.io/badge/Codeforces-EK__Roy-1f71ff)](https://ekroy.github.io/codeforces-profile-card/?user=EK_Roy)
```

## 📝 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- ✨ Suggest features
- 🔀 Submit pull requests
- 🍴 Fork the project

## 👨‍💻 About Me

**Eshwor Kumar Roy** | Competitive Programmer | Full-Stack Developer

- 📧 Email: [ekroy16@gmail.com](mailto:ekroy16@gmail.com)
- 💼 LinkedIn: [Eshwor Kumar Roy](https://www.linkedin.com/in/eshwor-kumar-roy/)
- 🐙 GitHub: [@EKRoy](https://github.com/EKRoy)
- 🏆 Codeforces: [EK_Roy](https://codeforces.com/profile/EK_Roy)

## 📞 Support

If you have any questions or need help:
- 💬 Open an Issue on GitHub
- 📧 Send me an email
- 🔗 Connect on LinkedIn

---

<div align="center">

### 🎉 [👉 LIVE DEMO - View My Codeforces Profile 👈](https://ekroy.github.io/codeforces-profile-card/?user=EK_Roy)

**Made with ❤️ by Eshwor Kumar Roy**

*Star ⭐ if you find this useful!*

[GitHub](https://github.com/EKRoy/codeforces-profile-card) • [Live Demo](https://ekroy.github.io/codeforces-profile-card/) • [Report Issue](https://github.com/EKRoy/codeforces-profile-card/issues)

</div>
