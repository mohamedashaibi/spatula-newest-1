import React, { useEffect } from 'react'
import { Dimensions, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { GetLesson } from '../../../Redux/Actions/Courses/actions';
import LessonCard from './LessonCard';
import LessonDetails from './LessonDetails';

function LessonScroll(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("In lesson scroll id = " + JSON.stringify(props))
        dispatch(GetLesson(props.route.params.id))
    }, [])
    
    const state = useSelector(state=>state.courses)

    return (
        <View style={{ height: Dimensions.get('screen').height, width: Dimensions.get('screen').width }}>
            {console.log("State in lessonscroll = " + JSON.stringify(state))}
            {state.course.videos == null? 
            <ActivityIndicator size="large" color="cyan"
             style={{ alignSelf: 'center', transform:[{scale:2}], marginTop: 150, width: 200, height: 200}}/>: 
             <LessonDetails lesson={state.course.videos[0]} />
             }
        </View>
    )
}

export default LessonScroll
