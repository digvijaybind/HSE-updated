/*eslint-disable*/
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'

export default function AdditionalInformation() {
  return (
    <View style={style().card}>
    <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={'Additional Information'} color={lightColors.text} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity>
        <Image style={style().icon}  source={require('../../assets/images/question.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity>
        <Image style={style().icon2} source={require('../../assets/images/down.png')}></Image>
     </TouchableOpacity>
     </View>
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