import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function SearchBar() {
  return (
    <View style={style.searchBar}>
    <TextInput value='text'/>
    <Button title='search' />
    </View>
  )
}

const style = StyleSheet.create({
  searchBar:{
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center'
  }
})