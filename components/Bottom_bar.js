import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {View,Dimensions,TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('screen');

export default function BottomBar() {
    return(
        <View>
        {/* Bottom Bar */}
        <LinearGradient colors={["#e8f4f8", "#f3f3f3"]}
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: width,
                position: 'absolute',
                bottom: 0,
                paddingHorizontal: 40,
                backgroundColor: 'transparent',
            }}>
            <TouchableOpacity style={{width: 50,
                                    height: 50,
                                    borderRadius: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                <FontAwesome name="heart" color="#194466"size={40}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 50,
                                    height: 50,
                                    borderRadius: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                <FontAwesome name="home" color="#194466"size={40}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 50,
                                    height: 50,
                                    borderRadius: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                <FontAwesome name="bell" color="#194466"size={40}/>
            </TouchableOpacity>
        </LinearGradient>
        </View>  
    );
}