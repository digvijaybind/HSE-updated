/*eslint-disable*/
import React from 'react'
import { View,StyleSheet } from 'react-native'
import { lightColors } from '../../../theme/color'
import { Vi } from 'react-flags-select'
import CustomText from '../../text/CustomText'

export default function Investments({darkMode,darkColors}) {
  return (
    <View style={style().topContainer}>
    <View style={style().container}>
    <View style={style().card}>
        <CustomText topic={'INR 0000.00'} fontSize={20} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontWeight={'bold'}/>
        <CustomText topic={'Your annual investment limit'} fontSize={10} color={lightColors.text.grey} fontWeight={'normal'}/>
    </View>
     <View style={style().card}>
     <CustomText topic={'INR 0000.00'} fontSize={20} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontWeight={'bold'}/>
     <CustomText topic={'Investment made YTD'} fontSize={10} color={lightColors.text.grey} fontWeight={'normal'}/>
     </View>
    </View>
   <View style={style().bottomContainer}>
    <CustomText topic={'INR 0000.00'} fontSize={20} color={lightColors.text.tertiary} fontWeight={"bold"}/>
    <CustomText topic={'Remaining investment limit for this year'} fontSize={12} color={lightColors.text.tertiary} fontWeight={"normal"}/>
   </View>
    </View>
  )
}
const style=()=>StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    card:{
        width:'49%',
        borderRadius:20,
        borderColor:lightColors.border.primary,
        borderWidth:1,
        padding:15
    },
    topContainer:{
        width:"100%",
        gap:15
    },
    bottomContainer:{
        width:"100%",
        backgroundColor:lightColors.background.secondary,
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:10
    }
})
