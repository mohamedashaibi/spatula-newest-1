import React, { useEffect } from 'react'
import { Dimensions, Image, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { AddCourse, ClearCourses, GetCourse, GetCourseLessons, GetUserCourses } from '../../../Redux/Actions/Courses/actions';
import { useFocusEffect } from '@react-navigation/native';
import { GetToken } from '../../../Redux/Actions/Auth/actions';
import store from '../../../Redux/store';

function CourseDetails(props) {
    
    //const id = ;
    const dispatch = useDispatch()
    // "cost": 0, "description": "d,fjbvwkunskrufw", 
    //"featured": true, "id": 1, "name": "كورس الحلويات الشرقية", 
    //"picture": "pic2", "status": true
    
    useFocusEffect(
        React.useCallback(() => {
            dispatch(GetCourse(props.route.params.id))
            dispatch(ClearCourses())
          }, [props.route.params.id])
  );
  

    const state = useSelector(state => state.courses)
    return (
        <View style={{  display: 'flex', height: Dimensions.get('screen').height, flexDirection: 'column', justifyContent: 'space-around', alignContent: 'space-around', flex: 4 }}>
            <Image source={require('../../../assets/images/spatulapng.png')} style={{ 
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height /4,
                resizeMode: 'contain',
                alignSelf: 'center',
                 flex: 1
             }}/>
             <View style={{ top: 0, borderColor: 'cyan', borderWidth: 5, height:  Dimensions.get('screen').height/3.6, flex: 2 }}>
            <Text style={{  fontSize: 20, textAlign: 'center', textDecorationLine: 'underline' }}>{state.course.name}</Text>
            <Text style={{  fontSize: 15, padding: 20, textAlign: 'right' }}>{state.course.description}</Text>
            </View>
            <View style={{ flex: 1,alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            
            <TouchableOpacity 
            style={{ 
                backgroundColor: 'pink', width: 200, padding: 20, borderRadius: 30, alignSelf: 'center'

             }}
             onPress={()=>dispatch(AddCourse(state.course.id)) }
             >
                <Text style={{ textAlign: 'center',  fontSize: 20, color: 'purple' }}>
                    الاشتراك الان
                </Text>
            </TouchableOpacity>
            
            </View>
        </View>
    )
}

export default CourseDetails
