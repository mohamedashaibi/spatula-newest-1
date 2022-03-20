import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import * as a from 'react-native-animated-spinkit'
function Loading() {
  return (
    <View style={{ width: Dimensions.get('screen').width, display:'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', 
     height: Dimensions.get('screen').height *0.66 }}>
      <a.Bounce animating={true} color='pink' size={130} />
    </View>
    )
}

export default Loading