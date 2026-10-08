import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

interface DataListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  estimatedItemSize: number;
  loading?: boolean;
  error?: string;
  emptyMessage?: string;
  onRefresh?: () => void;
  refreshing?: boolean;
  onEndReached?: () => void;
  keyExtractor?: (item: T, index: number) => string;
}

export default function DataList<T>({
  data,
  renderItem,
  estimatedItemSize,
  loading = false,
  error,
  emptyMessage = 'No data available',
  onRefresh,
  refreshing = false,
  onEndReached,
  keyExtractor,
}: DataListProps<T>) {
  if (loading && data.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0ea5e9" />
        <Text className="text-gray-600 mt-4">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-red-500 text-center text-lg font-semibold mb-2">
          Error
        </Text>
        <Text className="text-gray-600 text-center">{error}</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-gray-600 text-center">{emptyMessage}</Text>
      </View>
    );
  }

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={estimatedItemSize}
      keyExtractor={keyExtractor}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
}
