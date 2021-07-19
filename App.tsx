import React from 'react';
import MemoScreen from './src/screens/MemoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Memos"
          tabBarOptions={{
            activeTintColor: '#5272E4',
            style: styles.bottomNavigation,
            tabStyle: styles.tabScreen,
          }}
        >
          <Tab.Screen
            name="Memos"
            component={MemoScreen}
            options={{
              tabBarLabel: 'Memos',
              tabBarIcon: ({ color, size }) => (
                <Icon name="clipboard-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Groups"
            component={MemoScreen}
            options={{
              tabBarLabel: 'Groups',
              tabBarIcon: ({ color, size }) => (
                <Icon name="file-tray-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 31.25,
  },
  bodyText: {
    fontSize: 16,
  },
  spacing: {
    marginBottom: 30,
  },
  bottomNavigation: {
    backgroundColor: '#F6F6F6',
    elevation: 0, //android
    shadowOpacity: 0, //ios
    borderTopWidth: 0,
    height: 60,
  },
  tabScreen: {
    padding: 8,
  },
});
