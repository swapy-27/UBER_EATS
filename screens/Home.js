import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView style={styles.home_container}>
      <HeaderTab/>
      <SearchBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    home_container:{
        marginTop:StatusBar.currentHeight,
    }
})