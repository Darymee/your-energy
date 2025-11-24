# Your Energy 💪

A modern web application for fitness enthusiasts that helps track exercises, manage favorites, and maintain a healthy lifestyle.

[![Build and deploy to GitHub Pages](https://github.com/your-username/your-energy/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/your-energy/actions/workflows/deploy.yml)

## 🌟 Features

- **Exercise Catalog**: Browse exercises by muscles, body parts, or equipment
- **Search & Filter**: Find specific exercises quickly with advanced search
- **Favorites Management**: Save and organize your favorite exercises
- **Exercise Details**: View comprehensive information including ratings, burned calories, and instructions
- **Rating System**: Rate exercises and leave reviews
- **Daily Quotes**: Get motivated with inspirational fitness quotes
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Email Subscription**: Subscribe to fitness updates

## 🚀 Live Demo

[View Live Application](https://your-username.github.io/your-energy/)

## 📸 Screenshots

### Home Page
![Home Page](docs/screenshots/home.png)

### Exercises
![Exercises](docs/screenshots/exercises.png)

### Favorites
![Favorites](docs/screenshots/favorites.png)

## 🛠️ Built With

- **Vanilla JavaScript** - Core functionality
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **iziToast** - Notification system
- **CSS3** - Styling with custom properties
- **HTML5** - Semantic markup

## 📋 Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

## 💻 Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/your-energy.git
```

2. Navigate to project directory
```bash
cd your-energy
```

3. Install dependencies
```bash
npm install
```

4. Start development server
```bash
npm run dev
```

5. Open browser at `http://localhost:5173`

## 🏗️ Build for Production
```bash
npm run build
```

The optimized files will be in the `dist` directory.

## 📁 Project Structure
```
your-energy/
├── src/
│   ├── css/
│   │   ├── components/    # Component styles
│   │   ├── layout/        # Layout styles
│   │   └── utils/         # Utility styles
│   ├── js/
│   │   ├── api.js         # API integration
│   │   ├── exercises.js   # Exercise functionality
│   │   ├── favorites.js   # Favorites management
│   │   ├── modal.js       # Modal system
│   │   ├── template.js    # HTML templates
│   │   └── ...
│   ├── components/        # HTML partials
│   ├── partials/          # Page sections
│   ├── public/            # Static assets
│   ├── index.html         # Home page
│   └── favorites.html     # Favorites page
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD configuration
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features in Detail

### Exercise Filtering
- Filter by muscle groups
- Filter by body parts
- Filter by equipment type
- Real-time search with debouncing

### Favorites System
- Add/remove exercises
- Persistent storage using localStorage
- Quick access to saved exercises

### Rating & Reviews
- 5-star rating system
- Written reviews
- Email validation

### Theme Support
- Light and dark themes
- Smooth transitions
- Persistent preference

### Responsive Design
- Mobile-first approach
- Breakpoints: 375px, 768px, 1440px
- Touch-friendly interface

## 🔌 API Integration

The application integrates with the Your Energy API:

**Base URL**: `https://your-energy.b.goit.study/api`

### Endpoints Used:
- `GET /filters` - Get exercise filters
- `GET /exercises` - Get exercises list
- `GET /exercises/:id` - Get exercise details
- `PATCH /exercises/:id/rating` - Rate exercise
- `GET /quote` - Get daily quote
- `POST /subscription` - Subscribe to newsletter

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Support

- iOS Safari 12+
- Android Chrome 80+

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Team

- [@VladyslavPankratov](https://github.com/VladyslavPankratov)
- [@tchaikivskyi](https://github.com/tchaikivskyi)

## 📝 Code Style

This project follows:
- Prettier configuration (`.prettierrc.json`)
- EditorConfig settings (`.editorconfig`)

Format code before committing:
```bash
npx prettier --write .
```

## 🔧 Configuration

### Vite Configuration
- Base URL: `/your-energy/`
- Build output: `dist/`
- Source maps enabled
- CSS sorting: mobile-first

### Environment
No environment variables required for basic functionality.

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [GoIT](https://goit.global/) - Educational platform
- Exercise data provided by Your Energy API
- Icons from custom sprite
- Fonts: DM Sans from Google Fonts

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Made with ❤️ by the Your Energy Team**