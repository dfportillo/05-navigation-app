import React, { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { useFonts } from 'expo-font';
import "./global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync()

const RootLAyout = () => {

  const[loaded,error] = useFonts({
    'WorkSans-Black':require('../assets/WorkSans-Black.ttf'),
    'WorkSans-Medium':require('../assets/WorkSans-Medium.ttf'),
    'WorkSans-Light':require('../assets/WorkSans-Light.ttf')
  })
  

  useEffect(() => {
    if(error) throw error
    if(loaded) SplashScreen.hideAsync()
    },[loaded,error])
    
    if(!loaded && !error) return null

    //------- navegacion principal va en el stack(pila)-----
    // return (<Slot />)
    return (
    <GestureHandlerRootView style={{flex:1}}> 
      <Slot />
    </GestureHandlerRootView>) 
};

export default RootLAyout;
