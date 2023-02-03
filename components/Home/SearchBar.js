import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{key:""}}
        onPress={(data,details=false)=>{
            console.log(data.description);
        }}
        placeholder="Search"
        styles={style.inputText}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24}></Ionicons>
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              marginRight: 8,
              borderColor: "black",
              borderRadius: 30,
            }}
          >
            <Ionicons
              name="time-sharp"
              size={16}
              style={{ marginRight: 8 }}
            ></Ionicons>
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  inputText: {
    textInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#eee",
      borderRadius: 50,
      marginRight: 10,
    },
    textInput: {
      backgroundColor: "#eee",
      borderRadius: 20,
      marginTop: 7,
      fontWeight: "700",
    },
  },
});
