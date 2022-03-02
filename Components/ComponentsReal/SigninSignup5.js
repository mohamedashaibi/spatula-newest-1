import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import {WhatsappFooter} from './WhatsappFooter'
import { useSelector } from 'react-redux'

export const SigninSignup5 = (props) => {
    
    var selector = useSelector(state=>state.AuthReducer)
    
    return (
       <View style={{ flex: 4, backgroundColor: 'white' }}>
        <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 60 }}>
        <Image 
        style={{
            resizeMode:"contain",
            height: 200,
            width: 250
        }}
        source={require("../../assets/images/spatulapng.png")}
        />
        <View style={{ flex: 1,display: 'flex', justifyContent: 'center', alignContent: 'flex-start' }}>
        <Text style={{ textAlign: 'center', fontSize: 22, margin: 15, fontFamily: 'Lateef' }}>
            مرحبا بك في تطبيق سباتولا, اول تطبيق مختص بالكيك والحلويات عربيا. بإشراف الشيف الليبي حنان العابد
        </Text>
        <View style={{ display: 'flex', paddingTop: 10, width: Dimensions.get('screen').width, 
        flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 30, paddingRight: 30, direction: 'rtl' }}>
       
        <TouchableOpacity
        style={{ backgroundColor: "#ffa1a1", width: 150, height: 60,borderRadius: 10,padding: 0,
        alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
        onPress={
            ()=>props.navigation.navigate("Signin")
        }
        >
            <Text adjustsFontSizeToFit style={{ color: "white", fontSize: 30, lineHeight: 40, fontFamily: 'Lateef' }}>
            الدخول
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{ backgroundColor: "white", width: 150, borderRadius: 10, height: 60,borderColor: 'grey', borderWidth: 1,
        alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
        onPress={
            ()=>props.navigation.navigate("Signin")
        }
        >
            <Text adjustsFontSizeToFit style={{ color: "grey", fontSize: 25,lineHeight: 40, fontFamily: 'Lateef' }}>
            التسجيل
            </Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        <WhatsappFooter style={{ backgroundColor: "blue", maxHeight: 20}}/>
    </View>
    );
}