import { NavigatorScreenParams } from '@react-navigation/native';

// Define your screen params here
export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  // Add other root screens here
};

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Profile: undefined;
  // Add other tab screens here
};

// Helper types for navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
