import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EntranceStackNavigator } from './EntranceStack';
import { Feather } from '@expo/vector-icons';
import User_settings from "../components/User_settings";
import User_notification from "../components/User_notification";
import User_bookmark from "../components/User_bookmark";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "#053466", 
            showLabel: false,
            tabStyle: {paddingTop: 11,}
            }} 
            screenOptions={{headerShown: false}}>

            <Tab.Screen name="Entry" component={EntranceStackNavigator} options={{
                tabBarIcon: (props) => <Feather name="home" color={props.color} size={25.5}/> }}/>

            <Tab.Screen name="User_bookmark" component={User_bookmark} options={{
                tabBarIcon: (props) => <Feather name="bookmark" color={props.color} size={25.5}/>}}/>

            <Tab.Screen name="User_notification" component={User_notification} options={{
                tabBarIcon: (props) => <Feather name="bell" color={props.color} size={25.5}/>}}/>       

            <Tab.Screen name="User_settings" component={User_settings} options={{
                tabBarIcon: (props) => <Feather name="settings" color={props.color} size={25.5}/>}}/>
        </Tab.Navigator>
    );
}

export { BottomTabNavigator };