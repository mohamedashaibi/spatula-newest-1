import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

function Loading() {
  return (
    <View style={{ width: Dimensions.get('screen').width, display:'flex', justifyContent: 'center', alignContent:'center', alignItems:'center'}}>
        <Image source={require('../assets/images/spatulapng.png')} style={{ width: Dimensions.get('screen').width/2,resizeMode: 'contain'}}/>      
        
        <Image source={require('../assets/images/loading2.gif')} style={{  bottom: -180 ,position: 'absolute',width: Dimensions.get('screen').width/7,resizeMode: 'contain'}}/>
    </View>
    )
}

export default Loading