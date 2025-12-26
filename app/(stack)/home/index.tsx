import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";

const homeScreen = () => {
  return (
    <SafeAreaView>
      <View className=" mt-5 mx-5">
        <Text className=" font-work-black text-3xl text-primary">Home</Text>
        
        <CustomButton
          color="primary"
          onPress={() => router.push('/products')} 
        >Productos</CustomButton>
        <CustomButton
          color="secundary"
          onPress={() => router.push('/profile')} 
        >
          profile
        </CustomButton>
        
        <CustomButton
          color="tertiary"
          onPress={() => router.push('/settings')} 
        >
          settings
        </CustomButton>
        <CustomButton
          color="tertiary"
          onPress={() => router.push('/products')}
          variant={'text-only'} 
        >productos-text only</CustomButton>
        {/* <Link className=" mb-5 text-secundary" href={'/products'}>Productos{' '}</Link>
        <Link className=" mb-5 text-secundary" href={'/profile'}>profile{' '}</Link>
        <Link className=" mb-5 text-secundary" href={'/settings'}>settings{' '}</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default homeScreen;
