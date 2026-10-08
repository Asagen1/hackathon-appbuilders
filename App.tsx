import './global.css';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={styles.title}>Hackathon App</Text>
          <Text style={styles.subtitle}>
            Ready to build! Your foundation is set up.
          </Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>✅ What's Ready:</Text>
            <Text style={styles.infoText}>
              • React Native with Expo{'\n'}
              • MMKV Storage (v4){'\n'}
              • FlashList (v2){'\n'}
              • NativeWind (Tailwind CSS){'\n'}
              • Zustand + React Query{'\n'}
              • TypeScript configured
            </Text>
          </View>
        </View>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#f0f9ff',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    maxWidth: 400,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0c4a6e',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#075985',
    lineHeight: 20,
  },
});