/*eslint-disable*/
import React from 'react'
import { StyleSheet, View ,Image} from 'react-native'
import EmptyContainer from '../../container/EmptyContainer'
import CustomText from '../../text/CustomText'
import { lightColors } from '../../../theme/color'

export default function PortfolioValue({darkMode,darkColors}) {
    const date=new Date()
    const dateJoined=`16 Aug 2023`
    const currentDate=`${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
    const elements=(
    <View style={style().card}>
    <View>
        <CustomText topic={'Portfolio Value'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
        <CustomText topic={dateJoined +'-'+ currentDate} color={lightColors.text.grey} fontSize={13} fontWeight={'normal'}/>
        </View>
        <View>
            <Image source={require('../../../assets/images/defaultGraph.png')}/>
        </View>
    </View>
    )
  return (
   <EmptyContainer elements={elements}/>
  )
}
const style=()=>StyleSheet.create({
    card:{
        gap:10
    }
})
