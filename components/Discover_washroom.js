import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Pressable, FlatList, TextInput, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import Washroom_data from '../assets/data/Washroom_data';
import { WebView } from 'react-native-webview';


const {width, height} = Dimensions.get('screen');


const Discover_washroom = ({navigation}) => {
  
  let searchingAdress = 0;
  const [modalVisible, setModalVisible] = useState(false);
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
    const items = Washroom_data;
    var filteredItems = [];
    if (items !== null && items !== []) {
      items.forEach(element => {
        if (element.name.toUpperCase().includes(searchWord.toUpperCase()) || element.district.toUpperCase().includes(searchWord.toUpperCase()) || element.address.toUpperCase().includes(searchWord.toUpperCase())) {
          filteredItems.push(element);
        }
      });
      setCardItems(filteredItems);
    } else {
      setCardItems([]);
    }
  }
  

  const Washroom_card = ({washroom_info}) => {
    return (
      <Pressable 
      activeOpacity={0.8}
      onPress={() => {
        searchingAdress = washroom_info.index;
        setModalVisible(!modalVisible);
        console.log(washroom_info.index)
      }}
      >
      <LinearGradient colors={["#EFF5F6", "#f3f3f3"]} style={styles.card2}> 
          
           {/** Restaurant Preview */}
           <Washroom_preview/>
    
          <View>
          {/* Title */}
          <View
              style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: "#053466", lineHeight: 20,}}>
              {washroom_info.name}
              </Text>
          </View>

          {/* Location text */}
          <Text style={{color: "#053466", fontSize: 15, marginTop: 3.5, marginBottom: 5}}>
            District: {washroom_info.district}
          </Text>

          {/* Location text */}
          <Text style={{color: "grey", fontSize: 14, marginTop: 3.5, lineHeight: 21,}}>
              {washroom_info.address}
          </Text>

          </View>
      </LinearGradient>
      </Pressable>
  );}

  const Washroom_preview = () => {   
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
              <Text style={styles.modelHeaderText}>Location Preview</Text>

              {/** If user clcik on map icon */}
              <View style={{flexDirection: "row", alignItems: "center"}}>

                {/** User click on close icon */}
                <Pressable 
                  style={[styles.previewButton, styles.previewButtonClose]}
                  onPress={() => { setModalVisible(false); }}>
                  <Text style={{color: "white"}}>Close</Text>
                </Pressable>
              </View>
              </View>

              {/** Show Preview Content */}
              <WebView source={{uri: `https://www.google.com.hk/maps/search/${Washroom_data[searchingAdress].address}`}} />

            </View>
          </View>
        </Modal>
      </View>
    )
  }
    
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

          // Render Washroom Cards
          data={cardItems}
          renderItem={({item}) => <Washroom_card washroom_info={item} />}
          keyExtractor={(item, index) => index}
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

export default Discover_washroom;