/*eslint-disable*/
import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { lightColors } from '../../theme/color'

export default function ProgressShow({progress}) {
  return (
    <View style={style().container}>
    <View  style={style().innercontainer}>
       <View style={style(progress).progress}></View>
    </View>
    <Text style={textStyle(12,'bold','grey').text}>{progress}/10</Text>
    </View>
  )
}
const style=(width)=>StyleSheet.create({
    innercontainer:{
     width:"90%",
     height:6,
     backgroundColor:lightColors.background.quaternary,
     borderRadius:20,
     padding:0
    },
    progress:{
     backgroundColor:lightColors.background.secondary,
     width:`${(width/10)*100}%`,
     height:6,
     borderRadius:20
    },
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    }
    
 })
 const textStyle=(fontSize,fontWeight,color)=>StyleSheet.create({
    text:{
      fontSize,
      fontWeight,
      color
    }
 })