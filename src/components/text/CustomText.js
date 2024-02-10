/*eslint-disable*/
import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function CustomText({topic,fontSize,fontWeight,color,customStyle}) {
  return (
   <Text style={[style(fontSize,fontWeight,color).text,{...customStyle}]}>{topic}</Text>
  )
}
const style=(fontSize,fontWeight,color)=>StyleSheet.create({
   text:{
    fontSize,
    fontWeight,
    color
   }
})
