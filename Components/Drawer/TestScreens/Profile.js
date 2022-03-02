import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { View, Text, Button } from "react-native";
import { GetPaidCourses } from '../../../Redux/Actions/Courses/actions';

export default function ProfileScreen(props) {

    const state = useSelector(state => state.auth)
  const dispatch = useDispatch();

    useEffect(()=>{
      props.navigation.preventDefault()
      dispatch(GetPaidCourses())

    },[])

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:16,fontWeight:'700'}}>Profile Screen</Text>
      </View>
    );
  }