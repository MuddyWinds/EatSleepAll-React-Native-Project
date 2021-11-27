import React, { useState } from 'react';
import Entry_onboard from './components/Entry_onboard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,  DefaultTheme, DarkTheme } from '@react-navigation/native';
import { BottomTabNavigator } from './Routes/BottomTabStack';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';


// Activate when for demo: console.disableYellowBox = true;

const Stack = createStackNavigator();

export default function App() {
  // const appTheme = darkMode? DarkTheme : DefaultTheme;

  return (
    // <PaperProvider theme={PaperDarkTheme}>
    <NavigationContainer>  
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Entry_onboard " component={Entry_onboard}/>
        <Stack.Screen name="main_info" component={BottomTabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
    // </PaperProvider>
  );
};
 
