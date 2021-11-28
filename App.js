import React, { useState, useEffect } from 'react';
import Entry_onboard from './components/Entry_onboard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,  DefaultTheme, DarkTheme } from '@react-navigation/native';
import { BottomTabNavigator } from './Routes/BottomTabStack';
//import { Provider as PaperProvider, DarkTheme as PaperDarkTheme , DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import {EventRegister} from "react-native-event-listeners";
import themeContext from './components/themeContext';
import theme from './components/theme';
import { Appearance, LogBox } from 'react-native';
import { color } from 'react-native-reanimated';


LogBox.ignoreAllLogs();


const Stack = createStackNavigator();


export default function App() {
  // const appTheme = darkMode? DarkTheme : DefaultTheme;
  const [mode, setMode] = useState(Appearance.getColorScheme());
  console.log(mode);
  /*
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
  */
  //console.log("theme is: " + themeColor);
  return (
      // <NavigationContainer theme = {DarkTheme}>   
      <NavigationContainer>  
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Entry_onboard " component={Entry_onboard}/>
          <Stack.Screen name="main_info" component={BottomTabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
};