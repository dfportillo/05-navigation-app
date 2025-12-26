import { FlatList, View, Text } from "react-native";
import React from "react";
import { products } from "@/store/products.store";
import { Link } from "expo-router";

const productsScreen = () => {
  return (
    <View className=" flex flex-1">
      <FlatList 
        data={products} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View className=" mt-8">
            <Text className=" text-2xl font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className=" flex flex-row justify-between">
              <Text className=" font-work-black">{item.price}</Text>
              <Link 
                href={`/tabs/(stack)/products/${item.id}`}
                className=" text-primary underline-offset-1"
                ><Text>ver detalles</Text></Link>
            </View>
          </View>
          
        )
        } />
    </View>
  );
};

export default productsScreen;
