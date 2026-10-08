import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { storageService } from '@services/storage';
import { useAppStore } from '@hooks';

export default function HomeScreen() {
  const { isOnboardingComplete, setOnboardingComplete } = useAppStore();

  const handleTestStorage = () => {
    // Test MMKV storage
    storageService.setString('test_key', 'Hello from MMKV!');
    const value = storageService.getString('test_key');
    alert(`Stored and retrieved: ${value}`);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Hackathon! 🚀
        </Text>
        <Text className="text-base text-gray-600 mb-6">
          Your agentic development environment is ready.
        </Text>

        <View className="bg-primary-50 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold text-primary-900 mb-2">
            ✅ Setup Complete
          </Text>
          <Text className="text-sm text-primary-700">
            • React Native with Expo{'\n'}
            • MMKV Storage (faster than AsyncStorage){'\n'}
            • FlashList (installed){'\n'}
            • NativeWind (Tailwind CSS){'\n'}
            • React Navigation{'\n'}
            • Zustand + React Query
          </Text>
        </View>

        <Pressable
          onPress={handleTestStorage}
          className="bg-primary-500 p-4 rounded-lg mb-4 active:bg-primary-600"
        >
          <Text className="text-white text-center font-semibold">
            Test MMKV Storage
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setOnboardingComplete(!isOnboardingComplete)}
          className="bg-gray-200 p-4 rounded-lg active:bg-gray-300"
        >
          <Text className="text-gray-900 text-center font-semibold">
            Onboarding: {isOnboardingComplete ? 'Complete ✓' : 'Incomplete'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
