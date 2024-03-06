/* eslint-disable */
import React,{useState} from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { darkColors, lightColors } from '../../../theme/color'
import { TextInput ,PaperProvider} from 'react-native-paper'
import { useSelector } from 'react-redux'
import userReducer from '../../../redux/reducers'

export default function ({label,icon,editable,value=''}) {
    const screenWidth = Dimensions.get('window').width;
    const {darkMode}=useSelector(state=>state.userReducer)
  return (
    <>
 {darkMode&&
 <PaperProvider>
    <TextInput 
    mode='outlined' 
    value={value}   
    label={label}
    textColor='white'
    style={style(screenWidth).input}
    outlineColor={lightColors.background.primary}
     activeOutlineColor={lightColors.border.primary}
     outlineStyle={{borderWidth:2}}
    inlineImageLeft={icon}
    inlineImagePadding={10}
    editable={editable}
    theme={{colors:{primary:'black'}}}
    underlineColor='black'
  />
  </PaperProvider>  
  }
  {!darkMode&&
    <TextInput 
    mode='outlined' 
    value={value}   
    label={label}
    textColor='black'
    style={style(screenWidth).input}
    outlineColor={lightColors.border.secondary}
     activeOutlineColor={lightColors.border.primary}
     outlineStyle={{borderWidth:2}}
    inlineImageLeft={icon}
    inlineImagePadding={10}
    editable={editable}
    
    underlineColor='black'
  />
  }
  </>
  )
}
const style=(screenWidth)=>StyleSheet.create({
    input:{
      fontSize:screenWidth*0.027,
      
    }
})