import * as React from 'react';
import { View, Text, Image, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import CarouselCards from '../../Carousel/CarouselCards';
import HomeCard from '../../HomeCard';
import {WhatsappFooter} from '../../ComponentsReal/WhatsappFooter'
import { useDispatch, useSelector } from 'react-redux';
import { GetAds } from '../../../Redux/Actions/Courses/actions';

export const Home = ({navigation}) => {

    const [courseMenu, setCourseMenu] = React.useState(false);

    const [loadingTop, setLoadingTop] = React.useState(true);
    const [loadingBottom, setLoadingBottom] = React.useState(true);

    const selector = useSelector(state=>state.courses)
    const dispatch = useDispatch();
    React.useEffect(()=>{
      dispatch(GetAds()).then(result=>{
        setLoadingTop(false);
        setLoadingBottom(false);
      })
      return ()=>{

      }
    }, [dispatch])

    return (
      <View style={{ flex: 7, backgroundColor: 'white' }}>         
        <View style={{ position: 'absolute', bottom: 100, zIndex: 400 }}>
        <TouchableOpacity style={{ backgroundColor: '#3dc4d5', width: 70, alignContent: 'center', display: 'flex',
         height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 2,
          left: 10, shadowColor: '#000', shadowOffset: {height: 0.8, width: 1}, shadowRadius: 25 }} onPress={()=>{
            setCourseMenu(!courseMenu)
          }}>
          <Text style={{ color: 'white', fontSize: 50 }}>+</Text>
        </TouchableOpacity>
        </View>
        {courseMenu?
        <View style={{ position: 'absolute', bottom: 180, left: 20, zIndex: 200, height: 90, display: 'flex', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ backgroundColor: 'white',  
          textAlign: 'center', borderWidth: 1, width: 170, borderRadius: 10, height: 40 }}
          onPress={
            ()=>{
              setCourseMenu(false)
               navigation.navigate("FreeCourses")
            }
        }
          >
            <Text style={{ textAlign: 'center',  fontSize: 23, fontFamily: 'Lateef' }}>الكورسات المجانية</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'white', 
          textAlign: 'center', borderWidth: 1, width: 170, borderRadius: 10, height: 40 }}
          onPress={
            ()=>{
              setCourseMenu(false)

               navigation.navigate("PaidCourses")
            }
        }
          >
            <Text style={{ textAlign: 'center',  fontSize: 23, fontFamily: 'Lateef' }}>الكورسات المدفوعة</Text>
          </TouchableOpacity>
        </View>:null
        }
        <View style={{ flex:1.5 }}>
          {loadingTop==true?null:
            <CarouselCards styles={{ backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50}} data={selector.topAds}/>
          }
        </View>

        <View style={{ flex:2, backgroundColor: '#ffffffff', justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground source={require('../../../assets/images/homebackpink.png')} style={{ width:Dimensions.get('screen').width}}>
          <HomeCard navigation={navigation}/>
          </ImageBackground>
        </View>
        
        <View style={{ flex:1,  justifyContent: 'flex-start' }}>
          <View style={{ height: Dimensions.get('screen').height/4 }}>
          {loadingBottom?null:
            <CarouselCards styles={{ backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 50}} data={selector.bottomAds}/>
          }
          {/* <ImageBackground source={require('../../../assets/images/ok.jpg')} imageStyle={{ width: '100%', resizeMode: 'cover', display: 'flex', height: 150 }} style={{ height: Dimensions.get('screen').height/3.3,width:Dimensions.get('screen').width, resizeMode: 'cover' , flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            </ImageBackground> */}

          </View>           
        </View>
        
        <View style={{ flex: 0.5, backgroundColor: 'white', justifyContent: 'space-around' }}>
            <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Image source={require('../../../assets/images/spatulapng.png')} style={{ height: 60 , width: Dimensions.get("screen").width/7,resizeMode: 'cover', borderRadius: 20, backgroundColor: '#ffffff'}}/>
            <Image source={require('../../../assets/images/spatulapng.png')} style={{ height: 60 , width: Dimensions.get("screen").width/7,resizeMode: 'cover', borderRadius: 20, backgroundColor: '#ffffff'}}/>
            <Image source={require('../../../assets/images/spatulapng.png')} style={{ height: 60 , width: Dimensions.get("screen").width/7,resizeMode: 'cover', borderRadius: 20, backgroundColor: '#ffffff'}}/>
             </View>

        </View>
        <WhatsappFooter/>
      </View>
    );
  }