import React, {StatusBar, useState, useEffect} from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import Stock_data from '../assets/data/Stock_data';
import Shopping_data from '../assets/data/Shopping_data';
import Airline_data from '../assets/data/Airline_data';

const {width, height} = Dimensions.get('screen');


const Discover_washroom = ({navigation}) => {

  const [cardItems, setCardItems] = useState([])
  const [searchWord, setSearchWord] = useState("");
  const isFocused = useIsFocused();
  
  useEffect(() => {
    filterCardItems();
  },[]);

  useEffect(() => {
    filterCardItems();
  },[isFocused]);

  
  const filterCardItems = () => {
    /** 
    // Please change the Stock_data to Stock_data + Airline_data + Shopping_data
    const items = Stock_data;
    var filteredItems = [];
    if (items !== null && items !== []) {
      items.forEach(element => {
        if (element.title.toUpperCase().includes(searchWord.toUpperCase()) || element.location.toUpperCase().includes(searchWord.toUpperCase())) {
          filteredItems.push(element);
        }
      });
      setCardItems(filteredItems);
    } else {
      setCardItems([]);
    }
    */
  }
  

  const Airline_card = ({airline_info}) => {
    return (
      <Pressable 
      activeOpacity={0.8}
      // onPress={() => navigation.push("Discover", {screen: "Discover_restaurant"})}>
      >
      <LinearGradient colors={["#EFF5F6", "#f3f3f3"]} style={styles.card2}> 
          <View>
          {/* Title and price container */}
          <View
              style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: "#053466"}}>
              {airline_info.name}
              </Text>
              <Text
              style={{fontWeight: '400', color: "#053466", fontSize: 15}}>
              {airline_info.price_range}
              </Text>
          </View>

          {/* Location text */}
          <Text style={{color: "grey", fontSize: 14, marginTop: 3.5}}>
              {airline_info.address}
          </Text>

          {/* Facilities container */}
          <View style={{marginTop: 8, flexDirection: 'row'}}>
              <View style={styles.facility}>
              <Icon name="hotel" size={18} />
              <Text style={styles.facilityText}>2</Text>
              </View>
              <View style={styles.facility}>
              <Icon name="bathtub" size={18} />
              <Text style={styles.facilityText}>2</Text>
              </View>
              <View style={styles.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={styles.facilityText}>{airline_info.website}</Text>
              </View>
          </View>
          </View>
      </LinearGradient>
      </Pressable>
  );}
    
    return (
        <SafeAreaView style={styles.container}>

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
                <TextInput style={styles.barText} placeholder="Search address, city, location" value={searchWord} onChangeText={(text) => { setSearchWord(text)}}/>
            </View>

            <TouchableOpacity onPress={() => {
              filterCardItems();
            }}>
              <View style={styles.sortBtn}>
                  <Icon name="tune" color="white" size={20} />
              </View>
            </TouchableOpacity>
            </LinearGradient>
        </View>

        <FlatList
          snapToInterval={width - 20}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingTop: 8}}
          vertical
          scrollEnabled = {true}

          // Render Airline Cards
          data={Airline_data}
          renderItem={({item}) => <Airline_card airline_info={item} />}
        />

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
      card2: {
        // height: 84,
        width: width - 40,
        marginRight: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
      },
      facility: {
        flexDirection: 'row', 
        marginRight: 15
      },
      facilityText: {
        marginLeft: 5, 
        color: "grey"
      },
});

export default Discover_washroom;