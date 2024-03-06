/*eslint-disable*/
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function EndContainer() {
  return (
    <View style={style.container}>

    </View>
  )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:"lightgray",
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        height:"100%",
        width:"100%",
        borderRadius:25,
        marginTop:20
    }
})