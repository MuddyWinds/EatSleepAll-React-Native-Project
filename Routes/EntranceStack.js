import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Entry_onboard from '../components/Entry_onboard ';
import Entry_home from '../components/Entry_home';

const Stack = createStackNavigator();

const EntranceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Entry_onboard " component={Entry_onboard} />
      <Stack.Screen name="Entry_home" component={Entry_home} />
    </Stack.Navigator>
  );
}

export { EntranceStackNavigator }; 