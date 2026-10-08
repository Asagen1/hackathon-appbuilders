import '../global.css';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '@navigation';
import { useAppStore } from '@hooks';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  const loadPersistedState = useAppStore((state) => state.loadPersistedState);

  useEffect(() => {
    // Load persisted state from MMKV on app start
    loadPersistedState();
  }, [loadPersistedState]);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

