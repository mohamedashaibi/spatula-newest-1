import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Copyright from './Copyright'

function EnterScreen2(props) {
    return (
        <View style={styles.main}>
            <View style={{ flex: 1 }}>
                
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 70 }}>
            <TouchableOpacity style={{ padding: 50, borderRadius: 100, display: 'flex', justifyContent: 'center', alignItems: 'center',  }}
            onPress={()=>
                props.navigation.replace("Third")
            }
            >
                <Image source={require("../../assets/images/images.png")} style={{ width: Dimensions.get('screen').width/1.2, height: 500, resizeMode: 'contain'}}/>
                <Text style={{ color: "pink", fontSize: 45, position: 'absolute', fontFamily: 'AmiriBold1',
            textShadowColor: '#aaa', textShadowOffset: { width: 0.8, height: 1 }, textShadowRadius: 10, paddingBottom: 20 }}>الدخول</Text>
            </TouchableOpacity>
            </View>
            <View  style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
            <Copyright style={{ flex: 1 }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 3,
        backgroundColor: 'white'
    },
    div: {
        flex: 1,
    }
})

export default EnterScreen2
