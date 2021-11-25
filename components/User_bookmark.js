import React, {StatusBar, useEffect, useState} from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { render } from 'react-dom';

const {width, height} = Dimensions.get('screen');
const filterList = ['Rating', 'Popularity', 'Location', 'Price'];

const User_bookmark = ({navigation}) => {

    const [bookmarkedHotelItems, setbookmarkedHotelItems] = useState([]);
    const [bookmarkedRestaurantItems, setbookmarkedRestaurantItems] = useState([]);
    const isFocused = useIsFocused();
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        // console.log("--");
        // clearBookmark();
        renderBookmark();
        // showBookmark();
    },[]);

    useEffect(() => {
        renderBookmark();
    }, [isFocused]);


    const Awaiting_hotel_card = ({hotel_info}) => {
        return (
          <Pressable 
            activeOpacity={0.8}
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
                    {hotel_info.title}
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: "#053466", fontSize: 15}}>
                    {hotel_info.price}
                  </Text>
                </View>
    
                {/* Location text */}
                <Text style={{color: "grey", fontSize: 14, marginTop: 3.5}}>
                  {hotel_info.location}
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
                    <Text style={styles.facilityText}>{hotel_info.website}</Text>
                  </View>
                  <BookMark_Icon info={hotel_info} type={"hotel"}/>
                </View>
              </View>
            </LinearGradient>
          </Pressable>
        );
      }

    const Awaiting_restaurant_card = ({restaurant_info}) => {
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
                    {restaurant_info.name}
                    </Text>
                    <Text
                    style={{fontWeight: 'bold', color: "#053466", fontSize: 15}}>
                    {restaurant_info.price_range}
                    </Text>
                </View>

                {/* Location text */}
                <Text style={{color: "grey", fontSize: 14, marginTop: 3.5}}>
                    {restaurant_info.address}
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
                    <Text style={styles.facilityText}>{restaurant_info.website}</Text>
                    </View>
                    <BookMark_Icon info={restaurant_info} type={"restaurant"}/>
                </View>
                </View>
            </LinearGradient>
            </Pressable>
        );
    }

    const BookMark_Icon = (props) => {
    
        return (
          <TouchableOpacity onPress={() => removeBookMark(props.info,props.type)} style={styles.facility}>
            <Icon name="star" size={18}/>
            <Text style={styles.facilityText}>Bookmark</Text>
          </TouchableOpacity>
        );
      
    }
  
  
    const removeBookMark = async (info,type) => {

      switch(type) {
          case 'hotel':
              const items_hotel = await AsyncStorage.getItem('bookmarkedHotel_Items').then(token => {
                  const res = JSON.parse(token);
                  res.forEach(function (item, index) {
                    if (item.id == info.id){
                      return res.splice(index,1);
                    }
                  });
                  return res;
                });
              await AsyncStorage.setItem('bookmarkedHotel_Items', JSON.stringify(items_hotel));
              setbookmarkedHotelItems(items_hotel);
              break;
          case 'restaurant':
              const items_restaurant = await AsyncStorage.getItem('bookmarkedRestaurant_Items').then(token => {
                  const res = JSON.parse(token);
                  res.forEach(function (item, index) {
                    if (item.id == info.id){
                      return res.splice(index,1);
                    }
                  });
                  return res;
                });
              await AsyncStorage.setItem('bookmarkedRestaurant_Items', JSON.stringify(items_restaurant));
              setbookmarkedRestaurantItems(items_restaurant);
              break;
          default:
              console.log("Type: " + type + " does not exist");
              break;
      }
      
    }
  
    const renderBookmark = async () => {
      await AsyncStorage.getItem('bookmarkedHotel_Items').then(token => {
          const res = JSON.parse(token);
          var filteredItems = [];
          if (res !== null && res!== []) {            
            res.forEach(element => {
              if (element.title.toUpperCase().includes(searchWord.toUpperCase()) || element.location.toUpperCase().includes(searchWord.toUpperCase())) {
                filteredItems.push(element);
              }
          });
          setbookmarkedHotelItems(filteredItems);
        }        
          else 
            setbookmarkedHotelItems([]);
      })
      await AsyncStorage.getItem('bookmarkedRestaurant_Items').then(token => {
          const res = JSON.parse(token);
          var filteredItems = [];
          if (res !== null && res!== []) {            
            res.forEach(element => {
               if (element.title.toUpperCase().includes(searchWord.toUpperCase()) || element.location.toUpperCase().includes(searchWord.toUpperCase())) {
                filteredItems.push(element);
              }
            });
            setbookmarkedRestaurantItems(filteredItems);     
          }
          else 
            setbookmarkedRestaurantItems([]);
      })
    }  


     // for debugging only
  // const clearBookmark = async () => {
  //   await AsyncStorage.setItem('bookmarkedHotel_Items', JSON.stringify([]));
  //   await AsyncStorage.setItem('bookmarkedRestaurant_Items', JSON.stringify([]));
  //   setbookmarkedHotelItems([]);
  //   setbookmarkedRestaurantItems([]);
  // }
  // const showBookmark = async () => {
  //   await AsyncStorage.getItem('bookmarkedHotel_Items').then(async (token) => {
  //     const res = JSON.parse(token);
  //     console.log("Hotel Items: ");
  //     console.log(res);
  //   });
  //   await AsyncStorage.getItem('bookmarkedRestaurant_Items').then(async (token) => {
  //       const res = JSON.parse(token);
  //       console.log("Restaurant Items: ");
  //       console.log(res);
  //   })
  //   console.log("Hotel Array: ");
  //   console.log(bookmarkedHotelItems);
  //   console.log("Restaurant Array: ");
  //   console.log(bookmarkedRestaurantItems);
  // }
    

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
            <Text style={styles.noti}>Bookmarks</Text>
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
                <TextInput style={styles.barText} placeholder={"Search address, city, location"} value={searchWord} onChangeText={(text) => { setSearchWord(text)}}/>
            </View>

            <TouchableOpacity onPress={() => {
              renderBookmark();
            }}>
              <View style={styles.sortBtn}>
                  <Icon name="tune" color="white" size={20} />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <ScrollView>
        {/* Render hotel cards */}
        <FlatList
            snapToInterval={width - 20}
            showsVerticalScrollIndicator={false}
            scrollEnabled = {false}
            contentContainerStyle={{paddingLeft: 20, paddingTop: 0}}
            vertical
            data = {bookmarkedHotelItems}
            ListHeaderComponent = {() => {
              if (bookmarkedHotelItems.length != 0) {
                return (<Text style={styles.subtitle}>Hotels</Text>);
              } else {
                return null;
              }
            }}
            renderItem={({item}) => <Awaiting_hotel_card hotel_info={item} />}
         />

        {/* Render restaurant cards */}
        <FlatList
            snapToInterval={width - 20}
            showsVerticalScrollIndicator={false}
            scrollEnabled = {false}
            contentContainerStyle={{paddingLeft: 20, paddingVertical: 0}}
            vertical
            data = {bookmarkedRestaurantItems}
            ListHeaderComponent = {() => {
              if (bookmarkedRestaurantItems.length != 0) {
                return (<Text style={styles.subtitle}>Restaurants</Text>);
              } else {
                return null;
              }
            }}
            renderItem={({item}) => <Awaiting_restaurant_card restaurant_info={item} />}
        />
        </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    sectionSubText: {
        marginLeft: 18,
        fontSize: 12.5,
        fontWeight: "500",
        paddingTop: 4,
        paddingBottom: 10,
        color: "#053466",
    },
    subtitle: {
      alignContent: "center",
      justifyContent: "center"
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
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,  
        elevation: 5
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
        marginBottom: 10,
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
        height: 84,
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
})

export default User_bookmark;