import React from 'react';
import Entry_onboard from './components/Entry_onboard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './Routes/BottomTabStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Entry_onboard " component={Entry_onboard}/>
        <Stack.Screen name="main_info" component={BottomTabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
