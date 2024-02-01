/*eslint-disable*/
import React from 'react'
import {  TouchableOpacity, View ,Image, StyleSheet} from 'react-native'
import LocationFilter from './LocationFilter'
import CurrencyFilter from './CurrencyFilter'

export default function OtherFilters() {
  return (
    <View style={style().container}>
        <TouchableOpacity>
            <Image source={require('../../assets/images/map.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../assets/images/filter.png')}></Image>
        </TouchableOpacity>
        <CurrencyFilter/>
    </View>
  )
}
const style=()=>StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"50%"
    }
})