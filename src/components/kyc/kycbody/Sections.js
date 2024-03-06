/*eslint-disable*/
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import CustomText from '../../text/CustomText'
import { lightColors } from '../../../theme/color'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Sections({navigation,goTo,content}) {
    const go=()=>{
      navigation.navigate(goTo)
    }
  return (
     <TouchableOpacity onPress={go} style={style().container}>
        <CustomText fontSize={20} topic={content} color={lightColors.text.primary} fontWeight={'bold'} />
           <Image tintColor={lightColors.icon.primary} source={require('../../../assets/images/right-arrow.png')}/>
     </TouchableOpacity>
  )
}
const style=()=>StyleSheet.create({
    container:{
        width:"100%",
        padding:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderColor:lightColors.border.primary,
        borderWidth:2,
        borderRadius:15
    }
})
