import React, {StatusBar, useEffect, useState} from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Modal, FlatList, TextInput, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Restaurant_data from '../assets/data/Restaurant_data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { Feather } from '@expo/vector-icons';
import theme from './theme';


const {width, height} = Dimensions.get('screen');
const sortList = ['Name','Rating', 'Popularity', 'Price'];


const Discover_restaurant = ({navigation, route}) => {
  // const PreviewLinkHeight = [445, 610];
  // const PreviewLinkWidth = [335, 350];
  var mode = theme.choice.theme;
  const [PreviewOption, setPreview] = useState(0); 

  let mapModalView = false;
  // const [mapModalView, setMapModalView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [restaurant_num, setRestaurant_num] = useState(() => {
    if (route.params != null) {
      return route.params%10-1;
    } else {
      return 0;
    }
  });
  const [bookmarkedIds, setbookmarkedIds] = useState([]);
  const [cardItems, setCardItems] = useState([])
  const [searchWord, setSearchWord] = useState("");
  const isFocused = useIsFocused();
  const [selectedSort, setSelectedSortIndex] = useState(0);
  
  useEffect(() => {
    filterCardItems();
    // clearBookmark();
    // showBookmark();
    renderBookmark();
  },[]);

  useEffect(() => {
    filterCardItems();
  },[isFocused, selectedSort]);


    const SortCategories = () => {
      
      // Write filter function

      return  (
        <View style={styles.sortListContainer}>
          <Text style={styles.Ranking}>Sort :</Text>
          {sortList.map((sortOption, index) => (
            <Pressable key={index} onPress={() => setSelectedSortIndex(index)}>
              <Text style={[
                styles.sortListText, 
                index == selectedSort && styles.activeSortListText,]}>
                {sortOption}
              </Text>
            </Pressable>
          ))}
        </View>
      );
    };

    const Restaurant_preview = () => {   
      let URL, title;
      if (modalVisible && !mapModalView) { 
        URL = Restaurant_data[restaurant_num].url; 
        title = 'Restaurant Preview';
      }
      else if (modalVisible && mapModalView) {
        URL = `https://www.google.com.hk/maps/search/${Restaurant_data[restaurant_num].name}`;
        title = "Location Preview";
      }
 
      return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                {/** Preview Header */}
                <View style={styles.Modealheader}>
                <Text style={styles.modelHeaderText}>{title}</Text>

                {/** If user clcik on map icon */}
                <View style={{flexDirection: "row", alignItems: "center"}}>
                  <Pressable 
                    onPress={() => {
                      mapModalView = true;
                      Restaurant_preview();

                      // Reload page 
                    }}
                    style={{paddingRight: 12}}>
                    <Feather name="map" size={23.5} style={{color: "#1D7CC6"}}/>
                  </Pressable>

                  {/** User click on close icon */}
                  <Pressable 
                    style={[styles.previewButton, styles.previewButtonClose]}
                    onPress={() => {
                    setModalVisible(false);
                    mapModalView = false;
                    }}>
                    <Text style={{color: "white"}}>Close</Text>
                  </Pressable>
                </View>
                </View>

                {/** Show Preview Content */}
                <WebView source={{uri: URL}} />

              </View>
            </View>
          </Modal>
        </View>
      )
    }
    
    const Awaiting_restaurant_card = ({restaurant_info}) => {
      return (
        <Pressable 
          activeOpacity={0.8}
          onPress={() => {setRestaurant_num(restaurant_info.id%10 - 1)}}
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
                  style={{fontWeight: '400', color: "#053466", fontSize: 15}}>
                  ${restaurant_info.price}
                </Text>
              </View>

              {/* Location text */}
              <Text style={{color: "grey", fontSize: 14, marginTop: 3.5}}>
                {restaurant_info.address}
              </Text>

              {/* Facilities container */}
              <View style={{marginTop: 8, flexDirection: 'row'}}>
                <View style={styles.facility}>
                  <Feather name="heart" size={18} />
                  <Text style={styles.facilityText}>{restaurant_info.rating}</Text>
                </View>
                <View style={styles.facility}>
                  <Icon name="aspect-ratio" size={18} />
                  <Text style={styles.facilityText}>{restaurant_info.website}</Text>
                </View>
                <BookMark_Icon restaurant_info={restaurant_info}/>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      );
    }

    const Restaurant_card = ({restaurant_info}) => {

      return (
        <Pressable 
          activeOpacity={0.8}
          onPress={() => {
            setModalVisible(true);
            mapModalView = false;
          }}>

          <LinearGradient colors={["#8BDCEC", "#D0E9EE"]} style={styles.card}>

            {/** Restaurant Preview */}
            <Restaurant_preview/>

            {/** Location Preview */}
            {/** <Map_preview/>*/}

            {/* Restauarant image */}
            <Image source={{uri: restaurant_info['image_src']}} style={styles.cardImage} />
            
            <View style={{marginTop: 8, marginHorizontal: 1}}>
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
                  style={{fontWeight: '400', color: "#053466", fontSize: 15}}>
                  ${restaurant_info.price}
                </Text>
              </View>

              {/* Location text */}
              <Text style={{color: "grey", fontSize: 14, marginTop: 3.5}}>
                {restaurant_info.address}
              </Text>

              {/* Facilities container */}
              <View style={{marginTop: 8, flexDirection: 'row'}}>
                <View style={styles.facility}>
                <Feather name="heart" size={18} />
                  <Text style={styles.facilityText}>{restaurant_info.popularity}</Text>
                </View>
                <View style={styles.facility}>
                  <Icon name="aspect-ratio" size={18} />
                  <Text style={styles.facilityText}>{restaurant_info.website}</Text>
                </View>
                <BookMark_Icon restaurant_info={restaurant_info}/>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      );
    };

    const BookMark_Icon = ({restaurant_info}) => {
      if (bookmarkedIds.includes(restaurant_info.id)) {
        return (
          <TouchableOpacity onPress={() => removeBookMark(restaurant_info)} style={styles.facility}>
            <Icon name="star" size={18}/>
            <Text style={styles.facilityText}>Bookmark</Text>
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity onPress={() => saveBookMark(restaurant_info)} style={styles.facility}>
            <Icon name="star-outline" size={18}/>
            <Text style={styles.facilityText}>Bookmark</Text>
          </TouchableOpacity>
        );
      }
    }
  
    const saveBookMark = async restaurant_info => {
      // console.log("Saving Bookmark " + restaurant_info.id);
      await AsyncStorage.getItem('bookmarkedRestaurant_Items').then(token => {
        const res = JSON.parse(token);
        if (res !== null && res !== []) {
          // console.log("res !== null");
          let data = res.find(value => value === restaurant_info);
          if (data == null){
            res.push(restaurant_info);
            AsyncStorage.setItem('bookmarkedRestaurant_Items', JSON.stringify(res));
            setbookmarkedIds([...bookmarkedIds,restaurant_info.id]);
          }
        } else {
            AsyncStorage.setItem('bookmarkedRestaurant_Items', JSON.stringify([restaurant_info]));
            setbookmarkedIds([restaurant_info.id]);
        }
      }) 

    }
  
    const removeBookMark = async restaurant_info => {
      const items = await AsyncStorage.getItem('bookmarkedRestaurant_Items').then(token => {
        const res = JSON.parse(token);
        res.forEach(function (item, index) {
          if (item.id == restaurant_info.id){
            return res.splice(index,1);
          }
        });
        return res;
      });
      await AsyncStorage.setItem('bookmarkedRestaurant_Items', JSON.stringify(items));
      var ids = [...bookmarkedIds];
      const idx = ids.indexOf(restaurant_info.id);
      if (idx >=0) {
        ids.splice(idx,1);
      }
      setbookmarkedIds(ids);
    }

    const renderBookmark = async () => {
      await AsyncStorage.getItem('bookmarkedRestaurant_Items').then(token => {
        const res = JSON.parse(token);
        if (res !== null && res!== []) {
          var temp = [];
          res.forEach(function (item, index) {
            temp.push(item.id);
          });
          setbookmarkedIds(temp);
        }        
        else 
          setbookmarkedIds([]);
      })
    }

    // for debugging only
  // const clearBookmark = async () => {
  //   await AsyncStorage.setItem('bookmarkedRestaurant_Items', JSON.stringify([]));
  //   setbookmarkedIds([]);
  // }
  // const showBookmark = async () => {
  //   await AsyncStorage.getItem('bookmarkedRestaurant_Items').then(token => {
  //     const res = JSON.parse(token);
  //     console.log(res);
  //   });
  //   console.log(bookmarkedIds);
  // }

  const filterCardItems = () => {
    const items = Restaurant_data;
    var filteredItems = [];
    if (items !== null && items !== []) {
      items.forEach(element => {
        if (element.name.toUpperCase().includes(searchWord.toUpperCase()) || element.address.toUpperCase().includes(searchWord.toUpperCase())) {
          filteredItems.push(element);
        }
      });
      var sortWord;
      switch(selectedSort) {
        case 0:
          sortWord = 'name';
          break;
        case 1:
          sortWord = 'rating';
          break;
        case 2:
          sortWord = 'popularity';
          break;
        case 3:
          sortWord = 'price_min';
          break;
        default:
          console.log("Invalid Sort Index");
          break;
      }
      filteredItems.sort(function(a,b){
        if (a[sortWord] < b[sortWord]) {
          return -1;
        } else if (a[sortWord] > b[sortWord]) {
          return 1;
        } else {
          return 0;
        }
      });
      setCardItems(filteredItems);
    } else {
      setCardItems([]);
    }
  }



    return (
      <SafeAreaView style={mode == 'light'?styles.container:styles.containerDark}>

        {/** Return Button to previous page */}
        <Pressable style={{marginLeft: 8, flexDirection: 'row', alignItems: 'center',}}
            onPress={() => navigation.navigate("Entry", {screen: "Entry_home"})}>
            <Icon style={mode == 'light'?{color: "#053466"}: {color: '#FFFFFF'}}name="chevron-left" size={25}/>
            <Text style={mode == 'light'?{fontSize: 16, marginLeft: -3, color: 'black'}: {fontSize: 16, marginLeft: -3, color: '#FFFFFF'}}>Back</Text>
        </Pressable>

        {/** Title header */}
        <View style={{flexDirection: "row", marginLeft: 4.5, marginTop: 3.6}}>
          <Text style={{marginLeft: 18, fontSize: 24, fontWeight: "bold", color: "#053466",}}>Discover: EAT</Text>
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

        {/* Render Top-Select Card */}
        <Restaurant_card restaurant_info={Restaurant_data[restaurant_num]} />

        {/* Render filter options */}
        <SortCategories/>

        {/* Render chosen card */}
        <FlatList
            snapToInterval={width - 20}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 20, paddingVertical: 6}}
            vertical
            data={cardItems}
            renderItem={({item}) => <Awaiting_restaurant_card restaurant_info={item} />}
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
  containerDark: {
    flex: 1,
    backgroundColor: '#121212',
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
  iconLeft: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: 'wrap',
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
    fontWeight: "300"
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
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#FF4500",
    borderWidth: 2,
    borderRadius: 5,
  },
  card: {
    height: 220,
    elevation: 10,
    width: width - 40,
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 18,
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
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {
    flexDirection: 'row', 
    marginRight: 15
  },
  facilityText: {
    marginLeft: 5, 
    color: "grey"
  },
  sortListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  Ranking: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 4.5,
  },
  sortListText: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 5,
    color: "grey",
    marginHorizontal: 4.5,
  },
  activeSortListText: {
    color: "#000058",
    borderBottomWidth: 1,
    paddingBottom: 5,
    fontWeight: "bold"
  },
  centeredView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  modalView: {
    height: 445,
    width: 335,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 12.5,
    paddingBottom: 17,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 5,
  },
  modalView2: {
    height: 610,
    width: 350,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 12.5,
    paddingBottom: 17,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 5,
  },
  previewButton: {
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  previewButtonClose: {
    backgroundColor: "#2196F3"
  },
  modelHeaderText: {
    fontWeight: "500",
    textAlign: "justify",
    fontSize: 16.5,
  },
  Modealheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  }
});

export default Discover_restaurant;