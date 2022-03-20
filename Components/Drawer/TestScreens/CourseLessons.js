import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import { GetCourse, GetCourseLessons } from '../../../Redux/Actions/Courses/actions';
import LessonCard from './LessonCard';
import { ActivityIndicator } from 'react-native-paper';
import Loading from '../../Loading';

function CourseLessons(props) {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const state = useSelector(state=>state.courses)

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
        
        setLoading(true)
        dispatch(GetCourse(props.route.params.id)).then(result=>setLoading(false))
    
          });
        return ()=>{
            unsubscribe
        };
    }, [])


    return (
        <View style={{ flex: 4 }}>
            {loading==true?<Loading/>:
            <>
            <Image source={{ uri: state.course.pic }} 
            style={{flex:1, resizeMode: 'contain', backgroundColor: 'white', alignSelf:'center', width: Dimensions.get('screen').width, height: 200}}/>
            <View style={{ flex:1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 30, paddingRight: 20, fontFamily: 'AmiriBold', textAlign: 'right' }}>الوصف</Text>
            <Text style={{ paddingRight: 20, fontSize: 20, fontFamily: 'bdavat', textAlign:'right' }}>{state.course.description}</Text>    
            </View>
            <View style={{ flex: 2, justifyContent: 'center' }}>
            <ScrollView style={{ flex:2.5, alignContent: 'flex-start' }}>
            {state.course.videos.map((element, index)=>{
                return <LessonCard lesson={element} key={index} {...props}/>;
            })}
            </ScrollView>
            </View>
            </>
            }
        </View>
    )
}

export default CourseLessons
