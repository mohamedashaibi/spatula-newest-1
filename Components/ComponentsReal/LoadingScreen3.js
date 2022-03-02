import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { runOnJS } from 'react-native-reanimated'
import Copyright from './Copyright'

function Loadingscreen3(props) {

    useEffect(() => {
        runOnJS(setTimeout(()=>{
            props.navigation.navigate("Fourth")
        }, 5000))
    }, [])

    return (
        <View style={{ flex: 4, backgroundColor: 'white' }}>
            <View style={{flex: 1, justifyContent: 'center', paddingTop: 70 }}>
            <Image 
            style={{ 
                alignSelf: "center",
                resizeMode:"contain",
                width: 250
            }}
            source={require("../../assets/images/spatulapng.png")}
            />
            </View>
            <View style={{flex: 2, alignContent:'center'}}>
            <Image
            style={{ 
                alignSelf: "center",
                justifyContent: 'space-around',
                resizeMode:"center",
                width: 330
            }}
            source={require("../../assets/images/cake.gif")}
            />
            </View>
            <View style={{flex: 1, justifyContent:'flex-end', paddingBottom: 40}}>
            <Copyright style={{flex:1}}/>
            </View>
        </View>
    )
}

export default Loadingscreen3
