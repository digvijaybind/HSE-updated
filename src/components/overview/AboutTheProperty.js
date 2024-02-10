/*eslint-disable*/
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import VerticalSeperator from '../seperator/VerticalSeperator'

export default function AboutTheProperty() {
    const about=
    "This property is a project by Silva Real Estate And Developers Pvt Ltd in Goa. It is a Under Construction residential project. The project is spread over 0.51 Acres . Launched in April 2022, Marshall Meadows is slated for possession in Aug, 2025. The address of Marshall Meadows is Survey No. 230/6 & 230/7 At Dramapur Village Salcete, Dramapur."
  return (
    <View style={style().card}>
    <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={'About the Property'} color={lightColors.text} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity>
        <Image style={style().icon}  source={require('../../assets/images/question.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity>
        <Image style={style().icon2} source={require('../../assets/images/up.png')}></Image>
     </TouchableOpacity>
     </View>
     <VerticalSeperator height={20}/>
     <CustomText topic={about} color={lightColors.text} fontSize={15} fontWeight={'bold'}/>
     </View>
  )
}
const style=()=>StyleSheet.create({
    card:{
        width:"100%",
        borderRadius:20,
        borderColor:lightColors.button,
        borderWidth:1,
        padding:10,
        paddingBottom:15,
        backgroundColor:'azure'
    },
    topicContainer:{
        flexDirection:'row',
        alignItems:'center',
        
        },
    icon:{
        height:30,
        width:30,
        tintColor:lightColors.button
    },
    headerContainer:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row"
    },
    icon2:{
        height:20,
        width:20,
        tintColor:lightColors.button
    },
    fullWidth:{
        width:"100%"
    },
})