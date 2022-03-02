import React, {useEffect} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import store from './Redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './Components/ComponentsReal/First';
import EnterScreen2 from './Components/ComponentsReal/EnterScreen2';
import Loadingscreen3 from './Components/ComponentsReal/LoadingScreen3';
import LetsExplore4 from './Components/ComponentsReal/LetsExplore4';
import {SigninSignup5} from './Components/ComponentsReal/SigninSignup5';
import Signin6 from './Components/ComponentsReal/Signin6';
import Signup7 from './Components/ComponentsReal/Signup7';
import CustomNavigation from './Components/Drawer/CustomNavigation';
import { createAppContainer, withNavigation } from 'react-navigation';
import { AppState } from 'react-native';

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

const Stack = createNativeStackNavigator();

const App2 = () => {

  const state = useSelector(state => state.auth)
  return (  
    <Provider store={store} context={React.createContext()}>

      <NavigationContainer>    
      <Stack.Navigator initialRouteName={(state.auth.token==""||state.auth.token==null)&&state.isLoading==false ?"First":"Nav"} screenOptions={{ orientation: 'portrait' }}>        
        <Stack.Screen name="Nav" component={CustomNavigation} options={{ headerShown: false, orientation: 'portrait' }}/>        
        <Stack.Screen name="First" component={First} options={{ headerShown: false}}/>        
        <Stack.Screen name="Second" component={EnterScreen2} options={{ headerShown: false}}/>        
        <Stack.Screen name="Third" component={Loadingscreen3} options={{ headerShown: false}}/>        
        <Stack.Screen name="Fourth" component={LetsExplore4} options={{ headerShown: false}}/>        
        <Stack.Screen name="SigninUp" component={SigninSignup5} options={{ headerShown: false}}/>        
        <Stack.Screen name="Signin" component={withNavigation(Signin6)} options={{ headerShown: false}}/>        
        <Stack.Screen name="Signup" component={withNavigation(Signup7)} options={{ headerShown: false}}/>        
      </Stack.Navigator>
      </NavigationContainer>
</Provider>
  );
};


const customFonts = {
  Lateef: require("./assets/fonts/Lateef.ttf"),
  bdavat: require("./assets/fonts/bdavat.ttf"),
  AmiriBold: require("./assets/fonts/Amiri-Bold.ttf"),
};

const App = () =>{

  const [isLoading] = useFonts(customFonts);

  useEffect(()=>{
    Font.loadAsync(customFonts).then(()=>console.log("ok"))
  },[])

  return (
    <Provider store={store} >
      {!isLoading?null:<App2/>}
    </Provider>
  );
}

export default App;