import AppLoading from 'expo-app-loading';
import React from 'react';
import { StatusBar,StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Hotel from './Hotel';
import Restaurants from './Restaurants';
import SearchBar from './SearchBar';
import { FontAwesome } from 'react-native-elements/dist/icons/Icon';
// import Bookmark from './Bookmark';

const Discover= () => {
  return (
    <SafeAreaView style={styles.container}>

      { /* Today's specials */ }
      <SafeAreaView style={styles.specialWrapper}>
        <Text style={styles.sectionTitle}>Discover</Text>
        <Text style={styles.sectionSubText}>Don't comprimise your quality of life.</Text>
        <View style={styles.rectangle}></View>

          {/** Write the search bar */}
          <SearchBar/>

          <View style={styles.items}>
          {/* All Special Discounts, hotels, restaurants will be stated here */}
            <Hotel text={'hotel 1'}/>
            <Hotel text={'hotel 2'}/>
            <Restaurants text={'Restaurant 1'}/>
            <Restaurants text={'Restaurant 2'}/>
          </View>

      </SafeAreaView>   

    </SafeAreaView> 
  );
}

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
  items: {
    marginTop: 20,
  },
});

export default Discover;