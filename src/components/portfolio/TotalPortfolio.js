/*eslint-disable*/
import React from 'react'
import { View ,StyleSheet} from 'react-native'
import EmptyContainer from '../container/EmptyContainer'
import CustomText from '../text/CustomText'
import { lightColors } from '../../theme/color'
import PortfolioBreakUp from './PortfolioBreakUp'
import VerticalSeperator from '../seperator/VerticalSeperator'
export default function TotalPortfolio({darkMode,darkColors}) {
    const totalPortfolioValue=0.00
    const elements = (
        <View style={style().innercontainer}>
            <CustomText topic={'Total Portfolio Value'} fontSize={20} fontWeight={'bold'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary}/>
            <View style={style().endContainer}>
             <CustomText topic={`INR  ${totalPortfolioValue.toLocaleString()}`} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={18} fontWeight={'bold'}/>
            </View>
        </View>
    )
  return (
    <View>
        <EmptyContainer
          elements={elements}
        />
        <VerticalSeperator height={15}/>
        <View style={{width:"100%"}}>
        <PortfolioBreakUp darkColors={darkColors} darkMode={darkMode}/>
        </View> 
    </View>
  )
}
const style=()=>StyleSheet.create({
    innercontainer:{
        width:"100%",

    },
    endContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})