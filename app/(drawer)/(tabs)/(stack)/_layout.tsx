import { Text } from "react-native";
import React from "react";
import { router, Stack, useNavigation } from "expo-router";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const StacklLayout = () => {

  const navigation = useNavigation();
  const headerLeftClick = (canGoBack:boolean|undefined) => {
    if(canGoBack){
      router.back()
      return
    }
    navigation.dispatch(DrawerActions.toggleDrawer)
  }
 
  return (
    <Stack
      screenOptions={
        {
          // headerShown:false,
          headerShadowVisible:false,
          headerLeft:({tintColor,canGoBack}) =>
            <Ionicons 
              name={canGoBack?"arrow-back":"grid-outline" }
              className=" mr-5" 
              size={20}
              onPress={() => headerLeftClick(canGoBack)}
              />,
          contentStyle:{
            backgroundColor:'white'
          }
        }
      }
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "productos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "perfil",
        }}
      />
      <Stack.Screen 
        name="settings/index"
        options={{
          title: "configuracion",
        }}
      />
    </Stack>
  );
};

export default StacklLayout;
