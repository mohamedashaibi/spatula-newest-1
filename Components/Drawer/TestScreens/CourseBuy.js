import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { ClearCourses, ConfirmPayment, GetCourse, InitializePayment } from '../../../Redux/Actions/Courses/actions';
import { WhatsappFooter } from '../../ComponentsReal/WhatsappFooter';
import Loading from '../../Loading';

function CourseBuy(props) {
    const[loading, setLoading] = useState(true)
    const[phoneValid, setPhoneValid] = useState(false);
    const [phoneValue, setPhone] = useState('');
    const[showConfirm, setShowConfirm] = useState(false);
    const [pinCode, setPinCode] = useState('')
    const state = useSelector(state => state.courses)

    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
        
            dispatch(ClearCourses()).then(result=>{
                dispatch(GetCourse(props.route.params.id)).then(result=>setLoading(false))
            })
              });
            return ()=>{
                unsubscribe
            setShowConfirm(false);
            setPhone('')
            };
        
    }, [])

    return (
        <>
        {loading?<Loading/>:
        
        <View style={{ flex: 7 }}>
            <View style={{ flex: 4.5 }}>
                <Image source={{uri: state.course.pic}} style={{ flex: 1.5, resizeMode: 'contain', backgroundColor: 'white' }}/>
                <View style={{flex: 2, padding: 30}}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={{ includeFontPadding: false, textAlign: 'right', fontFamily: 'AmiriBold', fontSize: 30 }}>
                    الوصف
                </Text>
                <Text adjustsFontSizeToFit style={{ includeFontPadding: false, fontFamily: 'Lateef', fontSize: 20, textAlign:'right' }}>
                {state.course.description}
                </Text>
                <Text style={{ fontFamily: 'AmiriBold', fontSize: 30, textAlign:'center', textAlign: 'right' }}>
                    ثمن الشراء
                </Text>
                <Text style={{ fontFamily: 'Lateef', fontSize: 20, textAlign:'right' }}>
                    {state.course.price} دينار ليبي
                </Text>
                <TouchableOpacity style={{ marginTop: 30, alignSelf: 'center', backgroundColor: '#ff9999',  display: 'flex', justifyContent:'center', alignItems:'center', width: Dimensions.get('screen').width/2.5, borderRadius: 10 }} 
            onPress={()=>{props.navigation.navigate("CoursePurchase", {"id": state.course.id})}}>
                <Text adjustsFontSizeToFit style={{  textAlign:'center' ,color: "white", alignSelf: 'center', fontSize: 30, includeFontPadding: false, fontFamily: 'AmiriBold',
            textShadowColor: '#aaa', textShadowOffset: { width: 0.5, height: 1 }, textShadowRadius: 4, paddingBottom: 2}}>
                    شراء
                </Text>
            </TouchableOpacity>
             

                </View>
            </View>  
            <WhatsappFooter/>          
        </View>
        }
        </>
    )
}

export default CourseBuy