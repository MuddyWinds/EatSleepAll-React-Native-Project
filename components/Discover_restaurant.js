import React, {StatusBar} from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Restaurant_data from '../assets/data/Restaurant_data';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('screen');
const filterList = ['Rating', 'Popularity', 'Location', 'Price'];


const Discover_restaurant = ({navigation}) => {

    const FilterCategories = () => {
      const [selectedFilter, setSelectedFilterIndex] = React.useState(0);
      // Write filter function

      return  (
        <View style={styles.filterListContainer}>
          <Text style={styles.Ranking}>Filter:</Text>
          {filterList.map((filterOption, index) => (
            <Pressable key={index} onPress={() => setSelectedFilterIndex(index)}>
              <Text style={[
                styles.filterListText, 
                index == selectedFilter && styles.activeFilterListText,]}>
                {filterOption}
              </Text>
            </Pressable>
          ))}
        </View>
      );
    };
    
    const Awaiting_restaurant_card = ({restaurant_info}) => {
      return (
        <Pressable 
          activeOpacity={0.8}
          onPress={() => navigation.push("Discover", {screen: "Discover_restaurant"})}>
          <LinearGradient colors={["#DCDCDC", "#f3f3f3"]} style={styles.card2}>
            
            <View>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: "#053466"}}>
                  {restaurant_info.title}
                </Text>
                <Text
                  style={{fontWeight: 'bold', color: "#053466", fontSize: 16}}>
                  $1,500
                </Text>
              </View>

              {/* Location text */}
              <Text style={{color: "grey", fontSize: 14, marginTop: 5}}>
                {restaurant_info.location}
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
                  <Text style={styles.facilityText}>100m</Text>
                </View>
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
          onPress={() => navigation.push("Discover", {screen: "Discover_restaurant"})}>
          <LinearGradient colors={["#e8f4f8", "#f3f3f3"]} style={styles.card}>

            {/* Restauarant image */}
            <Image source={restaurant_info.image} style={styles.cardImage} />
            
            <View style={{marginTop: 10}}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: "#053466"}}>
                  {restaurant_info.title}
                </Text>
                <Text
                  style={{fontWeight: 'bold', color: "#053466", fontSize: 16}}>
                  $1,500
                </Text>
              </View>

              {/* Location text */}
              <Text style={{color: "grey", fontSize: 14, marginTop: 5}}>
                {restaurant_info.location}
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
                  <Text style={styles.facilityText}>100m</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <Pressable style={{marginLeft: 16, flexDirection: 'row', alignItems: 'center',}}
           onPress={() => navigation.navigate("Entry", {screen: "Entry_home"})}>
          <Icon style={{color: "#053466"}}name="chevron-left" size={28}/>
          <Text style={{color: "#053466", fontSize: 18,}}>Back to Sleep</Text>
        </Pressable>

        {/* Render non-chosen Card */}
        <Restaurant_card restaurant_info={Restaurant_data[1]} />

        {/* Render filter options */}
        <FilterCategories/>

        {/* Render chosen card */}
        <ScrollView>
          <FlatList
            snapToInterval={width - 20}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 20, paddingTop: 6}}
            vertical
            data={Restaurant_data}
            renderItem={({item}) => <Awaiting_restaurant_card restaurant_info={item} />}
          />
        </ScrollView>
      </SafeAreaView>
    );
};



const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
  },
  sectionSubText: {
      paddingLeft: 14,
      fontSize: 12.5,
      fontWeight: "500",
      paddingTop: 4,
      paddingBottom: 10,
      color: "#053466",
  },
  specialWrapper: {
      paddingTop: 45,
      paddingHorizontal: 10,
  },
  sectionTitle: {
      paddingLeft: 14,
      fontSize: 36,
      fontWeight: 'bold',
      color: "#053466",
  },
  rectangle: {
      width: 70,
      height: 2,
      backgroundColor: "#053466",
      marginLeft: 14,
      borderRadius: 2,
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
  },
  card: {
    height: 250,
    elevation: 10,
    width: width - 40,
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 18,
  },
  card2: {
    height: 100,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    marginVertical: 6,
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
  filterListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  Ranking: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4.5,
  },
  filterListText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: "grey",
    marginHorizontal: 4.5,
  },
  activeFilterListText: {
    color: "#000058",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});

export default Discover_restaurant;