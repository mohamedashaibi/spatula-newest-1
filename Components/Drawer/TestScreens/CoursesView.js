import React, { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { GetFreeCourses, GetPaidCourses } from '../../../Redux/Actions/Courses/actions';
import CarouselCards from '../../Carousel/CarouselCards';
import Loading from '../../Loading';
import CourseCard from './CourseCard'

export const CoursesView = (props) => {

    const dispatch = useDispatch()
    const selector = useSelector(state=>state.courses)
    const [loading, setLoading] = useState(true);

    React.useEffect(()=>{
      console.log("Props in view = " + JSON.stringify(props))
      const unsubscribe = props.navigation.addListener('focus', () => {
        
        if(props.route.params.category == "free"){
        dispatch(GetFreeCourses()).then(result=>setLoading(false))
        
        }else if(props.route.params.category == "paid"){
          dispatch(GetPaidCourses()).then(result=>setLoading(false))
        }

      });

   return unsubscribe;
    }, [dispatch]);


    return (
      <View style={{ flex: 4 }}>
        <View style={{ flex: 1 }}>
        <CarouselCards styles={{padding: 50}} data={selector.topAds}/>
        </View>
        <View style={{ flex: 3 }}>
          <ScrollView>
            {loading||selector.isLoading?<Loading/>:
            selector.allcourses.map((item, index)=>{
              return <CourseCard course={item} key={index} {...props}/>
            })
          }
          </ScrollView>
        </View>
      </View>
    );
  }