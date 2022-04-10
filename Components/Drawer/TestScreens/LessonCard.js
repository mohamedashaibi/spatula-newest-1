import { H1, P } from '@expo/html-elements';
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import {WebView} from 'react-native-webview'

function LessonCard(props) {
    const regex = /(<([^>]+)>)/ig;
    const lesson = props.lesson;

    return (
    
        <TouchableOpacity
        onPress={()=>props.navigation.navigate("LessonDetails", {"id": lesson.id})}
        style={{ display: 'flex', flexDirection:'row-reverse', justifyContent: 'space-around', alignItems: 'center', alignContent: 'center',
         backgroundColor: "white", width: Dimensions.get("screen").width, marginTop: 2 }}
        >
            <Image source={{uri: `https://dashboard.spatulagroup.com/images/recipes/${lesson.image[0].image}`}} style={{ width: 100, height: 120, resizeMode: 'contain' }}/>
            <View style={{ display: 'flex', justifyContent: 'center', marginRight: 10 }}>
            
                <Text style={{ flexWrap: 'wrap',
                color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2,
                fontFamily: 'AmiriBold', fontSize: 25, flexShrink: 1, paddingTop: 5, includeFontPadding: false, 
                width: Dimensions.get('screen').width*0.5 }}>
                    {lesson.title}
                </Text>
                <Text style={{ 
                      color: 'rgb(72, 108, 122)',
                      fontSize: 20,
                      textShadowColor: 'rgba(0, 0, 0, 0.1)',
                      textShadowRadius: 2,
                    includeFontPadding: false, fontFamily: 'AmiriBold', textAlign: 'right', width: Dimensions.get('screen').width*0.5}}>
                    <P>{lesson.subtitle.replace(regex, '').substr(0, 20)}</P>
                </Text>
            </View>
            <View>
            <TouchableOpacity 
            style={{ backgroundColor: 'white', justifyContent: 'center', 
            display: 'flex', alignContent:'center'
            }}>
                <Text adjustsFontSizeToFit style={{
                    includeFontPadding: false,
                      color: 'rgb(72, 108, 122)',
                      textShadowColor: 'rgba(0, 0, 0, 0.1)',
                      textAlign: 'right',
                      padding: 10,
                      textShadowRadius: 2,borderColor: 'lightblue', borderWidth: 1,
              borderRadius: 10, fontSize: 24, fontFamily: 'AmiriBold', backgroundColor: 'white'}}>
                    المزيد 
                </Text>
            </TouchableOpacity>
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