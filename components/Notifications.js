import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {deleteNotification} from './User_notification';

const type = {
    restaurant: {backgroundColor: 'red'},
    hotel: {backgroundColor: 'lightblue'},
    washroom: {backgroundColor: 'lightgreen'},
};

const show = {
    true: {display: 'flex'},
    false: {display: 'none'},
}

const deleteNotification = (index) => {
    
}


const Notifs = (props) => {

    return (
        <View style={[styles.item, show[props.show]]}>
            <View style={styles.itemLeft}>
                <View style={[styles.square, type[props.type]]}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.cross} onPress={() => deleteNotification(props.id)}>
                <Icon name="close" size={20} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding:15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderWidth:1 ,
    }, 
    item: {
        backgroundColor: '#121212',
        padding:15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderWidth:1 ,
    }, 
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingRight: 0,
    },
    square: {
        width: 24,
        height: 24,
        opacity:0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '75%',

    },
    cross: {
        width: 30,
        height: 30,
        borderRadius: 60,
        paddingLeft: 0,
        marginLeft: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Notifs;