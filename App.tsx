import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MemoStackNavigation from './src/components/MemoStackNavigation/MemoStackNavigation';
import GlobalStateProvider from './src/store/GlobalStateProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobalStateProvider>
          <MemoStackNavigation />
        </GlobalStateProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
