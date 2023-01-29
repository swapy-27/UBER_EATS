import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderTab from "../components/Home/HeaderTab";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestuarantItem from "../components/Home/RestuarantItem";
import BottomTab from "../components/Home/BottomTab";

export default function Home() {
  return (
    <SafeAreaView style={styles.home_container}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestuarantItem />
          <RestuarantItem />
          <RestuarantItem />
          <RestuarantItem />
          <RestuarantItem />
        </ScrollView>

        <BottomTab />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#eee",
    flex: 1
  },
});
