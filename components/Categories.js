import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Categories() {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Food",
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((img) => {
        return (
          <View style={{alignItems:"center", marginHorizontal:12,marginTop:10}}>
            <Image
              style={{ width: 50, height: 50 }}
              source={img.image}
            ></Image>
            <Text style={{fontWeight:"800"}}>{img.text}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
