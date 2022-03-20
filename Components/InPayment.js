import React, { useState } from 'react'
import {Alert, Modal, StyleSheet, Text, Pressable, View , Image} from 'react-native'
import { Dimensions } from 'react-native'


function InPayment(props) {
    const status = props.status
    const [show, setShow] = useState(props.status)

  return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={true}
        style={{ width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').height, display: 'flex', justifyContent: 'center', alignContent: 'center' }}
       >
           <View style={{ width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').height, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'  }}>
                <Text style={{ fontFamily: 'AmiriBold', fontSize: 30, color: 'grey' }}>
                    حالة الطلب
                </Text>
                <Text style={{ fontFamily: 'AmiriBold', color: status=='0'?"green": "red", fontSize: 25 }}>
                {status=='0'?"تمت عملية الشراء بنجاح": status=='4'?"لا يوجد رصيد كافي": "لا يمكن اتمام العملية بنجاح"}
                </Text>
                {status=='0'?
                <Image source={require('../assets/images/icon/tick.png')} style={{ width: Dimensions.get('screen').width/2, resizeMode: 'contain' }}/>:
                <Image source={require('../assets/images/icon/close.png')} style={{ width: Dimensions.get('screen').width/2, resizeMode: 'contain' }}/>    
                }
            </View>
        </Modal>
  )
}

export default InPayment