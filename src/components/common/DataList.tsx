import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

interface DataListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
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
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0ea5e9" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorTitle}>Error</Text>
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyMessage}>{emptyMessage}</Text>
      </View>
    );
  }

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  loadingText: {
    color: '#6b7280',
    marginTop: 16,
  },
  errorTitle: {
    color: '#ef4444',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  errorMessage: {
    color: '#6b7280',
    textAlign: 'center',
  },
  emptyMessage: {
    color: '#6b7280',
    textAlign: 'center',
  },
});
