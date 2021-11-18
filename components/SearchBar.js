import React from 'react';
import { TextInput, StyleSheet, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const SearchBar = () => {
    return (
        <LinearGradient colors={["#AFE6FE", "#C9E2FA"]} style={styles.container}>
            <View>
                <TextInput style={styles.textinput} placeholder="Search Anything!"/>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 28,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 10,
    },
    textinput: {
        paddingLeft: 20,
    }
})

export default SearchBar;