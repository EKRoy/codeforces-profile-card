# 🏆 Codeforces Profile Card Widget

A beautiful, interactive widget to display Codeforces user profiles with real-time data fetching from the official Codeforces API. Features a modern design with circular progress chart and comprehensive user statistics.

## 🎉 Live Demo - My Codeforces Profile

<div align="center">
  <h3>📊 Check out my live Codeforces profile below:</h3>
  
  <iframe src="https://ekroy.github.io/codeforces-profile-card/?user=EK_Roy" width="100%" height="700" frameborder="0" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);"></iframe>
</div>

---

## ✨ Features

- 🔍 **Search Profiles** - Find any Codeforces user by username
- 📊 **Visual Stats** - Circular doughnut chart showing rating distribution  
- 🏆 **User Rankings** - Display Expert, Master, Specialist ranks with colors
- 👤 **User Information** - Shows avatar, name, full name, and join date
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Real-time API** - Fetches live data from Codeforces API
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 🏅 **Badge-Style Header** - Professional profile views and stats display

## 🚀 Quick Start

### Option 1: View Live
Simply visit: **[https://ekroy.github.io/codeforces-profile-card/](https://ekroy.github.io/codeforces-profile-card/)**

### Option 2: Direct Username Link
```
https://ekroy.github.io/codeforces-profile-card/?user=tourist
```

Replace `tourist` with any Codeforces username!

### Option 3: Clone & Run Locally
```bash
git clone https://github.com/EKRoy/codeforces-profile-card.git
cd codeforces-profile-card
# Open index.html in your browser
```

### Option 4: Embed in Your Website
```html
<iframe 
  src="https://ekroy.github.io/codeforces-profile-card/?user=YOUR_USERNAME" 
  width="100%" 
  height="700" 
  frameborder="0" 
  style="border-radius: 10px;">
</iframe>
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6+** - Async/await API calls
- **Chart.js** - Beautiful doughnut charts
- **Codeforces API** - Official user data

## 📚 API Endpoints

The widget uses the official Codeforces API:
- `https://codeforces.com/api/user.info?handles={username}` - Get user information

## 🎯 Rating Tiers & Colors

The widget displays accurate Codeforces rating colors:

| Rating Range | Title | Color |
|---|---|---|
| 3000+ | International Grandmaster | Red (#ff0000) |
| 2600-2999 | Grandmaster | Orange (#ff8c00) |
| 2400-2599 | Master | Purple (#aa00aa) |
| 2300-2399 | Candidate Master | Blue (#0000ff) |
| 2100-2299 | Expert | Cyan (#0088ff) |
| 1900-2099 | Specialist | Green (#00aa00) |
| 1600-1899 | Pupil | Grey (#888888) |
| 1400-1599 | Newbie | Light Green (#00aa00) |
| <1400 | Beginner | Dark Grey (#666666) |

## 📁 File Structure

```
codeforces-profile-card/
├── index.html          # Main HTML file with search UI
├── styles.css          # Modern styling with gradients
├── script.js           # API integration and functionality
├── README.md           # Documentation
└── joke-generator/     # Bonus: Random Joke Generator
    ├── index.html
    ├── styles.css
    ├── script.js
    └── README.md
```

## 🎨 Customization

### Change Colors
Edit the gradient in `styles.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modify Chart Colors
Update chart colors in `script.js`:
```javascript
backgroundColor: [
    '#667eea',    // Problems
    '#764ba2',    // Contests
    '#f1c40f',    // Contributions
    '#ff69b4'     // Other
]
```

### Change Default Username
Edit the last line in `script.js`:
```javascript
const username = params.get('user') || 'EK_Roy';  // Change 'EK_Roy' to your username
```

## 📱 Responsive Breakpoints

- **Desktop** (900px+) - Two-column layout with full chart
- **Tablet** (600px-900px) - Single column layout  
- **Mobile** (<600px) - Optimized for small screens

## 🐛 Error Handling

The widget gracefully handles:
- ✅ Invalid usernames
- ✅ Network errors
- ✅ API failures
- ✅ Missing data

## 🔄 Future Enhancements

Potential features to add:
- [ ] User comparison (side-by-side profiles)
- [ ] Recent contests performance
- [ ] Problem-solving heatmap
- [ ] Friends list integration
- [ ] Dark mode toggle
- [ ] Export profile as image/PDF
- [ ] Multiple language support

## 📖 Usage Examples

### Get Started Immediately
1. Visit: https://ekroy.github.io/codeforces-profile-card/
2. Enter a Codeforces username
3. View the profile card with stats and chart

### Search Different Users
```
https://ekroy.github.io/codeforces-profile-card/?user=MiFarah
https://ekroy.github.io/codeforces-profile-card/?user=Petr
https://ekroy.github.io/codeforces-profile-card/?user=subscriber
```

### Embed in Portfolio
Add this to your personal website/portfolio:
```html
<section id="codeforces">
  <h2>My Codeforces Profile</h2>
  <iframe 
    src="https://ekroy.github.io/codeforces-profile-card/?user=EK_Roy"
    width="100%"
    height="700"
    frameborder="0"
    style="border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
  </iframe>
</section>
```

## 🎁 Bonus: Random Joke Generator

This repository also includes a fun **Random Joke Generator** widget!

📂 Located in: `joke-generator/` folder

Features:
- 🎭 Multiple joke categories (General, Programming, Knock-Knock, Dad jokes)
- 💾 Save favorite jokes with localStorage
- 📋 Copy & share functionality
- 🎨 Beautiful UI with animations

Check it out: [Joke Generator README](./joke-generator/README.md)

## 📝 License

Free to use and modify for personal and commercial projects.

## 🤝 Contributing

Feel free to:
- 🐛 Report bugs
- ✨ Suggest new features
- 🔀 Submit pull requests
- 🍴 Fork and modify

## 🙏 Credits

- **Data Source**: [Codeforces API](https://codeforces.com/api/help)
- **Chart Library**: [Chart.js](https://www.chartjs.org/)
- **Icons**: Emoji & Unicode
- **Inspiration**: Official Codeforces profile pages

## 📞 Contact & Support

- **Email**: ekroy16@gmail.com
- **GitHub**: [@EKRoy](https://github.com/EKRoy)
- **LinkedIn**: [Eshwor Kumar Roy](https://www.linkedin.com/in/eshwor-kumar-roy)

---

## 📊 Project Stats

- ⭐ Star this project if you find it useful!
- 🍴 Fork to create your own version
- 🐛 Report issues to help improve it
- 💬 Share your feedback

---

<div align="center">

**Made with ❤️ by [Eshwor Kumar Roy](https://github.com/EKRoy)**

**For Codeforces enthusiasts, competitive programmers, and developers everywhere** 🚀

[View Live Demo](https://ekroy.github.io/codeforces-profile-card/) • [Source Code](https://github.com/EKRoy/codeforces-profile-card) • [Report Issue](https://github.com/EKRoy/codeforces-profile-card/issues)

</div>
