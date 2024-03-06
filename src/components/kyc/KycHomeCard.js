/*eslint-disable*/
import React from 'react'
import {  StyleSheet, TouchableOpacity } from 'react-native'
import { darkColors, lightColors } from '../../theme/color'
import ProgressShow from '../loader/ProgressShow'
import CustomText from '../text/CustomText'

export default function KycHomeCard({navigation,darkMode}) {
  const onHandleChange=()=>{
     navigation.navigate('kyc')
  }
  return (
    <TouchableOpacity onPress={onHandleChange} style={style(darkMode).container}>
       <CustomText topic={'You are almost there !'} fontSize={15} fontWeight={'bold'} color={lightColors.text.primary} />
       <ProgressShow progress={3}/>
       <CustomText topic={'Tap to complete registration'} fontSize={15} fontWeight={'bold'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} />
       
    </TouchableOpacity>
  )
}
const style=(darkMode)=>StyleSheet.create({
    container:{
       justifyContent:'space-evenly',
       alignItems:'center',
       width:"100%",
       borderRadius:20,
       borderWidth:1.5,
       borderColor:lightColors.border.primary,
       paddingHorizontal:15,
       height:80,
       backgroundColor:darkMode?'#5c5a5a':lightColors.background.primary
    },
})
