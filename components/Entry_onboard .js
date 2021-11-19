import React, {useState} from 'react';
import { StatusBar, View, Text, StyleSheet, SafeAreaView, Image, Pressable, ScrollView } from 'react-native';

// First page when user enters 

const images = [
    "onboard_sleep.jpg",
    "onboard_eat.jpg",
    "onboard_sport.jpg",
];


const Entry_onboard = ({navigation}) => {
    
    /** Auto-chaning image here */
    const [value, setvalue] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setvalue((v) => (v === 2 ? 0 : v + 1));
        }, 1000);
    }, []);
    const rPic = "../assets/" + images[value];

    // INCOMPLETE UNTIL HERE

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar translucent backgroundColor={'rgba(52, 52, 52, 0.8)'} />
            
            {/* Onboarding Image */}
            <Image source={require("../assets/onboard_sport.jpg")} style={style.image}/> 

            {/* Indicator container */}
            <View style={style.indicatorContainer}>
                <View style={style.indicator} />
                <View style={style.indicator} />
                <View style={[style.indicator, style.indicatorActive]} />
            </View>

            {/* Title and text container */}
            <View style={{paddingHorizontal: 20, paddingTop: 30}}>
                {/* Title container */}
                <View style={style.text}>
                    <Text style={style.title}>Eat. Sleep. All.</Text>
                    <Text style={style.textStyle}>Integrate your life in one app.</Text>
                </View>
            </View>

            {/* Button container */}
            <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 25,}}>

                {/* button */}
                <Pressable onPress={() => navigation.navigate('Entry_home')}>
                    <View style={style.btn}>
                        <Text style={{color: 'white'}}>Discover Your Day</Text>
                    </View>
                </Pressable>
            </View>

        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    image: {
      height: 420,
      width: '100%',
      borderBottomLeftRadius: 100,
    },
    indicatorContainer: {
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    indicator: {
      height: 3,
      width: 30,
      backgroundColor: "grey",
      borderRadius: 6,
      marginHorizontal: 5,
    },
    indicatorActive: {
      backgroundColor: "black",
    },
    text: {
        marginLeft: 5,
    },
    title: {
        fontSize: 45, 
        fontWeight: 'bold',
        color: "#053466",
    },
    textStyle: {
        fontSize: 16, 
        color: "grey",
        paddingTop: 10,
        color: "#053466",
    },
    btn: {
      height: 60,
      marginHorizontal: 20,
      backgroundColor: "#053466",
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Entry_onboard;