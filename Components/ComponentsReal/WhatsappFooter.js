import React from 'react'
import { Button, Image, Linking, SafeAreaViewComponent, Text, View, TouchableOpacity } from 'react-native'

export const WhatsappFooter = () => {
    return (
        <View style={{ backgroundColor: "#3dc4d5", height: 60 }}>
            <TouchableOpacity
             style={{ direction: 'rtl', display: 'flex', flexDirection: "row-reverse", 
             alignItems: 'center' }}
            onPress={()=>{
                Linking.openURL('whatsapp://send?text=hello&phone=+218945367550')
            }}
            >
                <Image 
            style={{ 
                resizeMode:"cover",
                marginTop: 5,
                marginRight: 5,
                marginLeft: 5,
                width: 40,
                height: 40,
                padding: 10,
                borderRadius: 200,
            }}
            source={require("../../assets/images/whatsapplogo.png")}
            
            />
            <Text adjustsFontSizeToFit style={{ fontSize: 23, color: "white", paddingTop: 10, fontFamily: 'Lateef'   }}>للمساعدة, اضغظي هنا للتواصل عبر الواتساب</Text>
            </TouchableOpacity>
        </View>
    );
}
