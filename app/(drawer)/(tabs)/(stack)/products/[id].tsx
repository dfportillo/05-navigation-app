import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { products } from "@/store/products.store";

const ProductScreen = () => {
  const {id} = useLocalSearchParams(); // como en la web
  const product = products.find(p => p.id === id)
  const navigation = useNavigation()

  useEffect(()=>{
    navigation.setOptions({
      title: product? product.title :'Producto'
    })
    
  },[product])
  if(!product) {
    return (<Redirect href='/products'/>)
  }

  return (
    <View className=" px-5 mt-10">
      <Text className=" font-work-black text-2xl">{product.title}</Text>
      <Text className=" font-work-light text-xl">{product.description}</Text>
      <Text className=" font-work-medium">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
