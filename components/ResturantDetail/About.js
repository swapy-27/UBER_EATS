import { View, Text, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function About() {
  return (
    <View >
      <Image
        style={{ width: "100%", height: 200 }}
        source={require("../../assets/images/bg1.jpg")}
      />
      <View>
        <Text style={{ fontWeight: "900", fontSize: 15 }}>
          Farmhouse Kitchen Thai Cuisine
        </Text>
        <Text style={{ fontWeight: "900", color: "grey" }}>35-40 .min</Text>
      </View>
    </View>
  );
}
