# 🚀 Quick Start Guide - Hackathon Tomorrow!

## ⚡ Getting Started (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Native Folders (Required for MMKV)
```bash
npx expo prebuild
```

### 3. Start Development
```bash
# Start Metro bundler
npm start

# In another terminal, run on Android
npm run android
```

## 📱 Testing Options

### Option 1: Android Emulator (Recommended)
1. Open Android Studio
2. Start an AVD (Android Virtual Device)
3. Run `npm run android`
4. App will install and hot reload on changes

### Option 2: Physical Android Device
1. Enable Developer Options on your phone
2. Enable USB Debugging
3. Connect via USB
4. Run `npm run android`
5. App installs and hot reloads

## 🏗️ Project Structure

```
src/
├── components/common/    # Reusable components (buttons, lists, etc)
├── screens/             # Full screens (Home, Explore, Profile)
├── navigation/          # Navigation setup (already configured)
├── services/
│   ├── api/            # API client (ready to use)
│   └── storage/        # MMKV storage service (faster than AsyncStorage)
├── hooks/              # Custom hooks & Zustand stores
└── constants/          # Colors, config, etc
```

## 🎯 Start Building Features

### Create a New Screen
```tsx
// src/screens/MyFeatureScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function MyFeatureScreen() {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold">My Feature</Text>
    </View>
  );
}
```

### Add Storage
```tsx
import { storageService } from '@services/storage';

// Save data
storageService.setObject('myData', { name: 'John', score: 100 });

// Load data
const data = storageService.getObject('myData');
```

### Make API Calls
```tsx
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@services/api';

function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['myData'],
    queryFn: () => apiClient.get('/endpoint'),
  });
  
  if (isLoading) return <Text>Loading...</Text>;
  return <Text>{data.message}</Text>;
}
```

### Use Global State
```tsx
import { useAppStore } from '@hooks';

function MyComponent() {
  const { isOnboardingComplete, setOnboardingComplete } = useAppStore();
  
  return (
    <Button onPress={() => setOnboardingComplete(true)}>
      Complete Setup
    </Button>
  );
}
```

## 🎨 Styling with NativeWind

Use Tailwind classes directly:
```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-2xl font-bold text-blue-500">
    Styled with Tailwind!
  </Text>
  <View className="mt-4 bg-gray-100 p-3 rounded-lg">
    <Text className="text-sm text-gray-700">Card content</Text>
  </View>
</View>
```

## 📊 Using Lists

Always use FlashList for performance:
```tsx
import { DataList } from '@components/common';

<DataList
  data={items}
  renderItem={({ item }) => <ItemCard item={item} />}
  estimatedItemSize={100}
  loading={isLoading}
  emptyMessage="No items yet"
/>
```

## 🔧 Useful Commands

```bash
npm start              # Start Metro bundler
npm run android        # Run on Android
npm run prebuild       # Generate native folders
npx expo start -c      # Clear Metro cache
npm run lint           # Check code quality
npm run format         # Format code
npm run type-check     # TypeScript check
```

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
npx expo start -c
```

### MMKV not working
```bash
npx expo prebuild
npm run android
```

### Build fails
```bash
cd android
./gradlew clean
cd ..
npm run android
```

## 📚 Key Resources

- **Architecture**: `docs/ARCHITECTURE.md`
- **Coding Standards**: `docs/CONVENTIONS.md`
- **API Guide**: `docs/API.md`
- **AI Context**: `.cursorrules` (for AI assistants)

## 💡 Tips for Tomorrow

1. **Start with the core feature** - build the main functionality first
2. **Use existing components** - HomeScreen shows MMKV example
3. **Style quickly with Tailwind** - just use className
4. **Test on real device** - more reliable than emulator
5. **Commit often** - use `git commit -m "feat: description"`
6. **Check examples** - all screens show working patterns

## 🎬 Demo Features Already Built

- ✅ Tab navigation (Home, Explore, Profile)
- ✅ MMKV storage with test buttons
- ✅ Zustand state management
- ✅ React Query setup
- ✅ NativeWind styling
- ✅ Type-safe navigation
- ✅ Example DataList component

## 🚀 You're Ready!

Everything is configured. Just run:
```bash
npm run android
```

And start building your hackathon app! Good luck! 🎉
