import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'

function MyCourseCard(props) {

    const course = props.course

    return (
        <View
       
        style={{ display: 'flex', flexDirection:'row-reverse', alignContent: 'center', backgroundColor: "#dddddd", width: Dimensions.get("screen").width, marginTop: 2 }}
        >
            <Image source={{uri: course.pic}} style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
            <View style={{ display: 'flex' }}>
                <Text style={{ color: '#666', top: 30, fontFamily: 'AmiriBold', paddingRight: 10 }}>
                    {course.name}
                </Text>
            </View>
            <TouchableOpacity 
             onPress={()=>props.navigation.navigate("CourseLessons", {id: course.id} )}
            style={{ backgroundColor: 'pink', height: 40, width: 100, position: 'absolute',  bottom: 10, 
            right: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', 
            alignContent: 'center', alignItems: 'center' }}>
                <Text adjustsFontSizeToFit style={{ fontSize: 13, fontFamily: 'AmiriBold'}}>
                    عرض المزيد 
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    MyCourseCard:{

    },
    courseName:{
       
    },
    courseDesc:{

    },
    view:{

    }
})

export default MyCourseCard
