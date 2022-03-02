import React from 'react'
import { Alert, Image, SafeAreaViewComponent, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RegisterFacebook from '../../Facebookregister'
import Copyright from './Copyright'

function Signup7(props) {
    return (
        <View style={{ flex: 8, backgroundColor: 'white' }}>
        <View style={{ flex:3, alignItems:'center', justifyContent: 'flex-end' }}>
        <Image 
        source={require("../../assets/images/exclamation.png")}
        style={{ 
            width: 80,
            height: 80,
            resizeMode: 'contain'
         }}
        />
        </View>
        <View style={{ flex:1 }}>
            <Text 
            style={{ 
                fontSize: 20,
                textAlign: 'center',
                padding: 20,
             }}
            >
                لتتمكن من انشاء حساب في سباتولا يرجى التسجيل بواسطة واحدة من الطرق الاتية
            </Text>
            </View>
            <View style={{ flex:3,  alignItems:'center', justifyContent: 'flex-start'  }}>
             <RegisterFacebook navigation={props.navigation}/>
            </View>
            <View style={{ flex:1 }}>
                <Copyright/>
            </View>
        </View>
    )
}

export default Signup7
