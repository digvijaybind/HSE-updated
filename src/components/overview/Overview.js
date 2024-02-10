/*eslint-disable */
import React from 'react'
import { View } from 'react-native'
import AboutTheProperty from './AboutTheProperty'
import Amenities from './Amenities'
import VerticalSeperator from '../seperator/VerticalSeperator'

export default function Overview() {
  return (
   <View>
    <AboutTheProperty/>
    <VerticalSeperator height={10}/>
    <Amenities/>
   </View>
  )
}
