/*eslint-disable*/
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { darkColors, lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import { useSelector } from 'react-redux'
import userReducer from '../../redux/reducers'

export default function Introduction() {
    const data={name:"CHANDLER BING"}
    const {darkMode}=useSelector(state=>state.userReducer)  
  return (
    <View style={styles().container}>
        <View style={styles(darkMode).circle}>
            <View style={styles().innercircle}/>
        </View>
        <View style={styles().gap}>
            <CustomText topic={data.name} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={20} fontWeight={"bold"}/>
            <View style={styles().innerContainer}>
            <CustomText topic={"Click here to edit Profile picture "} color={lightColors.text.primary} fontSize={12} fontWeight={"bold"}/>
            <Image style={styles().image} source={require('../../assets/images/edit.png')}/>
            </View>
        </View>
    </View>
  )
}

const styles=(darkMode)=>StyleSheet.create({
   container:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:12
   },
   circle:{
    height:140,
    aspectRatio:1,
    borderRadius:100,
    backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
    padding:5,
    marginTop:-40,  
    justifyContent:"center",
    alignItems:"center",
},
innercircle:{
    height:"100%",
    width:"100%",
    backgroundColor:lightColors.background.secondary,
    borderRadius:100, 
},
gap:{
    gap:15
},
image:{
    height:20,
    width:20
},
innerContainer:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",    
}
})