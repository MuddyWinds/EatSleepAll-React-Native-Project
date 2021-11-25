import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button, ScrollView, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Notifs from './Notifications';
import Notification_data from '../assets/data/Notification_data';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';



const {width, height} = Dimensions.get('screen');

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

const User_notification = () => {


    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
        });

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
        });

        return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);


    return (
        <SafeAreaView style={styles.container}>

            {/* * Return Button to previous page */}
            <Pressable style={{marginLeft: 8, flexDirection: 'row', alignItems: 'center',}}
                onPress={() => navigation.navigate("Entry", {screen: "Entry_home"})}>
                <Icon style={{color: "#053466"}}name="chevron-left" size={25}/>
                <Text style={{fontSize: 16, marginLeft: -3}}>Back</Text>
            </Pressable>

            <View style={{flexDirection: "row", marginLeft: 6, marginTop: 4.5}}>
                <Text style={{marginLeft: 18, fontSize: 24, fontWeight: "bold", color: "#053466",}}>Notifications</Text>
            </View>
            
                {/* <FlatList
                    snapToInterval={width - 20}
                    showsVerticalScrollIndicator={false}
                    style={styles.wrapper}
                    // contentContainerStyle={{paddingLeft: 20, paddingTop: 6}}
                    vertical
                    data={Notification_data}
                    renderItem={({item}) => <Notifs title={item.title} text={item.description} type={item.type} show={item.show} id={item.id}/>}
                />
                 */}
             <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                <Text>Your expo push token: {expoPushToken}</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Title: {notification && notification.request.content.title} </Text>
                    <Text>Body: {notification && notification.request.content.body}</Text>
                    <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
                </View>
                <Button
                    title="Press to Send Notification"
                    onPress={async () => {
                    await sendPushNotification(expoPushToken);
                    }}
                />
            </View>


        </SafeAreaView>
    );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: 'default',
      title: 'Original Title',
      body: 'And here is the body!',
      data: { someData: 'goes here' },
    };
  
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }
  
  async function registerForPushNotificationsAsync() {
    console.log("Registering push notification");
    let token;
    if (Constants.isDevice) {
        console.log("Constants isDevice");
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        console.log('Failed to get push token for push notification!');
        alert('Failed to get push token for push notification!');
        return;
      }
      console.log(existingStatus, finalStatus);
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 0,
    },
    wrapper: {
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom:50,
        // backgroundColor: 'green',
    },
    items: {
        marginTop: 30,
    },
    
});
// export {User_notification, deleteNotification};
export default User_notification;
