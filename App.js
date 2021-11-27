import React, { useState, useEffect } from 'react';
import Entry_onboard from './components/Entry_onboard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,  DefaultTheme, DarkTheme } from '@react-navigation/native';
import { BottomTabNavigator } from './Routes/BottomTabStack';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import {EventRegister} from "react-native-event-listeners";
import themeContext from './components/themeContext';
import theme from './components/theme';

// Activate when for demo: console.disableYellowBox = true;

const Stack = createStackNavigator();

export default function App() {
  // const appTheme = darkMode? DarkTheme : DefaultTheme;
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return() => {
      EventRegister.removeEventListener(eventListener);
    };
  });
  return (
    // <PaperProvider theme={PaperDarkTheme}>
    <themeContext.Provider value = {mode === true ? theme.dark: theme.light}>
      <NavigationContainer theme = {theme}>   
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Entry_onboard " component={Entry_onboard}/>
          <Stack.Screen name="main_info" component={BottomTabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};
 
