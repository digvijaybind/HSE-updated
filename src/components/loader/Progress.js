/*eslint-disable*/
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { lightColors } from '../../theme/color'
export default function Progress({value}) {
  return (
   <View style={style().container}>
      <View style={style(value).innerContainer}></View>
   </View>
  )
}
const style=(value)=>StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:lightColors.background.primary,
        height:5,
        borderRadius:20
    },
    innerContainer:{
        height:5,
        borderRadius:20,
        backgroundColor:lightColors.background.secondary,
        width:`${value}%`
    }
})
