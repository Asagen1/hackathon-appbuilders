import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Screen</Text>
      <Text style={styles.subtitle}>
        Build your hackathon features here!
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 Tip: This is a tab screen created with Expo Router.{'\n'}
          {'\n'}
          The file path determines the route:{'\n'}
          src/app/(tabs)/explore.tsx → /explore
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
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
  },
  infoText: {
    fontSize: 14,
    color: '#075985',
    lineHeight: 20,
  },
});