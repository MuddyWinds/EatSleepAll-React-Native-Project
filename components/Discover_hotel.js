import React, {StatusBar} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SearchBar from './toBeDeleted_SearchBar';

const Discover_hotel = () => {
  return (
    <SafeAreaView style={styles.container}>

    {/* Customise status bar */}
    <StatusBar
      translucent={false}
      backgroundColor="white"
      barStyle="dark-content"
    />

      { /* Today's specials */ }
      <SafeAreaView style={styles.specialWrapper}>
        <Text style={styles.sectionTitle}>Discover</Text>
        <Text style={styles.sectionSubText}>Don't comprimise your quality of life.</Text>
        <View style={styles.rectangle}></View>

          {/** Write the search bar */}
          <SearchBar/>

          <View style={styles.items}>
          {/* All Special Discounts, hotels, restaurants will be stated here */}
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

export default Discover_hotel;