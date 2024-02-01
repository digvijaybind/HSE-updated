/*eslint-disable*/
import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { lightColors } from '../../theme/color'

export default function KycHomeCard() {
  return (
    <TouchableOpacity style={style().container}>
       <Text style={style(15,'bold',lightColors.button).text}>You are almost there !</Text>
       <View style={{width:"100%",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
       <View  style={kycUpdateStyle().container}>
          <View style={kycUpdateStyle(3).progress}></View>
       </View>
       <Text style={style(12,'bold','grey').text}>3/10</Text>
       </View>
       <Text style={style(15,'bold',lightColors.text).text}>Tap to complete registration</Text>
    </TouchableOpacity>
  )
}
const style=(fontSize,fontWeight,color)=>StyleSheet.create({
    container:{
       justifyContent:'space-evenly',
       alignItems:'center',
       width:"100%",
       borderRadius:15,
       borderWidth:1.5,
       borderColor:lightColors.border,
       paddingHorizontal:15,
       height:80
    },
    text:{
        fontSize,
        fontWeight,
        color
    }
})
const kycUpdateStyle=(width)=>StyleSheet.create({
   container:{
    width:"90%",
    height:6,
    backgroundColor:'lightgrey',
    borderRadius:20,
    padding:0
   },
   progress:{
    backgroundColor:lightColors.button,
    width:`${(width/10)*100}%`,
    height:6,
    borderRadius:20
   }
   
})