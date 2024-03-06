/*eslint-disable*/
import React from 'react'
import CustomText from '../text/CustomText'
import { lightColors } from '../../theme/color'
import { StyleSheet, View } from 'react-native'

export default function ProgressShow() {
  return (
   <View style={styles().container} >
    <CustomText topic={'Complete your Profile'} fontSize={16} fontWeight={'bold'} color={lightColors.text.primary}/>
    <View style={styles().progressContainer}>
        <View style={styles(3).progressInnerContainer}/>
    </View>
    
   </View>
  )
}
const styles=(width)=>StyleSheet.create({
    container:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        paddingHorizontal:20
    },
   progressContainer:{
         width:"100%",
         height:8,
         backgroundColor:lightColors.background.quaternary,
         borderRadius:20,

    },
    progressInnerContainer:{
        width:`${width*10}%`,
        height:8,
        backgroundColor:lightColors.background.secondary,
        borderRadius:20
    }
   
})
