import React from 'react';
import { DiscoverStackNavigator } from './Routes/DiscoverStack';
import { EntranceStackNavigator } from './Routes/EntranceStack';
import { UserInfoStackNavigator } from './Routes/UserInfoStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Entry" component={EntranceStackNavigator}/>
        <RootStack.Screen name="Discover" component={DiscoverStackNavigator}/>
        <RootStack.Screen name="UserInfo" component={UserInfoStackNavigator}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
