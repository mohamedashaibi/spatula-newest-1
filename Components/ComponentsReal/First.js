import React, { useEffect } from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from 'react-native'

function First(props) {

    useEffect(() => {
        setTimeout(()=>{
            props.navigation.replace("Second")
        },2000)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <Image  
            style={{ 
                alignSelf: "center",
                resizeMode:"contain",
                width: Dimensions.get('screen').width/1.4
            }}
                source={require("../../assets/images/spatulapng.png")}
            />
            <ActivityIndicator size="small" color="#3dc4d5" style={{ position: "absolute", transform: [{scale: 2.5}] }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });

export default First
