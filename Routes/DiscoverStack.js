import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Discover_hotel from '../components/Discover_hotel';
import Discover_restaurant from '../components/Discover_restaurant';
import Discover_washroom from '../components/Discover_washroom';

const Stack = createStackNavigator();

const DiscoverStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Discover_hotel" component={Discover_hotel}/> 
            <Stack.Screen name="Discover_restaurant" component={Discover_restaurant}/>
            <Stack.Screen name="Discover_washroom" component={Discover_washroom}/>
        </Stack.Navigator>
    );
}

export { DiscoverStackNavigator };