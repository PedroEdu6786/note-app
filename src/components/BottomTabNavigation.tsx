import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import GroupScreen from '../screens/GroupScreen';
import MemoScreen from '../screens/MemoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
        component={GroupScreen}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({ color, size }) => (
            <Icon name="file-tray-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
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
