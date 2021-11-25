import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ViewPropTypes, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const User_settings = ({navigation}) => {


    const lightTheme = () => {
        // Code to turn to light theme
    }

    const darkTheme = () => {
        // Code to turn to dark theme
    }
    

    return (
        <SafeAreaView style={styles.container}>
            
        {/** Return Button to previous page */}
        <Pressable style={{marginLeft: 8, flexDirection: 'row', alignItems: 'center',}}
            onPress={() => navigation.navigate("Entry", {screen: "Entry_home"})}>
            <Icon style={{color: "#053466"}}name="chevron-left" size={25}/>
            <Text style={{fontSize: 16, marginLeft: -3}}>Back</Text>
        </Pressable>

        {/** Title header */}
        <View style={styles.header}>
            <Text style={styles.noti}>Settings</Text>
        </View>

        <View style={styles.settingOptionList}>

            {/** Swipe Button for the user to change the color scheme */}
            <View style={styles.changeThemeBar}>
                <Text style={styles.settingSubHeading}>Theme Color</Text>
                <TouchableOpacity style={styles.lightButton} onPress={lightTheme}>
                    <Text style={styles.lightText}>Light</Text>
                </TouchableOpacity>
            </View>
        </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: -8,
    },
    sectionSubText: {
        marginLeft: 18,
        fontSize: 12.5,
        fontWeight: "500",
        paddingTop: 4,
        paddingBottom: 10,
        color: "#053466",
    },
    noti: {
        marginLeft: 18, 
        fontSize: 24, 
        fontWeight: "bold", 
        color: "#053466",
    },
    header: {
        flexDirection: "row", 
        marginLeft: 4.5, 
        marginTop: 3.6
    },
    settingOptionList: {
        marginLeft: 22.5, 
        marginTop: 10,
    },
    changeThemeBar: {
        flexDirection: "row",
        alignItems: "center",        
    },
    settingSubHeading: {
        color: "#053466",
        fontSize: 16,
        fontWeight: "500",
        paddingRight: 70
    },
    lightButton: {
        backgroundColor: "#FAFEFF",
        borderWidth: 0.2,
        height: 35,
        width: 80,
        borderRadius: 5,
    },
    lightText: {
        paddingHorizontal: 23.5,
        paddingVertical: 9,
    }
})

export default User_settings;