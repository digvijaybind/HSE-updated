/*eslint-disable*/
import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../text/CustomText'
import { darkColors, lightColors } from '../../theme/color'

export default function KycHeader({darkMode}) {
  return (
   <View>
    <View style={style().container1}>
        <CustomText topic={'KYC Verification'} fontSize={30} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontWeight={'bold'} />
        <View style={style().innerContainer}>
             <CustomText fontSize={15} color={lightColors.text.grey} topic={'Instructions: To ensure the security of your investments, we need to verify your identity.Click & update the Documents'}/>
        </View>
    </View>
   </View>
  )
}
const style=()=>StyleSheet.create({
    container1:{
        width:"100%",
        justifyContent:'center',
        alignItems:"center",
        gap:15
    },
    innerContainer:{
        width:"80%",
        justifyContent:"center",
        alignItems:"center"
    }
})