import React from 'react'
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

const CarouselCardItem = ({ item, index }) => {
  return (
    <TouchableOpacity onPress={()=>Linking.openURL(item.link)}>
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.pic }}
        style={styles.image}
      />
    </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: Dimensions.get('screen').height/4,
    resizeMode: 'contain'
  },
 
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem