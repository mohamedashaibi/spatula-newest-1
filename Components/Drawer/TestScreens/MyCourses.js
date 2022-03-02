import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, RefreshControl } from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserCourses } from '../../../Redux/Actions/Courses/actions';
import CarouselCards from '../../Carousel/CarouselCards';
import Loading from '../../Loading';
import CourseCard from './CourseCard';
import MyCourseCard from './MyCourseCard';

export default function MyCourses(props) {

    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = React.useState(false);
    useEffect(() => {
      const unsubscribe = props.navigation.addListener('focus', () => {
        
        dispatch(GetUserCourses());

      });

   return unsubscribe;
    }, [])
    const state = useSelector(state => state.courses)
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(()=>setRefreshing(false), 8000);
    }, []);
    return (
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-start' }}>
        <View style={{ flex:1 }}>
        <CarouselCards styles={{padding: 50}} data={state.topAds}/>
        </View>
        <View style={{ flex: 3 }}>
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {state.isLoading?<Loading/>:
          state.usercourses.map((element, index)=>{
            console.log("Course ids in mycourses=" + JSON.stringify(element.course))
            return <MyCourseCard key={index} course={element.course} {...props}/>
                    })}
        </ScrollView>
        </View>
      </View>
    );
  }