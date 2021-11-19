import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import User_profile from '../components/User_profile';
import User_bookmark from '../components/User_bookmark';
import User_notification from '../components/User_notification';

const Stack = createStackNavigator();

const UserInfoStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="User_profile" component={User_profile} />
            <Stack.Screen name="User_bookmark" component={User_bookmark} />
            <Stack.Screen name="User_notification" component={User_notification} />
      </Stack.Navigator>
    );
}

export { UserInfoStackNavigator };