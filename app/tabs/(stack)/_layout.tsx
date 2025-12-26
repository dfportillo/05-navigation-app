import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StacklLayout = () => {
  return (
    <Stack
      screenOptions={
        {
          headerShown:false,
          headerShadowVisible:false,
          contentStyle:{
            backgroundColor:'white'
          }
        }
      }
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "home screen",
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
