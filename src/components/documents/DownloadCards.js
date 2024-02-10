/*eslint-disable*/
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
export default function DownloadCards({title,onPress}) {
  return (
    <View style={style().card}>
    <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={title} color={lightColors.button} fontSize={20} fontWeight={'bold'}/>
     </View>
     <TouchableOpacity onPress={()=>{onPress(title)}}>
        <Image style={style().icon2} source={require('../../assets/images/pdfDownload.png')}></Image>
     </TouchableOpacity>
     </View>
     </View>
  )
}
const style=()=>StyleSheet.create({
    card:{
        width:"100%",
        borderRadius:15,
        borderColor:lightColors.button,
        borderWidth:1,
        padding:15,
        paddingBottom:15,
        backgroundColor:'azure'
    },
    topicContainer:{
        flexDirection:'row',
        alignItems:'center',
        
        },
    headerContainer:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row"
    },
    icon2:{
        height:35,
        width:35,
        tintColor:'black'
    },
    fullWidth:{
        width:"100%"
    },
})