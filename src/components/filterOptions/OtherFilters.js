/*eslint-disable*/
import React from 'react'
import {  TouchableOpacity, View ,Image, StyleSheet} from 'react-native'
import LocationFilter from './LocationFilter'
import CurrencyFilter from './CurrencyFilter'
import { darkColors, lightColors } from '../../theme/color'

export default function OtherFilters({setfilterOpen,setloader,darkMode}) {
    const currencies=[{label:'INR',value:'inr'},{label:'AED',value:'aed'}]
  return (
    <View style={style().container}>
        <TouchableOpacity >
            <Image style={style(darkMode).icon} source={require('../../assets/images/map.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setfilterOpen(true)}}>
            <Image style={style(darkMode).icon} source={require('../../assets/images/filter.png')}></Image>
        </TouchableOpacity>
        <CurrencyFilter darkMode={darkMode} setloader={setloader} data={currencies} defaultItem={'INR'}/>
    </View>
  )
}
const style=(darkMode)=>StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"50%"
    },
    icon:{
        tintColor:darkMode?darkColors.icon.tertiary:lightColors.icon.secondary,
    }
})