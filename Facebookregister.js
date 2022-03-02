import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';
import { useDispatch } from 'react-redux';
import { Login } from './Redux/Actions/Auth/actions';


 export default function RegisterFacebook(props){

    const dispatch = useDispatch();

    async function register() {
        try {
          await Facebook.initializeAsync({
            appId: '503611874397394',
          });
          const c = {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (c.type === 'success') {

            const response = await fetch(`https://graph.facebook.com/me?fields=email,name,picture.width(720).as(picure_large)&access_token=${c.token}`);
                        
            const res = await response.json();

            console.log("res = "+JSON.stringify(res.picure_large.data.url));

            dispatch(Login(res.name, res.email, res.id, res.picure_large.data.url, "facebook"))
            .then((result)=>{
              setTimeout(()=>props.navigation.replace("Nav"), 8000);
            });

          } else {
            alert('حدث خطأ عند محاولة تسجيل الدخول')
          }
        } catch ({ message }) {
          console.log(message)
          alert(`خطأ من فيس بوك: ${message}`);
        }
      }
      
      return (
            <View>
                <TouchableOpacity onPress={()=>register()}>
                <Image
                source={require('./assets/images/facebook.png')}
                style={{ width: 80,
                  height: 80, 
                  resizeMode:"cover",
                }}                
                />
                </TouchableOpacity>
            </View>
        );
        
}
  