# Hackathon App Builders

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Android Studio (for Android development)
- Android SDK installed and configured

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on Android (Development Build):**
   ```bash
   # First time only - generates android folder
   npx expo prebuild
   
   # Run on Android device/emulator
   npm run android
   ```

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run web` - Run in browser (web support)
- `npx expo prebuild` - Generate native folders (needed for MMKV)

## 🏗️ Project Structure

```
hackathon-appbuilders/
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components (DataList, etc)
│   │   └── features/       # Feature-specific components
│   ├── screens/            # Screen components
│   ├── navigation/         # Navigation setup
│   ├── services/
│   │   ├── api/           # API client
│   │   └── storage/       # MMKV storage service
│   ├── hooks/             # Custom hooks (Zustand stores)
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript types
│   └── constants/         # App constants (colors, etc)
├── assets/                # Images, fonts, icons
├── docs/                  # Documentation
└── App.tsx               # Main app entry
```

## 🛠️ Tech Stack

### Core
- **React Native** with **Expo SDK 57**
- **TypeScript** (strict mode)
- **NativeWind** (Tailwind CSS for React Native)

### Storage & State
- **MMKV** - Fast key-value storage (replacement for AsyncStorage)
- **Zustand** - Global state management
- **React Query** - Server state & data fetching

### Navigation
- **React Navigation** - Stack + Tab navigation

### Lists
- **FlashList** - High-performance lists

### Dev Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety

## 📱 Testing on Device

### Option 1: Development Build (Recommended)
1. Run `npx expo prebuild` to generate native folders
2. Run `npm run android` to build and install on device/emulator
3. App will hot reload when you make changes

### Option 2: Android Emulator
1. Open Android Studio
2. Start an Android emulator (AVD)
3. Run `npm run android`

### Option 3: Physical Device
1. Enable USB debugging on your Android device
2. Connect via USB
3. Run `npm run android`

## 🎨 Styling with NativeWind

Use Tailwind classes directly:

```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-2xl font-bold text-gray-900">
    Hello World
  </Text>
</View>
```

## 💾 Storage Usage

```tsx
import { storageService } from '@services/storage';

// String
storageService.setString('key', 'value');
const value = storageService.getString('key');

// Object
storageService.setObject('user', { name: 'John' });
const user = storageService.getObject<User>('user');

// Boolean
storageService.setBoolean('isLoggedIn', true);
const isLoggedIn = storageService.getBoolean('isLoggedIn');
```

## 🔗 API Integration

```tsx
import { apiClient } from '@services/api';

// GET request
const data = await apiClient.get('/endpoint');

// POST request
const result = await apiClient.post('/endpoint', { data });
```

## 📊 State Management

```tsx
import { useAppStore } from '@hooks';

function MyComponent() {
  const { isOnboardingComplete, setOnboardingComplete } = useAppStore();
  
  // Use state
  return (
    <Button onPress={() => setOnboardingComplete(true)}>
      Complete
    </Button>
  );
}
```

## 📝 Import Aliases

Project uses path aliases for cleaner imports:

```tsx
import { Button } from '@components/common';
import { HomeScreen } from '@screens';
import { apiClient } from '@services/api';
import { useAppStore } from '@hooks';
import { Colors } from '@constants';
```

## 🔧 Troubleshooting

### MMKV not working
- Make sure you ran `npx expo prebuild`
- Rebuild the app with `npm run android`

### Module not found errors
- Clear Metro cache: `npx expo start -c`
- Reinstall: `rm -rf node_modules && npm install`

### Android build fails
- Check Android SDK is installed
- Verify ANDROID_HOME environment variable
- Try `cd android && ./gradlew clean`

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Navigation](https://reactnavigation.org)
- [NativeWind](https://www.nativewind.dev)
- [MMKV](https://github.com/mrousavy/react-native-mmkv)
- [FlashList](https://shopify.github.io/flash-list)
- [Zustand](https://zustand-demo.pmnd.rs)
- [React Query](https://tanstack.com/query)

## 🎯 Ready for Hackathon!

Your environment is fully configured. Start building by:
1. Creating screens in `src/screens/`
2. Adding components in `src/components/`
3. Setting up API calls in `src/services/api/`
4. Managing state with Zustand

Good luck! 🚀
