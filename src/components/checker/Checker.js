/*eslint-disable*/
import React from 'react'
import { StyleSheet,TouchableOpacity,View } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
export default function Checker({checked,setchecked}) {
    const onHandleChange=()=>{
       setchecked(!checked)
    }
  return (
    <View style={style().container}>
       <TouchableOpacity onPress={onHandleChange} style={style().checker}>
          {checked&&<View style={style().innerchecker}/>}
       </TouchableOpacity>
       <CustomText topic={'I hereby give consent to access my documents for verification and given data is correct according to me. *'} color={lightColors.text.grey} fontSize={12} fontWeight={'normal'}/>
    </View>
  )
}
const style=()=>StyleSheet.create({
   container:{
      flexDirection:'row',
      gap:5,
      justifyContent:"center",
      alignItems:'center',
      width:"100%",
      padding:15
   },
   checker:{
    padding:2,
    borderRadius:100,
    height:25,
    width:25,
    borderColor:lightColors.border.quaternary,
    borderWidth:1
   },
   innerchecker:{
       height:"100%",
       width:"100%",
       borderRadius:100,
       borderColor:lightColors.border.primary,
       borderWidth:5
   }
})
