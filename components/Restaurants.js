import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Restaurants = (props) => {
    /** Required scraping function imported */

    return (
    <LinearGradient colors={["#F8D4F9", "#FFFFFF"]} start={[0, 0]} end={[1, 0]} style={styles.item}>
        <View style={styles.iconLeft}>
            <View style={styles.square}></View>
            <Text styles={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({ 
    item: {
        padding: 20,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        marginHorizontal: 10,
    },
    iconLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap',
    },
    square: {
        width: 30,
        height: 30,
        backgroundColor: "#FF4500",
        opacity: 0.4, 
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#FF4500",
        borderWidth: 2,
        borderRadius: 5,
    }
});

export default Restaurants;