import React, {useEffect} from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './TestScreens/Profile';
import MyCourses from './TestScreens/MyCourses';
import {Home} from './TestScreens/Home';
import {CoursesView} from './TestScreens/CoursesView';
import { useSelector } from 'react-redux';
import CourseDetails from './TestScreens/CourseDetails';
import { DrawerContent } from './DrawerContentCustom';
import CourseBuy from './TestScreens/CourseBuy';
import CourseLessons from './TestScreens/CourseLessons';
import LessonScroll from './TestScreens/LessonScroll';
import {TouchableOpacity, Text, Image} from 'react-native'
import LessonDetails from './TestScreens/LessonDetails';

const Drawer = createDrawerNavigator();

export default function CustomNavigation({navigation}) {


  const state = useSelector(state => state.auth);

  useEffect(() => {
    if(state.auth.token == "" && state.isLoading == false){
      navigation.navigate("SigninUp");
    }    
  }, [state.auth.token, navigation])

  return (
    <>
    <NavigationContainer independent="true">
      <Drawer.Navigator initialRouteName="Home"
      drawerContent={props=><DrawerContent {...props}/>} 
      useLegacyImplementation
      backBehavior="history" 
      screenOptions={{ drawerPosition: 'left',
      swipeEnabled: true,
      headerTitleStyle:{
        fontFamily: 'Lateef',
        color: '#666',
        fontSize: 30
      },
      headerLeft: null,     
      headerTitleAlign: 'center'}}>  
         <Drawer.Screen component={Home} name='Home'
         options={({ navigation }) => ({ 
          unmountOnBlur: true,
          headerRight: () => (
            <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
            <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
            </TouchableOpacity>),
            headerLeft: ()=>{},    
            headerShown: true, headerTitle: "الرئيسية",
            drawerLabel: "الرئيسية"
          })} 
          />
        <Drawer.Screen component={MyCourses} name='MyCourses'
         options={({ navigation }) => ({
          unmountOnBlur: true,
          headerRight: () => (
              <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
                    <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
            </TouchableOpacity>),
          headerLeft: ()=>{},    
          headerShown: true, headerTitle: "كورساتي",
          drawerLabel: "كورساتي"
        })}
        />
        <Drawer.Screen component={ProfileScreen} name='Profile'
         options={({ navigation }) => ({ 
          unmountOnBlur: true,
          headerRight: () => (
              <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
                      <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
              </TouchableOpacity>),
              headerLeft: ()=>{},      
              headerShown: true, headerTitle: "الملف الشخصي",
              drawerLabel: "الملف الشخصي"
            })}
            />
        <Drawer.Screen component={CoursesView} name='FreeCourses' initialParams={{ category: "free" }} 
          options={({ navigation }) => ({ 
          unmountOnBlur: true,
            headerRight: () => (
                <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
                        <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
                </TouchableOpacity>),
                headerLeft: ()=>{},
                headerShown: true, headerTitle: "الكورسات المجانية",
                drawerLabel: "الكورسات المجانية"
              })}
          />
        <Drawer.Screen component={CoursesView} name='PaidCourses' initialParams={{ category: "paid" }} 
         options={({ navigation }) => ({ 
          unmountOnBlur: true,
          headerRight: () => (
              <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
               <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
              </TouchableOpacity>),
              headerLeft: ()=>{},
              headerShown: true, headerTitle: "الكورسات المدفوعة",
             
              drawerLabel: "الكورسات المدفوعة"
            })}
          />
        <Drawer.Screen component={CourseDetails} name='CourseDetails' options={
          ({navigation}) =>({
          headerShown: true,
           headerTitle: "بيانات الكورس", drawerLabel: "بيانات الكورس"}) }  />

           
           <Drawer.Screen component={CourseBuy} name='CourseBuy' 
           options={({ navigation }) => ({ 
             unmountOnBlur: true,
            headerRight: () => (
                <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
                        <Image source={require('../../assets/images/hamburger2.png')} style={{
          width: 25,
          resizeMode: 'contain'
          }}/>
                </TouchableOpacity>),
                headerLeft: ()=>{},
                headerShown: true, headerTitle: "شراء الكورس",
                drawerLabel: "شراء الكورس"
              })} 
           />
           <Drawer.Screen component={CourseLessons} name='CourseLessons'
            options={({ navigation }) => ({ 
              unmountOnBlur: true,
              headerRight: () => (
                  <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
                          <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
                  </TouchableOpacity>),
                  headerLeft: ()=>{},
                  headerShown: true, headerTitle: "دروس الكورس",
                  drawerLabel: "دروس الكورس"
                })}  
           />
           <Drawer.Screen component={LessonScroll} name='LessonScroll' 
           options={({ navigation }) => ({ 
             unmountOnBlur: true,
            headerRight: () => (
                <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
                        <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
                </TouchableOpacity>),
                headerLeft: ()=>{},
                headerShown: true, headerTitle: "دروس الكورس",
                drawerLabel: "دروس الكورس"
              })}  
           />

           <Drawer.Screen component={LessonDetails} name='LessonDetails'
            options={({ navigation }) => ({ 
              unmountOnBlur: true,
              headerRight: () => (
                  <TouchableOpacity style={{padding:20}} onPress={()=> navigation.openDrawer()}>
                          <Image source={require('../../assets/images/hamburger2.png')} style={{
            width: 25,
            resizeMode: 'contain'
            }}/>
                  </TouchableOpacity>),
                  headerLeft: ()=>{},
                  headerShown: true, headerTitle: "طريقة التحضير الرائعة",
                  drawerLabel: "طريقة التحضير الرائعة"
                })}  
           />    
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}