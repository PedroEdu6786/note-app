import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MemoForm from './MemoForm';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

const MemoStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        headerStyle: styles.navigation,
      }}
    >
      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MemoForm"
        component={MemoForm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MemoStackNavigation;

const styles = StyleSheet.create({
  navigation: {
    backgroundColor: '#F6F6F6',
    elevation: 0, //android
    shadowOpacity: 0, //ios
  },
});
