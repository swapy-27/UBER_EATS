import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.headerButtonsTab}>
      <HeaderButtons
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButtons
        text="PickUp"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerButtonsTab: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
});

const HeaderButtons = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab == props.text ? "black" : "white",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={() => {
        props.setActiveTab(props.text);
      }}
    >
      <Text
        style={{
          color: props.activeTab == props.text ? "white" : "black"
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
