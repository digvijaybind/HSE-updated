/*eslint-disable*/  
import React from 'react'
import { View,StyleSheet } from 'react-native'
import HorizontalSeperator from '../seperator/HorizontalSeperator'
import CustomText from '../text/CustomText'

export default function AssetPriceDisplay({item}) {
  return (
    <View style={style().container}>
    <View style={style().innerContainer}>
    <View style={style(item.color).colorContainer}/>
     <HorizontalSeperator width={5}/>
       <CustomText topic={item.fee} color={'black'}></CustomText>
    </View>
    <CustomText color={'black'} topic={`₹ ${(item.amount).toLocaleString()}`}/>
   </View>
  )
}
const style=(color)=>StyleSheet.create({ 
   container:{
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:'row'
},
innerContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center'
},
colorContainer:{
    height:15,
    width:15,
    borderRadius:100,
    backgroundColor:color
}
})