import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { runOnJS } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCourses, ConfirmPayment, GetCourse, InitializePayment } from '../../../Redux/Actions/Courses/actions';
import InPayment from '../../InPayment';
import Loading from '../../Loading';

function CoursePurchase(props) {
    const[loading, setLoading] = useState(true)
    const[phoneValid, setPhoneValid] = useState(false);
    const [phoneValue, setPhone] = useState('');
    const[showConfirm, setShowConfirm] = useState(false);
    const [pinCode, setPinCode] = useState('')
    const state = useSelector(state => state.courses)
    const [paymentStatus, setPaymentStatus] = useState('');
    const [inPayment, setInPayment] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setPhoneError(false)
            dispatch(ClearCourses()).then(result=>{
                dispatch(GetCourse(props.route.params.id)).then(result=>setLoading(false))
            })
              });
            return ()=>{
                unsubscribe
                setPhoneError(false)
            setShowConfirm(false);
            setPhone('')
            };
        
    }, [])

    return (
        <>
        {loading?<Loading/>:
        inPayment?<InPayment status={paymentStatus} show={inPayment}/>:
        <View style={{ backgroundColor: 'white', height: Dimensions.get('screen').height }}>
            <View style={{ height: Dimensions.get('screen').height*0.3, backgroundColor: 'white' }}>
                <View style={{ padding: 30}}>
                <View style={{display: 'flex', justifyContent: 'space-between', 
                borderBottomColor: 'grey', borderBottomWidth: 1, flexDirection: 'row-reverse', alignItems: 'center'}}>
                    <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={{ color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2,textAlign: 'center',fontFamily: 'AmiriBold', fontSize: 25 }}>
                    حول العملية :
                    </Text> 
                    <Text adjustsFontSizeToFit allowFontScaling numberOfLines={1} style={{ textAlign: 'center',fontFamily: 'AmiriBold', fontSize: 20,color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2 }}>
                    {state.course.name}
                    </Text>
                </View>
                <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center'}}>
                <Text style={{ fontFamily: 'AmiriBold', fontSize: 25, textAlign:'center',color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2,  }}>
                         قيمة المبلغ :
                    </Text>
                    <Text style={{ color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2,fontFamily: 'AmiriBold', fontSize: 20, textAlign:'center', width: Dimensions.get('screen').width/2 }}>
                        {state.course.price} دينار ليبي
                    </Text>
                </View>
                
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
                    {console.log("phone error = " +phoneError)}
                    {phoneError?<View>
                        <Text style={{textAlign:'right', fontFamily: 'AmiriBold', color: 'red',color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2, }}>
                            لا يمكن اتمام العملية بنجاح
                            </Text>
                    </View>:
                    <View style={{
                        display: 'flex',
                        paddingTop: 60,
                        paddingBottom: 60,
                        paddingRight: 20,
                        paddingLeft: 20,
                        width: Dimensions.get('screen').width*0.8,
                        backgroundColor: '#fffd',
                        borderRadius: 30
                    }}>
                        <Text style={{ color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2,textAlign:'right', fontFamily: 'AmiriBold', color: '#dd7777' }}>
                            تأكيد الشراء
                        </Text>
                        <Text style={{color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2, textAlign:'right', fontFamily: 'AmiriBold' }}>
                            ادخل رمز تأكيد الشراء المرسل الى الرقم {phoneValue} مكون من 6 ارقام
                        </Text>
                 <TextInput  onChangeText={newText=>{
                    setPinCode(newText);
                }} style={{ marginBottom: 10 ,borderColor: 'grey', fontSize: 20, borderWidth: 1, width: Dimensions.get('screen').width*0.7, 
                borderRadius: 10, padding: 10, textAlign:'center', backgroundColor: 'white' }}/>         
                    
                    <View style={{ width: Dimensions.get('screen').width*0.7, display: 'flex', 
                    flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ padding: 15 }} onPress={()=>{
                        console.log("pincode = " + pinCode)
                        dispatch(ConfirmPayment(state.course.id, pinCode, state.transactionId)).then(result=>{
                            console.log("inpurchase = " +JSON.stringify(state))
                            setPaymentStatus(state.operationStatusCode + '')
                            setInPayment(true);
                            
                        }).finally(()=>{
                            setTimeout(()=>{
                               setInPayment(false);
                               setPaymentStatus('');
                               setShowConfirm(false)
                               props.navigation.navigate("Home")
                            },6000)
                        })
                    }}>
                        <Text style={{ fontFamily: 'AmiriBold', color: '#dd7777' }}>
                             إكمال الشراء
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 15 }} onPress={()=>{
                        setPhone('')
                        setPhoneValid(false)
                        setShowConfirm(false)}}>
                        <Text style={{ fontFamily: 'AmiriBold', color: '#dd7777' }}>
                            تغيير الرقم
                        </Text>
                    </TouchableOpacity>

                    </View>
                    </View>
                    }
                    </View>
                </Modal>


            <View style={{ display: 'flex', justifyContent:'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 20, fontFamily: 'AmiriBold', marginBottom: 5,color: 'rgb(72, 108, 122)',
                textShadowColor: 'rgba(0, 0, 0, 0.1)',
                textShadowRadius: 2, }}>
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
            {phoneValid?<TouchableOpacity style={{  alignSelf: 'center', backgroundColor: '#ff9999',  display: 'flex', justifyContent:'center', alignItems:'center', width: Dimensions.get('screen').width/2, padding: 5, borderRadius: 10 }} 
            onPress={()=>dispatch(InitializePayment(state.course.id, "218" + phoneValue.substring(1))).then(result=>{
                console.log("phone error = " + state.transactionId)
                if(state.transactionId == undefined){
                    runOnJS(()=>{
                        setTimeout(() => {
                            setPhoneError(true)
                        }, 2000);
                    }) 
                    setPhoneError(false)
                    setShowConfirm(false)
                }
                setShowConfirm(true)})}>
                <Text adjustsFontSizeToFit style={{  textAlign:'center' ,color: "white", fontSize: 25,  fontFamily: 'AmiriBold', includeFontPadding: false,
            textShadowColor: '#aaa', textShadowOffset: { width: 0.5, height: 1 }, textShadowRadius: 4, paddingBottom: 2}}>
                    شراء
                </Text>
            </TouchableOpacity>:
            <Text adjustsFontSizeToFit style={{ fontFamily: 'AmiriBold', color: 'darkred', fontSize: 15, width: Dimensions.get('screen').width*0.6, textAlign:'center' }}>
                يجب ان يكون الرقم مكون من 10 ارقام وان يبدأ ب 092 او 094
            </Text>}
            </View>
            
        </View>
        }
        </>
    )
}

export default CoursePurchase