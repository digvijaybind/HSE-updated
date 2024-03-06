/*eslint-disable*/
import React from 'react'
import { View,StyleSheet } from 'react-native'
import CustomText from '../text/CustomText'
import { Link } from '@react-navigation/native'
import { lightColors } from '../../theme/color'

export default function ScreenNamesContainer() {
  return (
    <View>
      <Link children={()=>(<CustomText topic={'My Profile'} color={lightColors.text.primary}/>)} to={'home'}>My Profile</Link>
    </View>
  )
}
const styles = StyleSheet.create({
    route:{
        color:lightColors.text.primary,
        fontSize:15,
        fontWeight:'normal',
    }
})