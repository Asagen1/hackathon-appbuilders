import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { storageService } from '../../services/storage';
import { useAppStore } from '../../hooks/useAppStore';

export default function HomeScreen() {
  const { isOnboardingComplete, setOnboardingComplete } = useAppStore();

  const handleTestStorage = () => {
    // Test MMKV storage
    storageService.setString('test_key', 'Hello from MMKV!');
    const value = storageService.getString('test_key');
    alert(`Stored and retrieved: ${value}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Hackathon! 🚀</Text>
        <Text style={styles.subtitle}>
          Your agentic development environment is ready.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>✅ Setup Complete</Text>
          <Text style={styles.infoText}>
            • React Native with Expo{'\n'}
            • MMKV Storage (v4){'\n'}
            • FlashList (v2){'\n'}
            • Expo Router (file-based routing){'\n'}
            • Zustand + React Query{'\n'}
            • TypeScript configured
          </Text>
        </View>

        <Pressable
          onPress={handleTestStorage}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>
            Test MMKV Storage
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setOnboardingComplete(!isOnboardingComplete)}
          style={styles.secondaryButton}
        >
          <Text style={styles.secondaryButtonText}>
            Onboarding: {isOnboardingComplete ? 'Complete ✓' : 'Incomplete'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  infoBox: {
    backgroundColor: '#f0f9ff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
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
  primaryButton: {
    backgroundColor: '#0ea5e9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#e5e7eb',
    padding: 16,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#111827',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});