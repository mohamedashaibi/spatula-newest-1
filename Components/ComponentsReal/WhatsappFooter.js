import React from 'react'
import { Button, Image, Linking, SafeAreaViewComponent, Text, View, TouchableOpacity } from 'react-native'

export const WhatsappFooter = () => {
    return (
        <View style={{ backgroundColor: "#3dc4d5", height: 60, display: 'flex', 
        justifyContent: 'center', alignContent: 'center' }}>
            <TouchableOpacity
             style={{ direction: 'rtl', display: 'flex', flexDirection: "row-reverse", 
             alignItems: 'center', alignContent: 'center' }}
            onPress={()=>{
                Linking.openURL('https://wa.me/218945367550')
            }}
            >
                <Image 
            style={{ 
                resizeMode:"cover",
                marginTop: 5,
                marginRight: 5,
                marginBottom: 5,
                marginLeft: 5,
                width: 30,
                height: 30,
                padding: 10,
            }}
            source={require("../../assets/images/whatsapplogo.png")}
            
            />
            <Text adjustsFontSizeToFit style={{ alignSelf: 'center', fontSize: 20, color: "white", 
             includeFontPadding: false, fontFamily: 'AmiriBold'   }}>للمساعدة, اضغطي هنا للتواصل عبر الواتساب</Text>
            </TouchableOpacity>
        </View>
    );
}
