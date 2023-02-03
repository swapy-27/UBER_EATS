import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTab from "../components/Home/HeaderTab";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestuarantItem from "../components/Home/RestuarantItem";
import BottomTab from "../components/Home/BottomTab";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Home({ navigation }) {
  const [resturants, setResturants] = useState([]);
  useEffect(() => {
    const docRef = doc(db, "Restaurants", "Jabalpur");
    const getData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const arr = [data.r1, data.r2, data.r3];
        setResturants(arr);
      } else {
        console.log("No such document!");
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.home_container}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {console.log(resturants)}
        {resturants.map((data)=>{
          console.log(data);
          return <RestuarantItem  navigation={navigation} details={data}/>
        })}
      </ScrollView>

      <BottomTab />
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
