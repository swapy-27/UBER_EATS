import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function RestuarantItem(props) {
  const navigation=props.navigation;
  const details=props.details;
  return (
    <TouchableOpacity onPress={
      ()=>{
        navigation.navigate('ResturantDetails');
      }
    }>
    <View
      style={{
        borderRadius: 20,
        marginTop: 15,
        padding: 5,
        backgroundColor: "",
        alignItems: "center",
      }}
    >
      <View style={{ position: "relative" }}>
        <Image
          style={{ borderRadius: 20 }}
          // source={require("../../assets/images/bg1.jpg")}
          source={({uri:details.Image})}
        />
        <Ionicons
          name="heart-outline"
          size={24}
          style={{
            position: "absolute",
            color: "white",
            right: 0,
            marginRight: 10,
            marginTop: 5,
          }}
        ></Ionicons>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "space-between",
        }}
      >
        <View style={{ width: "80%" }}>
          <Text style={{ fontWeight: "900", fontSize: 15 }}>
            {details.Name}
          </Text>
          <Text style={{ fontWeight: "900", color: "grey" }}>35-40 .min</Text>
        </View>
        <View
          style={{
            borderRadius: 100,
            padding: 10,
            paddingHorizontal: 16,
            backgroundColor: "grey",
          }}
        >
          <Text style={{ fontWeight: "900" }}>{details.Rating}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}
