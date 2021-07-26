import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MemoStackNavigation from './src/components/MemoStackNavigation/MemoStackNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MemoStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
