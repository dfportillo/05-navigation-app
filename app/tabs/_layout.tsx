import React from "react";
import { Tabs } from "expo-router";
import {FontAwesome} from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart-o" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
