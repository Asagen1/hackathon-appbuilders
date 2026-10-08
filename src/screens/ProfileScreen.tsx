import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { storageService } from '@services/storage';

export default function ProfileScreen() {
  const handleClearStorage = () => {
    Alert.alert(
      'Clear All Storage?',
      'This will delete all stored data.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            storageService.clearAll();
            Alert.alert('Success', 'All storage cleared!');
          },
        },
      ]
    );
  };

  const handleViewStorage = () => {
    const data = storageService.getAllData();
    Alert.alert('Storage Data', JSON.stringify(data, null, 2));
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-900 mb-6">
        Profile & Settings
      </Text>

      <View className="space-y-3">
        <Pressable
          onPress={handleViewStorage}
          className="bg-blue-500 p-4 rounded-lg active:bg-blue-600"
        >
          <Text className="text-white text-center font-semibold">
            View Storage Data
          </Text>
        </Pressable>

        <Pressable
          onPress={handleClearStorage}
          className="bg-red-500 p-4 rounded-lg mt-3 active:bg-red-600"
        >
          <Text className="text-white text-center font-semibold">
            Clear All Storage
          </Text>
        </Pressable>
      </View>

      <View className="mt-8 p-4 bg-gray-100 rounded-lg">
        <Text className="text-sm text-gray-600">
          💡 Tip: Use this screen to test storage functionality during development.
        </Text>
      </View>
    </View>
  );
}
