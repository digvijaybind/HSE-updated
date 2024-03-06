/*eslint-disable*/
import React,{useState} from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { darkColors, lightColors } from '../../theme/color'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrency,setecxhangeRate } from '../../redux/actions'
import userReducer from '../../redux/reducers'
import axios from 'axios'
import { Snackbar } from 'react-native-paper'

export default function CurrencyFilter({data,defaultItem,customStyle,customSelectedTextStyle,customPlaceholderStyle,dropdownPosition='down',setloader,darkMode}) {
    const {currency}=useSelector(state=>state.userReducer)
    const dispatch=useDispatch()
    const onChange=async(item)=>{
        if(item.label=='INR'){
            dispatch(setCurrency(item.label))
            dispatch(setecxhangeRate(1))
        }
        else{
            const rate=await getrate(item)
            dispatch(setCurrency(item.label))
            dispatch(setecxhangeRate(rate))
        }
    }
    const getrate=async(item)=>{
        setloader(true)
        const options = {
            method: 'GET',
            url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
            params: {
              from: 'INR',
              to: item.label
            },
            headers: {
              'X-RapidAPI-Key': '014abe6e35msh76ef70851596118p1e000fjsn01ac2f8b6c4d',
              'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              const inrToUsd=1/response.data.rates['INR']
              setloader(false)
              return response.data.rates[item.label]*inrToUsd
          } catch (error) {
            
              console.error(error);
          }
    }
  return (
    <Dropdown
    style={[style(darkMode).dropdown,customStyle]}
    selectedTextStyle={[style().selectedTextStyl,customSelectedTextStyle]}
    placeholderStyle={[style().placeholderStyle,customPlaceholderStyle]}
    data={data}
    placeholder={currency}
    labelField={'label'}
    valueField={'value'}
    itemTextStyle={style().itemTextStyle}
    containerStyle={style().containerStyle}
    value={currency}
    onChange={item=>{
      onChange(item)
    }}
    dropdownPosition={dropdownPosition}
    renderItem={(item)=>(
    <View style={style().renderItemContainer}>
   <Text style={style().renderItemText}>{item.label}</Text>
    </View>
    )}
    ></Dropdown>
  )
}
const style=(darkMode)=>StyleSheet.create({
    dropdown:{
        width:90,
        borderRadius:10,
        borderColor:lightColors.border.secondary,
        borderWidth:1,
        paddingHorizontal:10,
        zIndex:2,
        backgroundColor:darkColors.background.tertiary,
    },
    selectedTextStyle:{
        color:lightColors.text.secondary,   
        fontSize:20,
        fontWeight:"bold"
    },
    placeholderStyle:{
        color:lightColors.text.secondary,
        fontSize:15,
        fontWeight:"bold"
    },
    itemTextStyle:{
        color:lightColors.text.secondary
    },
    containerStyle:{
        borderRadius:10,
        borderColor:lightColors.border.secondary,
        borderWidth:1
    },
    renderItemContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        padding:10
    },
    renderItemText:{
        color:lightColors.text.secondary,
        fontSize:15,
        fontWeight:"bold"
    }
})