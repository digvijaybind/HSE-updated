/*eslint-disable*/
import React from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View,Image } from 'react-native'
import { darkColors, lightColors } from '../../theme/color'
import CustomText from '../../components/text/CustomText'
import Button from '../../components/button/Button'
import { useSelector } from 'react-redux'
import userReducer from '../../redux/reducers'

export default function SelfieUpload({navigation}) {
    const {darkMode}=useSelector(state=>state.userReducer)
  return (
 <View style={style(darkMode).container} >
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={style().padding}>
       <Image tintColor={lightColors.icon.primary} source={require('../../assets/images/back.png')}/>
    </TouchableOpacity>
    
 </View>
  )
}

const style=(darkMode)=>StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
        paddingBottom:30
    },
    padding:{
        padding:15
    },
    innerContainer:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flex:1
    },

})

