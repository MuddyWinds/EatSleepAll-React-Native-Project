import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button, ScrollView, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Notifs from './Notifications';
import Notification_data from '../assets/data/Notification_data'

const {width, height} = Dimensions.get('screen');
// const addNotification = (text,type) => {
//     console.log("addNotification");
//     notificationItems = [[text,type],...notificationItems]

// }

// const deleteNotification = (index) => {
//     console.log("deleteNotification");
//     return;
// }

// const notificationItems = [
//     ["Notification 1 (restaurant) 1 2 3 4 5 6 7 8 9 10 abcdef  abcasdaa basd", "restaurant"],
//     ["Notification 2 (hotel)", "hotel"],
//     ["Notification 3 (washroom) 1 2 3 4 5 6 7 8", "washroom"],
// ]

const User_notification = () => {

    // const [notification, setNotification] = useState('hi');
    // const [notificationType, setNotificationType] = useState('');
    // const [notificationItems, setNotificationItems] = useState([]);

    // const handleAddNotification = (text,type) => {
    //     // setNotification(text);
    //     // setNotificationType(type);
    //     setNotificationItems([...notificationItems, [text,type]]);
    //     console.log('handled add notification');
    // }

    // const handleDeleteNotification = (index) => {
    //     let itemsCopy = [...notificationItems];
    //     itemsCopy.splice(index,1);
    //     setNotificationItems(itemsCopy);
    // }

    // setNotification("testing");
    // handleAddNotification('notif1 (restaurant)');
    // handleAddNotification('notif1 (restaurant)','restaurant');
    // handleAddNotification('notif2 (hotel)', 'hotel');
    // handleAddNotification('notif3 (washroom)', 'washroom');


    return (
        <SafeAreaView style={styles.container}>

            {/** Return Button to previous page */}
            <Pressable style={{marginLeft: 8, flexDirection: 'row', alignItems: 'center',}}
                onPress={() => navigation.navigate("Entry", {screen: "Entry_home"})}>
                <Icon style={{color: "#053466"}}name="chevron-left" size={25}/>
                <Text style={{fontSize: 16, marginLeft: -3}}>Back</Text>
            </Pressable>

            <View style={{flexDirection: "row", marginLeft: 6, marginTop: 4.5}}>
                <Text style={{marginLeft: 18, fontSize: 24, fontWeight: "bold", color: "#053466",}}>Notifications</Text>
            </View>
            {/* <Button title={'button'} onPress={() => addNotification('notif 1','restaurant')}></Button> */}

            {/* <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}> */}
                {/* <View style={styles.items}>
                    {
                        // notificationItems.map((item,index) => {
                        //     return <Notifs key={index} text={item[0]} type={item[1]}/>
                        //     // return <Notifs key={index} text={item} type={'restaurant'}/>
                        // })
                        for (let i = 1 ; i < Object.keys(notification_data).length ; i++) {
                            // console.log(notification_data[i.toString()].text);
                            return <Notifs key={i} text={notification_data[i.toString()].text}></Notifs>
                        }
                    }
                    

                </View> */}
                <FlatList
                    snapToInterval={width - 20}
                    showsVerticalScrollIndicator={false}
                    style={styles.wrapper}
                    // contentContainerStyle={{paddingLeft: 20, paddingTop: 6}}
                    vertical
                    data={Notification_data}
                    renderItem={({item}) => <Notifs title={item.title} text={item.description} type={item.type} show={item.show} id={item.id}/>}
                />
                
            {/* </ScrollView> */}

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
        // backgroundColor: 'green',
    },
    items: {
        marginTop: 30,
    },
    
});
// export {User_notification, deleteNotification};
export default User_notification;
