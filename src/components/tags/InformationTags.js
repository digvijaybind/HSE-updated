/*eslint-disable*/
import React,{useState} from 'react'
import { StyleSheet, TouchableOpacity,FlatList ,View,Text, Dimensions} from 'react-native'
import { lightColors } from '../../theme/color'

export default function InformationTags({selectedTag,setselectedTag}) {
    const data=['Growth','Overview','Documents',"FAQ's"]
    const onHandleChange=(item)=>{
        setselectedTag(item)
    }
  return (
   <View style={{justifyContent:"center",alignItems:"center"}}>
    <FlatList
     data={data}
     horizontal
     contentContainerStyle={{justifyContent:"space-evenly"}}
     ItemSeparatorComponent={()=>(<View style={{width:10}}></View>)}
     renderItem={({item})=>(
     <TouchableOpacity onPress={()=>{onHandleChange(item)}} style={style( selectedTag===item?lightColors.background.secondary:lightColors.background.primary).container}>
       <Text style={textStyle(15,selectedTag===item?lightColors.text.tertiary:lightColors.text.primary,'bold').text}>{item}</Text>
     </TouchableOpacity>)}
     >

    </FlatList>
   </View>
  )
}
const style=(backgroundColor)=>StyleSheet.create({
    container:{
        backgroundColor,
       
       borderRadius:12,
       borderColor:lightColors.border.primary,
       borderWidth:1,
       justifyContent:"center",
       alignItems:"center",
       paddingVertical:8,
       paddingHorizontal:10,
    }
})
const textStyle=(fontSize,color,fontWeight)=>StyleSheet.create({
   text:{
    fontSize,
    color,
    fontWeight
   }
})