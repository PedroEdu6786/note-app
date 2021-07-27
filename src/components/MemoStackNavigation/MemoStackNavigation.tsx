import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MemoForm from '../../screens/MemoForm/MemoForm';
import BottomTabNavigation from '../BottomTabNavigation/BottomTabNavigation';
import createStyles from '../../../styles/base';
import GroupForm from '../../screens/GroupForm/GroupForm';

const Stack = createStackNavigator();
const styles = createStyles();

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
      <Stack.Screen
        name="GroupForm"
        component={GroupForm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MemoStackNavigation;
