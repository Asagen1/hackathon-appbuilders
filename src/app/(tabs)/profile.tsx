import React from 'react';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { storageService } from '../../services/storage';

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
    <View style={styles.container}>
      <Text style={styles.title}>Profile & Settings</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          onPress={handleViewStorage}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>
            View Storage Data
          </Text>
        </Pressable>

        <Pressable
          onPress={handleClearStorage}
          style={styles.dangerButton}
        >
          <Text style={styles.dangerButtonText}>
            Clear All Storage
          </Text>
        </Pressable>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 Tip: Use this screen to test storage functionality during development.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#0ea5e9',
    padding: 16,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  dangerButton: {
    backgroundColor: '#ef4444',
    padding: 16,
    borderRadius: 8,
  },
  dangerButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  infoBox: {
    marginTop: 32,
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
  },
});