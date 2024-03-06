/*eslint-disable*/
import React from 'react'
import EmptyContainer from '../../container/EmptyContainer'
import { Image, StyleSheet, View } from 'react-native'
import CustomText from '../../text/CustomText'
import { lightColors } from '../../../theme/color'
import DoughnutPieChart from '../../chart/DoughnutPieChart'

export default function PortfolioAllocation({darkMode,darkColors}) {
    const elements=(
      <>
    <View style={style.header}>
       <CustomText color={darkMode?darkColors.text.secondary:lightColors.text.secondary} topic={'Portfolio Allocation'} fontSize={20} fontWeight={"bold"} />
       <Image style={style.icon} source={require('../../../assets/images/question.png')}/>
    </View>
    <View style={style.container}>
    <DoughnutPieChart data={[1]} colors={['lightgray']}/>
    <View style={style.textContainer}>
         <CustomText topic={'Your Portfolio'} fontSize={25} fontWeight={'normal'} color={lightColors.text.grey}/>
         <CustomText topic={'100 %'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={35} fontWeight={'bold'}/>
       </View>
      </View>
    </>
    
    )
  return (
   <EmptyContainer elements={elements}/>
  )
}
const style=StyleSheet.create({
     header:{
      flexDirection:"row",
      alignItems:"centere",
      justifyContent:"flex-start",
},
icon:{
    height:30,
    width:30,
    tintColor:lightColors.icon.primary  
  },
  textContainer:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // top: '50%',
    // left: '50%',
    // transform: [{ translateX: -15 }, { translateY: -((Dimensions.get('window').width-60)/4) }],
},
container:{
  alignItems:'center',
  justifyContent:"center",
  width:"100%"
}
})