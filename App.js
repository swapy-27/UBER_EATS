import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./Navigation";
import Home from "./screens/Home";
import ResturantDetails from "./screens/ResturantDetails";

export default function App() {
  return <RootNavigation />;
}
