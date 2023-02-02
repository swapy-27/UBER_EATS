import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResturantDetails from "./screens/ResturantDetails";
import Home from "./screens/Home";

export default function RootNavigation() {
  const stack = createNativeStackNavigator();
  const screenOptions={
    headerShown:false,
  };
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={screenOptions}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="ResturantDetails" component={ResturantDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
