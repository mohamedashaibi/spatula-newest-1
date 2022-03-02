import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';

import {
    DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer, 
    Text,
    TouchableRipple,
     Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import Copyright from '../ComponentsReal/Copyright';
import {Logout} from '../../Redux/Actions/Auth/actions'

export function DrawerContent(props){

    const dispatch = useDispatch()

    const selector2 = useSelector(state=> state.courses)
    const selector = useSelector(state=> state.auth)
    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <DrawerContentScrollView  {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'column', justifyContent: 'center',
                        textAlign: 'center',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: selector.auth.user.image
                                }}
                                size={100}
                                style={{ alignSelf: 'center' }}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>
                                    
                                </Title>
                                <Title style={{  textAlign: 'center', paddingBottom: 20, fontSize:25, fontFamily:'Lateef' }}>
                                    عضو/ة منذ {selector.auth.user.date}
                                </Title>
                            </View>
                        </View>

                    </View>
                    <View style={{ width: Dimensions.get('screen').width, height: 1, borderWidth: 1, borderColor: 'grey' }}></View>
                    <Drawer.Section style={styles.drawerSection}>
                        <TouchableOpacity style={styles.drawerItem}
                        onPress={() => {props.navigation.navigate('Home')}}
                        >
                        <DrawerItem
                            icon={({color, size}) => (
                                <Image source={require('../../assets/images/icon/download.png')} style={{ width: 20, height: 20, resizeMode: 'contain'}}/>
                            )}
                            label=""
                            
                        />
                        <Text style={styles.drawerItemText}>الرئيسية</Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('FreeCourses')}}
                        
                        >

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../../assets/images/icon/feedback.png')} style={{ width: 20, height: 20, resizeMode: 'contain'}}/>

                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>الكورسات المجانية</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('PaidCourses')}}
                        
                        >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>الكورسات المدفوعة</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('MyCourses')}}
                        
                        >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../../assets/images/icon/purchases.png')} style={{ width: 20, height: 20, resizeMode: 'contain'}}/>

                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>الدورات المشتراه</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.drawerItem}
                            onPress={() => {dispatch(Logout())}}
                        
                        >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('../../assets/images/icon/log-out.png')} style={{ width: 20, height: 20, resizeMode: 'contain'}}/>

                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>تسجيل الخروج</Text>
                        </TouchableOpacity>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
           <Copyright/>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
        textAlign: 'center',
      paddingLeft: 20,
    },
    title: {
        textAlign: 'center',
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
        textAlign: 'center',
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      marginRight: 5,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    drawerItem:{
        width: Dimensions.get('screen').width/3 *2.6,
        display:'flex',
        textAlign: 'justify',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        
    },
    drawerItemText:{
        
        fontSize: 25,
        fontFamily: 'Lateef'
    }
  });