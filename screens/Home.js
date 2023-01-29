import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestuarantItem from "../components/RestuarantItem";
import BottomTab from "../components/BottomTab";

export default function Home() {
  return (
    <SafeAreaView style={styles.home_container}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />

        <ScrollView  showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestuarantItem/>
        </ScrollView>

        <BottomTab  />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home_container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#eee",
    flex: 1,
  },
});
