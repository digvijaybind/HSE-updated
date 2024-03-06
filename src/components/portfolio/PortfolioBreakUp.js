/*eslint-disable*/
import React from 'react'
import { View ,StyleSheet} from 'react-native'
import EmptyContainer from '../container/EmptyContainer'
import CustomText from '../text/CustomText'
import { lightColors } from '../../theme/color'
import { Link } from '@react-navigation/native'
export default function PortfolioBreakUp({darkMode,darkColors}) {
    const breakUp={
        totalRent:0.00,
        rentRecievedForCurrentMonth:0.00,
        activeInvestments:0
    }
    const elements = (
        <View style={{width:"100%"}}>
            <View style={style().innercontainer}>
                <CustomText topic={'• Rent total as of today :'} fontSize={17} fontWeight={'bold'} color={lightColors.text.primary}/>
                <View style={style().endContainer}>
                <CustomText topic={`INR  ${breakUp.totalRent.toLocaleString()}`} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={18} fontWeight={'bold'}/>
                </View>
            </View>
            <View style={style().innercontainer}>
                <CustomText topic={'• Rent for Current Month Recieved :'} fontSize={17} fontWeight={'bold'} color={lightColors.text.primary}/>
                <View style={style().endContainer}>
                <CustomText topic={`INR  ${breakUp.rentRecievedForCurrentMonth.toLocaleString()}`} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={18} fontWeight={'bold'}/>
                </View>
            </View>
            <View style={style().innercontainer}>
                <CustomText topic={'• Active Investments :'} fontSize={17} fontWeight={'bold'} color={lightColors.text.primary}/>
                <View style={style().endContainer}>
                <CustomText topic={`${breakUp.activeInvestments.toLocaleString()}`} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={18} fontWeight={'bold'}>
                </CustomText>
                <Link to={'/portfolio'} style={style().linkStyle}>View</Link>
                </View>
            </View>
        </View>
    )
  return (
    <EmptyContainer elements={elements} />
  )
}
const style=()=>StyleSheet.create({
    innercontainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
        alignItems:"center"
    },
    endContainer:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:'row'
    },
    linkStyle:{
        color:lightColors.text.primary,
        fontSize:16,
        fontWeight:'normal',
        textDecorationColor:lightColors.text.primary,
        textDecorationStyle:'solid',
        textDecorationLine:'underline'
    }

})
