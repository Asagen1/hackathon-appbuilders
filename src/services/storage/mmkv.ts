import { MMKV } from 'react-native-mmkv';

// Initialize MMKV instance
export const storage = new MMKV();

/**
 * Type-safe MMKV Storage Service
 * Provides easy access to MMKV with TypeScript support
 */
class StorageService {
  private storage: MMKV;

  constructor(mmkvInstance: MMKV) {
    this.storage = mmkvInstance;
  }

  // String operations
  setString(key: string, value: string): void {
    this.storage.set(key, value);
  }

  getString(key: string): string | undefined {
    return this.storage.getString(key);
  }

  // Number operations
  setNumber(key: string, value: number): void {
    this.storage.set(key, value);
  }

  getNumber(key: string): number | undefined {
    return this.storage.getNumber(key);
  }

  // Boolean operations
  setBoolean(key: string, value: boolean): void {
    this.storage.set(key, value);
  }

  getBoolean(key: string): boolean | undefined {
    return this.storage.getBoolean(key);
  }

  // Object operations (JSON serialization)
  setObject<T>(key: string, value: T): void {
    this.storage.set(key, JSON.stringify(value));
  }

  getObject<T>(key: string): T | undefined {
    const value = this.storage.getString(key);
    if (!value) return undefined;
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`Failed to parse object for key: ${key}`, error);
      return undefined;
    }
  }

  // Delete operation
  delete(key: string): void {
    this.storage.delete(key);
  }

  // Check if key exists
  contains(key: string): boolean {
    return this.storage.contains(key);
  }

  // Get all keys
  getAllKeys(): string[] {
    return this.storage.getAllKeys();
  }

  // Clear all data
  clearAll(): void {
    this.storage.clearAll();
  }

  // Get all data (for debugging)
  getAllData(): Record<string, any> {
    const keys = this.getAllKeys();
    const data: Record<string, any> = {};
    keys.forEach((key) => {
      data[key] = this.storage.getString(key);
    });
    return data;
  }
}

// Export singleton instance
export const storageService = new StorageService(storage);

// Storage keys (centralized for easy management)
export const StorageKeys = {
  USER_TOKEN: 'user_token',
  USER_DATA: 'user_data',
  THEME: 'theme',
  ONBOARDING_COMPLETE: 'onboarding_complete',
  // Add more keys as needed
} as const;
