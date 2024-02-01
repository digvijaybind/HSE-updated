/*eslint-disable*/
import React,{useState} from 'react'
import { View,Text,StyleSheet } from 'react-native'
import CountryFlag from 'react-native-country-flag'
import { Dropdown } from 'react-native-element-dropdown'

export default function CurrencyFilter() {
    const [currency, setcurrency] = useState('INR')
  return (
    <Dropdown
    style={style().dropdown}
    selectedTextStyle={style().selectedTextStyle}
    placeholderStyle={style().placeholderStyle}
    data={[{label:'INR',value:'inr'},{label:'AED',value:'aed'}]}
    placeholder={currency}
    labelField={'label'}
    valueField={'value'}
    itemTextStyle={style().itemTextStyle}
    containerStyle={style().containerStyle}
    value={currency}
    onChange={item=>{
      setcurrency(item.label)
    }}
    renderItem={(item)=>(
    <View style={style().renderItemContainer}>
   <Text style={style().renderItemText}>{item.label}</Text>
    </View>
    )}
    ></Dropdown>
  )
}
const style=()=>StyleSheet.create({
    dropdown:{
        maxWidth:90,
        borderRadius:10,
        borderColor:"black",
        borderWidth:1,
        paddingHorizontal:10,
        minWidth:90,
    },
    selectedTextStyle:{
        color:"black",
        fontSize:20,
        fontWeight:"bold"
    },
    placeholderStyle:{
        color:"black",
        fontSize:15,
        fontWeight:"bold"
    },
    itemTextStyle:{
        color:"black"
    },
    containerStyle:{
        borderRadius:10,
        borderColor:"black",
        borderWidth:1
    },
    renderItemContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:10
    },
    renderItemText:{
        color:'black',
        fontSize:15,
        fontWeight:"bold"
    }
})