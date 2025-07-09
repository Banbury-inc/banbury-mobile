# Banbury Mobile

A modern, beautiful React Native mobile application built with TypeScript, featuring a comprehensive UI design and navigation system.

## 🚀 Features

- **TypeScript Support**: Full TypeScript implementation for type safety
- **Modern Navigation**: React Navigation with bottom tabs and stack navigation
- **Beautiful UI**: Modern, clean design with consistent styling
- **Multiple Screens**: Home, Profile, Settings, and Detail screens
- **Interactive Elements**: Switches, buttons, and touch interactions
- **Responsive Design**: Optimized for different screen sizes
- **Cross-Platform**: Works on both iOS and Android

## 📱 Screens

### Home Screen
- Welcome message and app introduction
- Feature cards with navigation to detail views
- Quick stats display
- Modern card-based layout

### Profile Screen
- User profile information
- Account settings and preferences
- Activity statistics
- Editable profile sections

### Settings Screen
- App preferences with toggle switches
- Privacy and support options
- App information
- Logout functionality

### Detail Screen
- Detailed feature information
- Interactive like and bookmark buttons
- Statistics and technical details
- Rich content display

## 🛠️ Tech Stack

- **React Native**: 0.80.1
- **TypeScript**: 5.0.4
- **React Navigation**: 6.x
- **React**: 19.1.0

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (>= 18)
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd BanburyMobile
```

### 2. Install dependencies
```bash
npm install
```

### 3. iOS Setup (macOS only)
```bash
cd ios
pod install
cd ..
```

### 4. Start the Metro bundler
```bash
npm start
```

### 5. Run the app

#### For Android:
```bash
npm run android
```

#### For iOS:
```bash
npm run ios
```

## 📁 Project Structure

```
BanburyMobile/
├── src/
│   ├── components/          # Reusable components
│   │   └── TabBarIcon.tsx
│   ├── screens/            # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── DetailScreen.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── navigation.ts
│   └── utils/              # Utility functions and constants
│       └── constants.ts
├── android/                # Android-specific files
├── ios/                    # iOS-specific files
├── App.tsx                 # Main app component
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Design System

The app uses a consistent design system with:

- **Colors**: Primary blue (#007AFF), with supporting colors for different states
- **Typography**: Consistent font sizes and weights
- **Spacing**: Standardized spacing using a scale system
- **Shadows**: Subtle shadows for depth and elevation
- **Border Radius**: Consistent rounded corners

## 🔧 Available Scripts

- `npm start`: Start the Metro bundler
- `npm run android`: Run the app on Android
- `npm run ios`: Run the app on iOS
- `npm test`: Run tests
- `npm run lint`: Run ESLint

## 📱 Navigation

The app uses React Navigation with:

- **Bottom Tab Navigator**: For main app sections (Home, Profile, Settings)
- **Stack Navigator**: For navigation between screens and detail views
- **Type-safe navigation**: Full TypeScript support for navigation

## 🎯 Key Features

### Type Safety
- Full TypeScript implementation
- Type-safe navigation
- Proper interface definitions

### Modern UI/UX
- Clean, modern design
- Consistent styling
- Smooth animations and transitions
- Accessibility considerations

### Scalable Architecture
- Modular component structure
- Reusable utilities and constants
- Clear separation of concerns

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [React Native documentation](https://reactnative.dev/)
2. Search existing issues
3. Create a new issue with detailed information

## 🔮 Future Enhancements

- Dark mode support
- Internationalization (i18n)
- Offline functionality
- Push notifications
- Analytics integration
- Unit and integration tests
- CI/CD pipeline

---

Built with ❤️ using React Native and TypeScript
