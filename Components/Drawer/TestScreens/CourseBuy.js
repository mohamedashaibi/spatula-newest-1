import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { ClearCourses, ConfirmPayment, GetCourse, InitializePayment } from '../../../Redux/Actions/Courses/actions';
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
                <Image source={{uri: state.course.pic}} style={{ flex: 2.5, resizeMode: 'cover' }}/>
                <View style={{flex: 2, padding: 30}}>
                <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={{ textAlign: 'center',fontFamily: 'Lateef', fontSize: 30, flex: 0.5, borderBottomWidth: 1 }}>
                {state.course.name}
                </Text>
                <Text adjustsFontSizeToFit style={{ fontFamily: 'Lateef', fontSize: 25, flex: 1, textAlign:'center' }}>
                {state.course.description}
                </Text>
                <Text style={{ fontFamily: 'Lateef', fontSize: 30, flex: 0.5, textAlign:'center', borderColor: 'grey', borderWidth: 3, borderRadius: 10 }}>
                    السعر : {state.course.price}
                </Text>
                </View>
            </View>
            <Modal 
            collapsable
                animationType="slide"
                transparent
                visible={showConfirm}
                onRequestClose={() => {
                setShowConfirm(showConfirm);
                }}
            >
                <View 
                style={{flex: 1, backgroundColor: '#00000080', height: Dimensions.get('screen').height, width: Dimensions.get('screen').width,display: 'flex', alignSelf: 'center', justifyContent: 'center',
                alignItems: 'center'
            }}
                >
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 60,
                        paddingBottom: 60,
                        paddingRight: 10,
                        paddingLeft: 10,
                        width: Dimensions.get('screen').width*0.8,
                        backgroundColor: '#fffd',
                        borderRadius: 30
                    }}>
                 <TextInput  onChangeText={newText=>{
                    setPinCode(newText);
                }} style={{ marginBottom: 10 ,borderColor: 'grey', fontSize: 20, borderWidth: 1, width: Dimensions.get('screen').width*0.7, 
                borderRadius: 10, padding: 10, textAlign:'center', backgroundColor: 'white' }}/>         
                    <Text>
                        lkdjthgilntsin
                    </Text>
                    <View style={{ width: Dimensions.get('screen').width*0.7, display: 'flex', 
                    flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ backgroundColor: 'pink', padding: 15 }} onPress={()=>{
                        dispatch(ConfirmPayment(state.course.id, pinCode, state.transactionId))
                    }}>
                        <Text>
                            إكمال
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'pink', padding: 15 }} onPress={()=>{
                        setPhone('')
                        setPhoneValid(false)
                        setShowConfirm(false)}}>
                        <Text>
                            إغلاق
                        </Text>
                    </TouchableOpacity>

                    </View>
                    </View>
                    </View>
                </Modal>


            <View style={{ flex: 2.5,display: 'flex', justifyContent:'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontFamily: 'Lateef', marginBottom: 5 }}>
                يرجى إدخال رقم هاتف للاستمرار
            </Text>    
            <TextInput accessibilityViewIsModal keyboardType='number-pad' collapsable onChangeText={newText=>{
                setPhone(newText)
                if(newText.length === 10 && newText.charAt(0) === '0' && newText.charAt(1) === '9' && (newText.charAt(2) === '4' || newText.charAt(2) === '2')){
                    setPhoneValid(true)
                }else{
                    setPhoneValid(false)
                }
                }} style={{ marginBottom: 10 ,borderColor: 'grey', fontSize: 20, borderWidth: 1, width: Dimensions.get('screen').width*0.7, borderRadius: 10, padding: 10, textAlign:'center', backgroundColor: 'white' }}/>
            {phoneValid?<TouchableOpacity style={{  backgroundColor: 'pink',  display: 'flex', justifyContent:'center', alignItems:'center', width: Dimensions.get('screen').width/2, padding: 30, borderRadius: 50 }} 
            onPress={()=>dispatch(InitializePayment(state.course.id, "218944458662")).then(result=>setShowConfirm(true))}>
                <Text adjustsFontSizeToFit style={{  textAlign:'center' ,color: "grey", fontSize: 35,  position: 'absolute', fontFamily: 'Lateef',
            textShadowColor: '#aaa', textShadowOffset: { width: 0.5, height: 1 }, textShadowRadius: 4, paddingBottom: 2}}>
                    شراء
                </Text>
            </TouchableOpacity>:
            <Text adjustsFontSizeToFit style={{ color: 'darkred', fontSize: 15, width: Dimensions.get('screen').width*0.6, textAlign:'center' }}>
                يجب ان يكون الرقم مكون من 10 ارقام وان يبدأ ب 092 او 094
            </Text>}
            </View>
            
        </View>
        }
        </>
    )
}

export default CourseBuy