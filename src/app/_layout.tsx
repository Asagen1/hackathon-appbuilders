import '../global.css';
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useAppStore } from '../hooks/useAppStore';

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {
  const loadPersistedState = useAppStore((state) => state.loadPersistedState);

  useEffect(() => {
    // Load persisted state from MMKV on app start
    loadPersistedState();
  }, [loadPersistedState]);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0ea5e9',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false 
          }} 
        />
      </Stack>
    </QueryClientProvider>
  );
}