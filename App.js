import React from 'react';
// import Bookmark from './components/Bookmark';
import Discover from './components/Discover';
import Onboard from './components/Onboard';
import Home from './components/Home';
import "react-native-gesture-handler"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discover" component={Discover} />
        {/** <Stack.Screen name="Bookmark" componenet={Bookmark} /> */}
      </Stack.Navigator>

      
    </NavigationContainer>
  );
};
