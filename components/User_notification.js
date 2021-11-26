import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Dimensions, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Send_notification from './User_send_notification';
import Notification_data from '../assets/data/Notification_data';
import Swipeout from 'react-native-swipeout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const User_notification = ({navigation}) => {

  const [notificationItems, setNotificationItems] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    // clearNotifications();
    renderNotifications();
    // logNotifications();
  },[]);

  useEffect(() => {
    renderNotifications();
  },[isFocused]);

  const rightButton = (item) => {
    return [
      {
        text: "Remove",
        onPress: () => removeNoti(item),
        backgroundColor: "#FF4500",
        color: "#FFF"
      },
    ];
  }

  const leftButton = (item) => {
    return [
      {
        text: "Uncheck",
        onPress: () => unReadNoti(item),
        backgroundColor: "#FF7F50",
        color: "#FFF"
      }
    ];
  }

  // Remove notification in swipe-out
  const removeNoti = async (item) => {
    // console.log("Removing notif");
    await AsyncStorage.getItem('notification_Items').then(token => {
      const res = JSON.parse(token);
      if (res !== null && res!== []) {            
        res.forEach(function (element, index) {
          if (element.id == item.id){
            res.splice(index,1);
            AsyncStorage.setItem('notification_Items', JSON.stringify(res));
          }
        });
      }        
      else {
        AsyncStorage.setItem('notification_Items', JSON.stringify([]));
      }
      renderNotifications();
      
    })
    

    
  };

  const unReadNoti = () => {
    // Code here
    // Unread noti will increase the 1 in the top right corner of the bell icon
  }

  const Card = ({Notification}) => {
    return (
      <Swipeout right={rightButton(Notification)} left={leftButton(Notification)} backgroundColor={"transparent"} close>
        <Pressable 
          activeOpacity={0.8}
          >
          <LinearGradient colors={["#F5FCFF", "#f3f3f3", ]} style={styles.card2}>
            <View>
              {/* Title and subtitle */}
              <Text style={{fontSize: 15, fontWeight: 'bold', color: "#053466"}}>
                  {Notification.title}
              </Text>

              {/* Location text */}
              <Text style={{color: "grey", fontSize: 14, marginTop: 3.5}}>
                {Notification.subtitle}
              </Text>

              {/* Facilities container */}
              <View style={{marginTop: 8, flexDirection: 'row'}}>
                <Text>{Notification.description}</Text>
              </View>
            </View>
          </LinearGradient>
        </Pressable>
      </Swipeout>
    );
  }

  const renderNotifications = async() => {
    await AsyncStorage.getItem('notification_Items').then(token => {
      const res = JSON.parse(token);
      if (res !== null && res!== []) {            
        setNotificationItems(res);
      }        
      else 
        setNotificationItems([]);
      // console.log("items in render");
      // console.log(notificationItems);
    })
  }

  const clearNotifications = async() => {
    await AsyncStorage.setItem('notification_Items', JSON.stringify([]));
  }

  const logNotifications = async() => {
    await AsyncStorage.getItem('notification_Items').then(token => {
      const res = JSON.parse(token);
      console.log("items in res");
      console.log(res);
      console.log("items in log notificationItems");
      console.log(notificationItems);
    });
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* * Return Button to previous page */}
        <Pressable style={{marginLeft: 8, flexDirection: 'row', alignItems: 'center',}}
          onPress={() => navigation.navigate("Entry", {screen: "Entry_home"})}>
          <Icon style={{color: "#053466"}}name="chevron-left" size={25}/>
          <Text style={{fontSize: 16, marginLeft: -3}}>Back</Text>
        </Pressable>

        <View style={{flexDirection: "row", marginLeft: 6, marginTop: 4.5}}>
          <Text style={{marginLeft: 18, fontSize: 24, fontWeight: "bold", color: "#053466", marginBottom: 3.5}}>Notifications</Text>
        </View>

        {/** Show all notifications here */}
        {/* <Swipeout right={rightButton(item)} left={leftButton(item)} backgroundColor={"transparent"} close> */}
          <FlatList
            snapToInterval={width - 20}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20, marginTop: -5}}
            vertical
            data={notificationItems}
            style={styles.NotiList}
            renderItem={({item}) => <Card Notification={item} />}
          />
        {/* </Swipeout> */}

          {/** Show Default notifications here */}
          <Send_notification/>   
          

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: -8,
    },
    wrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom:50,
    },
    items: {
        marginTop: 30,
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
    NotiList: {
      paddingTop: 8,

    }
});

export default User_notification;
