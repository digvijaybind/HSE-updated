/* eslint-disable*/
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { lightColors } from '../../theme/color'

export default function EmptyContainer({elements,padding=10}) {
  return (
    <View style={[style().card,{padding}]}>
    {elements}
    </View>
  )
}
const style=()=>StyleSheet.create({
    card:{
        width:"100%",
        borderRadius:20,
        borderColor:lightColors.border.primary,
        borderWidth:1,
        paddingBottom:15,
    },
})
