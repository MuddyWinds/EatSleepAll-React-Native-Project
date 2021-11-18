import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity,SafeAreaView, View, StatusBar, Text, TextInput, FlatList, Dimensions, StyleSheet,Image,Pressable, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');

const Home = ({navigation}) => {

  const optionsList = [
    {title: 'Book a hotel for staycation', img: require('../assets/nice_hotel.jpg')},
    {title: 'Find the closet Michelin restaurant', img: require('../assets/nice_restaurant.jpg')},
  ];

  const categoryList = ['Popular', 'Recommended', 'Nearest'];


  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {
    return (
      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <View style={style.optionsCard} key={index}>
            {/* House image */}
            <Image source={option.img} style={style.optionsCardImage} />

            {/* Option title */}
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const Card = ({house}) => {
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', house)}>
        <View style={style.card}>
          {/* House image */}
          <Image source={house.image} style={style.cardImage} />
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {house.title}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: "#053466", fontSize: 16}}>
                $1,500
              </Text>
            </View>

            {/* Location text */}
            <Text style={{color: "grey", fontSize: 14, marginTop: 5}}>
              {house.location}
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1 }}>

      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor="white"
        barStyle="dark-content"
      />


      {/* Header container */}
      <View style={style.header}>
        <View>
          <Text style={{color: "grey"}}>Location</Text>
          <Text style={{color: "black", fontSize: 20, fontWeight: 'bold'}}>
            Sai Wan
          </Text>
        </View>
        <TouchableOpacity style={style.profileImage}>
            <FontAwesome name="user" color="#194466"size={25}/>
        </TouchableOpacity>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" color="grey" size={25} style={style.searchIcon}/>
            <TextInput style={style.barText} placeholder="Search address, city, location" />
          </View>

          <View style={style.sortBtn}>
            <Icon name="tune" color="white" size={25} />
          </View>
        </View>

        {/* Render list options */}
        <ListOptions />

        {/* Render categories */}
        <ListCategories />

        {/* Render Card */}
        {/*
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
        */}
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    height: 50,
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  searchIcon: {
    paddingLeft: 5,
  },
  barText: {
    paddingLeft: 0,
  },
  sortBtn: {
    backgroundColor: "black",
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: "grey",
  },
  activeCategoryListText: {
    color: "black",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: "white",
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: "grey"},
});

export default Home;