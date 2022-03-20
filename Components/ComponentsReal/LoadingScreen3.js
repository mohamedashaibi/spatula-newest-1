import React, { useEffect } from 'react'
import { Dimensions, Image, View } from 'react-native'
import { runOnJS } from 'react-native-reanimated'
import Copyright from './Copyright'

function Loadingscreen3(props) {

    useEffect(() => {
        runOnJS(setTimeout(()=>{
            props.navigation.navigate("Fourth")
        }, 5000))
    }, [])

    return (
        <View style={{ flex: 5, backgroundColor: 'white' }}>
            <View style={{flex: 1, justifyContent: 'center', paddingTop: 70 }}>
            <Image 
            style={{ 
                alignSelf: "center",
                resizeMode:"contain",
                width: Dimensions.get('screen').width*0.5
            }}
            source={require("../../assets/images/spatulapng.png")}
            />
            </View>
            <View style={{flex: 2, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', alignSelf: 'center'}}>
            <Image
            style={{ 
                alignSelf: "auto",
                justifyContent: 'center',
                resizeMode:"center",
                width: Dimensions.get('screen').width*0.6
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
