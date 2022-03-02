import { H1, P } from '@expo/html-elements';
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import {WebView} from 'react-native-webview'

function LessonCard(props) {
    const regex = /(<([^>]+)>)/ig;
    const lesson = props.lesson;

    return (
    
        <TouchableOpacity style={styles.courseCard} 
        onPress={()=>props.navigation.navigate("LessonDetails", {"id": lesson.id})}
        style={{ display: 'flex', flexDirection:'row-reverse', alignContent: 'center', backgroundColor: "#dddddd", width: Dimensions.get("screen").width, marginTop: 2 }}
        >
            {console.log("in lesson card id = " + JSON.stringify(lesson))}
            <Image source={require("../../../assets/images/spatulapng.png")} style={{ width: 120, height: 120, resizeMode: 'contain' }}/>
            <View style={styles.view} style={{ display: 'flex', justifyContent: 'center' }}>
            
                <Text style={{ fontFamily: 'AmiriBold', color: '#666', fontSize: 16 }}>
                    {lesson.title}
                </Text>
                <Text style={{ fontFamily: 'bdavat', color: '#666' }}>
                    <P>{lesson.description.replace(regex, '').substr(0, 8)}....</P>
                </Text>
            </View>
        </TouchableOpacity>
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

export default LessonCard