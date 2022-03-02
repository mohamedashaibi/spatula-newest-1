import React from 'react'
import { Image, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import {WhatsappFooter} from './WhatsappFooter'
// import {LinearTextGradient} from 'react-native-text-gradient'

const LetsExplore = (props) => {
    return (
        <View
         style={{ flex: 4, backgroundColor: 'white' }}
         >
            <View 
            style={{ flex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
            <Image 
            style={{
                alignSelf: "center",
                resizeMode:"contain",
                height: 200,
                width: 250
            }}
            source={require("../../assets/images/girl.png")}
            />
            
               
                <Image source={require('../../assets/images/today.png')} style={{ width: Dimensions.get('screen').width*0.7, resizeMode: 'contain' }}/>

               <TouchableOpacity
            onPress={
                ()=>{
                    props.navigation.navigate("SigninUp");
                }
            }
            style={{ backgroundColor: '#3dc4d5', width: 150, borderRadius: 10, display: 'flex', height: 70,
            alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignItems: 'center',marginTop: 15 }}
            >
                <Text adjustsFontSizeToFit
                style={{ color: "white", fontSize: 35, alignSelf: 'center', fontFamily: 'Lateef' }}
                >
                لنستكشف
                </Text>
            </TouchableOpacity>
            </View>
            <WhatsappFooter />
        </View>
    )
}

export default LetsExplore
