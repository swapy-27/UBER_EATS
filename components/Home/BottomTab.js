import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomTab() {
  const [currState, setState] = useState("home");
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        marginHorizontal: 30,
      }}
    >
      <Icon name="home-sharp" text="Home"></Icon>
      <Icon name="search-sharp" text="Browse"></Icon>
      <Icon name="briefcase-sharp" text="Grocery"></Icon>
      <Icon name="bookmarks-sharp" text="Order"></Icon>
      <Icon name="person-sharp" text="Account"></Icon>
    </View>
  );
}

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Ionicons
          style={{ marginBottom: 3 }}
          name={props.name}
          size={24}
        ></Ionicons>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
