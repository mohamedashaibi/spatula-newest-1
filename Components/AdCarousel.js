import { Carousel } from 'react-bootstrap'
import React from 'react'
import { View, Image } from 'react-native'
import 'bootstrap/dist/css/bootstrap.css'

function AdCarousel() {
    return (
        <View style={{ backgroundColor: "red" }}>
            <Carousel >
            <Carousel.Item>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </View>
    )
}

export default AdCarousel
