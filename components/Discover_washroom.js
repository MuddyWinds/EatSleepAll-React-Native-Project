import React, {StatusBar} from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import Integrated_data from "../assets/data/Integrated_data";

const {width, height} = Dimensions.get('screen');


const Discover_washroom = ({navigation}) => {
    
    return (
        <SafeAreaView>

        {/** Return Button to previous page */}
        <Pressable style={{marginLeft: 8, flexDirection: 'row', alignItems: 'center',}}
            onPress={() => navigation.navigate("Entry", {screen: "Entry_home"})}>
            <Icon style={{color: "#053466"}}name="chevron-left" size={25}/>
            <Text style={{fontSize: 16, marginLeft: -3}}>Back</Text>
        </Pressable>

        {/** Title header */}
        <View style={{flexDirection: "row", marginLeft: 4.5, marginTop: 3.6}}>
            <Text style={{marginLeft: 18, fontSize: 24, fontWeight: "bold", color: "#053466",}}>Discover: ALL</Text>
        </View>

        {/* Input and sort button container */}
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 5,
            }}>
            <LinearGradient colors={["#AFE6FE", "#C9E2FA"]} style={styles.searchInputContainer}>
                <View style={styles.searchRow}>
                    <Icon name="search" color="grey" size={25} style={styles.searchIcon}/>
                    <TextInput style={styles.barText} placeholder="Search address, city, location" />
                </View>

                <View style={styles.sortBtn}>
                   <Icon name="tune" color="white" size={20} />
                </View>
            </LinearGradient>
        </View>

        <ScrollView style={styles.sectionView}>
            {/** Shoppting Section */}
            <View style={{flexDirection:"row", alignContent: "center"}}>
                <Feather name="shopping-bag" size={25} color="#053466"/>
                <Text style={{fontSize: 18, marginLeft: 8, color:"#053466", fontWeight:"500"}}>Shopping</Text>
            </View>

            {/** Airline Section */}
            <View style={{flexDirection:"row", alignContent: "center"}}>
                <Feather name="navigation" size={25} color="#053466"/>
                <Text style={{fontSize: 18, marginLeft: 8, color:"#053466", fontWeight:"500"}}>Airelines</Text>
            </View>

            {/** Stock Section */}
            <View style={{flexDirection:"row", alignContent: "center"}}>
                <Feather name="pie-chart" size={25} color="#053466"/>
                <Text style={{fontSize: 18, marginLeft: 8, color:"#053466", fontWeight:"500"}}>Stocks</Text>

            </View>

        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
    rectangle: {
        width: 2,
        height: 25,
        backgroundColor: "#053466",
        marginLeft: 8,
        borderRadius: 2,
    },
    searchInputContainer: {
        height: 35,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 16,
        borderRadius: 12,
        marginBottom: 5,
        marginTop: 8.5,
      },
      sectionView: {
          marginHorizontal: 20,
      },
      searchIcon: {
        paddingLeft: 10,
        paddingTop: 2,
      },
      searchRow: {
        flexDirection: 'row',
      },
      barText: {
        paddingLeft: 8,
      },
      sortBtn: {
        backgroundColor: "#053466",
        height: 30,
        width: 30,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
      },
});

export default Discover_washroom;