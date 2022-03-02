import React from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';

function HomeCarousel() {
    return (
        <View>
            <Carousel data={[
                {image: "ok", name: "ok"},
                {image: "ok", name: "ok"},
                {image: "ok", name: "ok"},
                {image: "ok", name: "ok"},
                {image: "ok", name: "ok"}
            ]} 
            sliderWidth={Dimensions.get("screen").width}
            renderItem={data}
            />
        </View>
    )
}

export default HomeCarousel
