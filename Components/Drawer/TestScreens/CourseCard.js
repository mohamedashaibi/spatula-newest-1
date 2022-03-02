import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { ClearCourses } from '../../../Redux/Actions/Courses/actions'

function CourseCard(props) {
    const dispatch = useDispatch()
    // {"course":{"id":1,"name":"كورس الحلويات الشرقية",
    //"picture":"pic2","cost":0,"description":"d,fjbvwkunskrufw",
    //"featured":true,"status":true}
    const course = props.course


    return (
        <View
       
        style={{ direction: 'rtl',display: 'flex', flexDirection:'row-reverse', alignContent: 'center', backgroundColor: "#dddddd", width: Dimensions.get("screen").width, marginTop: 2 }}
        >
            <Image source={{uri: course.pic}} style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
            <View style={{ display: 'flex' }}>
                <Text style={{ color: '#666', top: 30, fontFamily: 'AmiriBold', paddingRight: 10 }}>
                    {course.name}
                </Text>
            </View>
            {props.route.params.category=="free"?
            <TouchableOpacity 
             onPress={()=>props.navigation.navigate("CourseLessons", {"id": course.id} )}
            style={{ backgroundColor: 'pink', height: 40, width: 100, position: 'absolute',  bottom: 10, right: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}><Text adjustsFontSizeToFit style={{ fontSize: 13, fontFamily: 'AmiriBold'}}>عرض المزيد </Text></TouchableOpacity>
            :
            <TouchableOpacity 
             onPress={()=>{ 
                 dispatch(ClearCourses())
                props.navigation.navigate("CourseBuy", {"id": course.id} )}}
            style={{ backgroundColor: 'pink', height: 40, width: 100, position: 'absolute', bottom: 10, right: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <Text adjustsFontSizeToFit style={{ fontSize: 13, fontFamily: 'AmiriBold'}}>شراء </Text>
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    courseCard:{

    },
    courseName:{
    },
    courseDesc:{

    },
    view:{

    }
})

export default CourseCard
