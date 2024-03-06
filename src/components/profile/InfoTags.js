/*eslint-disable*/
import React from 'react'
import { View ,TouchableOpacity,StyleSheet} from 'react-native'
import CustomText from '../text/CustomText'
import { lightColors } from '../../theme/color'

export default function InfoTags({infoType,setinfoType,navigation}) {
    const onHandleChange=(item)=>{
        if(item==='KYC Verification'){
           navigation.navigate('kyc')
        }else{
            setinfoType(item)
        }
    }
  return (
    <View style={styles().infoTypeContainer}>
        <TouchableOpacity 
        onPress={()=>{onHandleChange('Personal Info')}}
        style={
            styles
            (infoType==='Personal Info'?lightColors.background.secondary:lightColors.background.primary
        ,infoType==='Personal Info'?lightColors.border.primary:lightColors.border.quaternary).infoTypeButton}>
          <CustomText topic={'Personal Info'} color={infoType==='Personal Info'?lightColors.text.tertiary:lightColors.text.quaternary} fontSize={15} fontWeight={'normal'} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{onHandleChange('Address Info')}}
        style={
            styles
            (infoType==='Address Info'?lightColors.background.secondary:lightColors.background.primary
        ,infoType==='Address Info'?lightColors.border.primary:lightColors.border.quaternary).infoTypeButton}>
          <CustomText topic={'Address Info'} color={infoType==='Address Info'?lightColors.text.tertiary:lightColors.text.quaternary} fontSize={15} fontWeight={'normal'} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{onHandleChange('KYC Verification')}}
        style={
            styles
            (infoType==='KYC Verification'?lightColors.background.secondary:lightColors.background.primary
        ,infoType==='KYC Verification'?lightColors.border.primary:lightColors.border.quaternary).infoTypeButton}>
          <CustomText topic={'KYC Verification'} color={infoType==='KYC Verification'?lightColors.text.tertiary:lightColors.text.quaternary} fontSize={15} fontWeight={'normal'} />
        </TouchableOpacity>
      </View> 
  )
}
const styles=(backgroundColor,borderColor)=>StyleSheet.create({
    infoTypeContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  infoTypeButton:{
    backgroundColor,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    borderWidth:1,
    borderColor,
  },
  container:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
  }
  })
  