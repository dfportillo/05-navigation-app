import { View, Text } from "react-native";
import React from "react";
import { type DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView scrollEnabled={false} {...props}>
      <View className=" flex justify-center items-center mx-3 p-10 mb-10 bg-primary rounded-xl">
        <View className=" flex justify-center items-center bg-white rounded-full h-24 w-24">
            <Text className=" text-primary font-work-black text-3xl">DP</Text>
        </View>
      </View>
      {/** Drawer items ( manera de personalizar el Drawer) */}
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
