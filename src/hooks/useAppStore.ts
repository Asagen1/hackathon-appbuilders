import { create } from 'zustand';
import { storageService, StorageKeys } from '@services/storage';

interface AppState {
  isOnboardingComplete: boolean;
  theme: 'light' | 'dark';
  setOnboardingComplete: (complete: boolean) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  loadPersistedState: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isOnboardingComplete: false,
  theme: 'light',

  setOnboardingComplete: (complete) => {
    storageService.setBoolean(StorageKeys.ONBOARDING_COMPLETE, complete);
    set({ isOnboardingComplete: complete });
  },

  setTheme: (theme) => {
    storageService.setString(StorageKeys.THEME, theme);
    set({ theme });
  },

  loadPersistedState: () => {
    const onboardingComplete = storageService.getBoolean(StorageKeys.ONBOARDING_COMPLETE) ?? false;
    const theme = (storageService.getString(StorageKeys.THEME) as 'light' | 'dark') ?? 'light';
    set({ isOnboardingComplete: onboardingComplete, theme });
  },
}));
