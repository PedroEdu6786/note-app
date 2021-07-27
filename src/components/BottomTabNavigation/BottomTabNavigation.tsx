import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import GroupListScreen from '../../screens/GroupListScreen/GroupListScreen';
import MemoListScreen from '../../screens/MemoListScreen/MemoListScreen';
import createStyles from '../../../styles/base';
import { componentStyles } from './BottomTabNavigation.styles';

const Tab = createBottomTabNavigator();
const styles = createStyles(componentStyles);

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Memos"
      tabBarOptions={{
        activeTintColor: '#5272E4',
        style: [styles.bottomNavigation, styles.navigation],
        tabStyle: styles.tabScreen,
      }}
    >
      <Tab.Screen
        name="Memos"
        component={MemoListScreen}
        options={{
          tabBarLabel: 'Memos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupListScreen}
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
