import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/shared/CustomButton";
import { router } from "expo-router";

const homeScreen = () => {
  return (
    <SafeAreaView>
      <View className=" mt-5 mx-5">
        <Text className=" font-work-black text-3xl text-primary">Home</Text>
        
        <CustomButton
          color="primary"
          onPress={() => router.push('/tabs/(stack)/products')} 
        >Productos</CustomButton>
        <CustomButton
          color="secundary"
          onPress={() => router.push('/tabs/(stack)/profile')} 
        >
          profile
        </CustomButton>
        
        <CustomButton
          color="tertiary"
          onPress={() => router.push('/tabs/(stack)/settings')} 
        >
          settings
        </CustomButton>
        <CustomButton
          color="tertiary"
          onPress={() => router.push('/tabs/(stack)/products')}
          variant={'text-only'} 
        >productos-text only</CustomButton>
        
      </View>
    </SafeAreaView>
  );
};

export default homeScreen;
