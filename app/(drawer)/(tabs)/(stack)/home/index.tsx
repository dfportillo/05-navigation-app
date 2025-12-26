import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/shared/CustomButton";
import { router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const homeScreen = () => {

  const navigation = useNavigation()
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer)
  }

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
        <CustomButton
          onPress={onToggleDrawer}
        >Abrir menu</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default homeScreen;
