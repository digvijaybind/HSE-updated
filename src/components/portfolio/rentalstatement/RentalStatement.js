/*eslint-disable*/
import React from 'react'
import { StyleSheet, View } from 'react-native'
import EmptyContainer from '../../container/EmptyContainer'
import CustomText from '../../text/CustomText'
import { lightColors } from '../../../theme/color'

export default function RentalStatement({darkMode,darkColors}) {
    const elements=(
        <View style={style().card}>
            <CustomText topic={'Rental Statement'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
            <View style={style().center}>
                <CustomText topic={'No rental statement found'} color={lightColors.text.grey} fontSize={15} fontWeight={'normal'}/>
            </View>  
        </View>
    )
  return (
<EmptyContainer elements={elements}/>
  )
}
const style=()=>StyleSheet.create({
    center:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    card:{
        gap:15
    }
})