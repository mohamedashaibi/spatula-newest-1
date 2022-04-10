import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-paper'

function MyCourseCard(props) {

    const course = props.course

    return (
        <TouchableOpacity 
        onPress={()=>props.navigation.navigate("CourseLessons", {"id": course.id} )}
       style={{ backgroundColor: 'white', justifyContent: 'center', 
       display: 'flex', alignContent:'center'
       }}>
        <View
        style={{ display: 'flex', flexDirection:'row-reverse', alignContent: 'center',
        justifyContent: 'center', alignItems: 'center', backgroundColor: "white", 
        borderBottomColor: 'lightgrey',borderBottomWidth: 1,
        width: Dimensions.get("screen").width, marginTop: 2, height: Dimensions.get('screen').height*0.15 }}
        >
            <View>
            <Image source={{uri: course.pic}} style={{ marginLeft: 10, width: 100, height: 70, resizeMode: 'contain', alignSelf: 'auto' }}/>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: Dimensions.get('screen').width*0.5 }}>
                <Text style={{ flexWrap: 'wrap',
                color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2,
                fontFamily: 'AmiriBold', fontSize: 20, flexShrink: 1, paddingTop: 5, includeFontPadding: false, 
                width: Dimensions.get('screen').width*0.6 }}>
                    {course.name}
                </Text>
                <Text style={{ 
                      color: 'rgb(72, 108, 122)',
                      fontSize: 15,
                      textShadowColor: 'rgba(0, 0, 0, 0.1)',
                      textShadowRadius: 2,
                    includeFontPadding: false, fontFamily: 'AmiriBold', textAlign: 'right', width: Dimensions.get('screen').width*0.5}}>
                    
                </Text>
            </View>
            <View>
           
                <Text adjustsFontSizeToFit style={{
                    includeFontPadding: false,
                      color: 'rgb(72, 108, 122)',
                      textShadowColor: 'rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                      padding: 10,
                      textShadowRadius: 2,borderColor: 'lightblue', borderWidth: 1,
              borderRadius: 10, fontSize: 20, fontFamily: 'AmiriBold', backgroundColor: 'white'}}>
                    المزيد 
                </Text>
            
            </View>
        </View>
        </TouchableOpacity>

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
