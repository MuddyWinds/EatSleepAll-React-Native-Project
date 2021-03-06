import React, { useState, useEffect } from 'react';
import Entry_onboard from './components/Entry_onboard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,  DefaultTheme, DarkTheme } from '@react-navigation/native';
import { BottomTabNavigator } from './Routes/BottomTabStack';
//import { Provider as PaperProvider, DarkTheme as PaperDarkTheme , DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import {EventRegister} from "react-native-event-listeners";
import themeContext from './components/themeContext';
import theme from './components/theme';
import { Appearance } from 'react-native';
import { color } from 'react-native-reanimated';


// console.disableYellowBox = true;


const Stack = createStackNavigator();


export default function App() {
  // const appTheme = darkMode? DarkTheme : DefaultTheme;
  var mode = theme.choice.theme;
  console.log(mode);
  // theme={mode == 'light' ? {DefaultTheme}: {DarkTheme}
  
  return (
      <NavigationContainer theme={mode == 'light' ? DefaultTheme: DarkTheme}>   
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Entry_onboard " component={Entry_onboard}/>
          <Stack.Screen name="main_info" component={BottomTabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
};