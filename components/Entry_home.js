import React, {useState, useEffect} from 'react';
import { TouchableOpacity,SafeAreaView, View, StatusBar, Text, TextInput, FlatList, Dimensions, StyleSheet,Image,Pressable, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Restaurant_data from '../assets/data/Restaurant_data';
import getIntegrated_data from '../assets/data/Integrated_data';
import { useIsFocused } from '@react-navigation/native';
const {width} = Dimensions.get('screen');



const Entry_home = ({navigation}) => {

  const [cardItems, setCardItems] = useState([])
  const [searchWord, setSearchWord] = useState("");
  const isFocused = useIsFocused();
  
  useEffect(() => {
    filterCardItems();
  },[]);

  useEffect(() => {
    filterCardItems();
  },[isFocused]);

  const optionsList = [
    {title: 'Book a hotel for staycation', img: require('../assets/nice_hotel.jpg')},
    {title: 'Find the closet Michelin restaurant', img: require('../assets/nice_restaurant.jpg')},
    {title: 'Explore your district', img: require('../assets/nice_airlines.jpg')},
  ];

  const discoverList = ['Top Rated', 'Trending', 'Nearest', 'Discounts'];


  const ListCategories = () => {
    const [selectedDiscoverIndex, setSelectedDiscoverIndex] = React.useState(0);

    return (
      <View style={styles.categoryListContainer}>
        {discoverList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedDiscoverIndex(index)}>
            <Text
              style={[
                styles.categoryListText,
                index == selectedDiscoverIndex && styles.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const DiscoverOptions = () => {

    const Discover_linkage = ["Discover_hotel", "Discover_restaurant", "Discover_washroom"]

    return (
      <View style={styles.optionListsContainer}>
        {optionsList.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.push(`${Discover_linkage[index]}`)}>
          <LinearGradient colors={["#e8f4f8", "#f3f3f3"]} style={styles.optionsCard}>
            {/* Option image */}
            <Image source={option.img} style={styles.optionsCardImage}/>

            {/* Option title */}
            <Text style={{marginLeft: 5, marginTop: 12, fontSize: 12, fontWeight: '600', color: "#053466"}}>
              {option.title}
            </Text>
          </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({item}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.push("Discover_restaurant")}>
        <LinearGradient colors={["#e8f4f8", "#f3f3f3"]} style={styles.card}>

          {/* Restaurant image */}
          <Image source={{uri: item.image_src}} style={styles.cardImage} /> 

          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: "#053466"}}>
                {item.name}
              </Text>
              <Text
                style={{fontWeight: '400', color: "#053466", fontSize: 16}}>
                {item.price_range}
              </Text>
            </View>

            {/* Location text */}
            <Text style={{color: "grey", fontSize: 14, marginTop: 5}}>
              {item.address}
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
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
                <Text style={styles.facilityText}>{item.website}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    );
  };

  const filterCardItems = () => {
    const items = getIntegrated_data();
    var filteredItems = [];
    if (items !== null && items !== []) {
      items.forEach(element => {
        if (element.name.toUpperCase().includes(searchWord.toUpperCase()) || element.address.toUpperCase().includes(searchWord.toUpperCase())) {
          filteredItems.push(element);
        }
      });
      setCardItems(filteredItems);
    } else {
      setCardItems([]);
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1 }}>

      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor="white"
        barStyle="dark-content"
      />


      {/* Header container */}
      <View style={styles.header}>
        <View>
          <Text style={{color: "grey"}}>Location</Text>
          <Text style={{color: "#053466", fontSize: 20, fontWeight: 'bold'}}>
            Sai Wan
          </Text>
        </View>
        <TouchableOpacity style={styles.profileImage}>
            <FontAwesome name="user" color="#194466"size={25}/>
        </TouchableOpacity>
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

        {/* Render Card */} 
        <FlatList
          snapToInterval={width - 20}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20, marginTop: -5}}
          vertical
          ListHeaderComponent={
            <>
            {/** Display Eat, sleep, all cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <DiscoverOptions/>
            </ScrollView>

            {/** Display filter options */}
            <ListCategories/>
            </>
          }
          data={cardItems}
          renderItem={({item}) => <Card item={item} />}
        />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  profileImage: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
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
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'flex-start',
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 12,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 8,
  },
  categoryListText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: "grey",
    marginHorizontal: 10,
  },
  activeCategoryListText: {
    color: "#000058",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10.5,
    marginHorizontal: -7.5,
    marginBottom: 3.5
  },
  card: {
    height: 250,
    backgroundColor: "white",
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    marginBottom: 14,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: "grey"},
});

export default Entry_home;