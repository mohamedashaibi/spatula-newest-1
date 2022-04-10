import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { GetFreeCourses } from '../Redux/Actions/Courses/actions'

function HomeCard({navigation}) {

    const dispatch = useDispatch();

    return (
        <View style={{width: Dimensions.get('screen').width, 
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}> 
            <TouchableOpacity
            style={{ 
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('screen').height /6,
                width: Dimensions.get('screen').width /2.5,
             }}
             onPress={
                 ()=>{
                    navigation.navigate("FreeCourses")
                 }
             }
            >
              <Avatar.Image source={require('../assets/images/recipe_type.png')} 
                style={{ 
                    backgroundColor: '#ffffffff',
                    resizeMode: "contain" }}
                size={160}
                />
                <Text style={{ position: 'absolute', fontSize: 18, color: 'white',
                    textAlign: 'center', fontFamily: 'AmiriBold1', bottom: 0  }}>
                     الدورات
                     {"\n"}
                    المجانية
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity
            style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('screen').height /6,
                width: Dimensions.get('screen').width /2.5,
             }}

             onPress={
                 ()=>{
                    navigation.navigate("PaidCourses")
                 }
             }
            >
                 <Avatar.Image source={require('../assets/images/recipe_type.png')} 
                style={{ 
                    backgroundColor: '#ffffffff',
                 resizeMode: "contain"}}
                size={160}
                />
                <Text style={{ position: 'absolute', fontSize: 18, color: 'white',
                    textAlign: 'center', fontFamily: 'AmiriBold1', bottom: 0  }}>
                     الدورات
                     {"\n"}
                    المدفوعة
                </Text>
            </TouchableOpacity>
          
        </View>
    )
}

export default HomeCard
