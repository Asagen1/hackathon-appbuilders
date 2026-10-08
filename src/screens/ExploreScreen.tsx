import React from 'react';
import { View, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <View className="flex-1 bg-white items-center justify-center p-4">
      <Text className="text-2xl font-bold text-gray-900 mb-2">
        Explore Screen
      </Text>
      <Text className="text-base text-gray-600 text-center">
        Build your hackathon features here!
      </Text>
    </View>
  );
}
