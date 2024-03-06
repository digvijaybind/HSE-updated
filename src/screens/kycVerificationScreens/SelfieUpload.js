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
    <View style={style().innerContainer}>
       <CustomText topic={'Verify your Identity !'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={30} fontWeight={'bold'}/>
    <View style={style().container2}>
            <Image tintColor={lightColors.icon.primary} source={require('../../assets/images/facial-recognition.png')}/>
            <CustomText customStyle={{textAlign:'center'}} color={lightColors.text.grey} fontWeight={"normal"} fontSize={18} topic={'Take a photo of your face using front camera'}/>
      </View>
      <Button title={'Start'} color={lightColors.text.tertiary} backgroundColor={lightColors.background.secondary}/>
    </View>
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
    container2:{
        height:"80%",
         width:"100%",
         justifyContent:"center",
         alignItems:'center',
         paddingHorizontal:20
    }
})
