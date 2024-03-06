/*eslint-disable*/
import React from 'react'
import { View,StyleSheet, Image,Text } from 'react-native'
import { lightColors } from '../../theme/color'
import Button from '../button/Button'
export default function VerticalCards({data,currency,rate}) {
  return (
    <View style={style().container}>
      <View style={style().innercontainer}>
        <Image style={style().image} source={{uri:data.image}}/>
        <View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1}}>
        <Text style={style(15,lightColors.text.secondary,'bold').text}>{(data.price*rate).toLocaleString('en-US', { style: 'currency', currency: currency })}</Text>
        <View style={style().rating}>
          <Image tintColor={lightColors.icon.primary} source={require('../../assets/images/rating.png')}></Image>
          <Text style={style(15,lightColors.text.primary,'bold').text}>{data.rating}</Text>
          </View>
        </View>
        <View style={{flex:1,justifyContent:"space-between"}}>
            <Text style={style(12,lightColors.text.secondary,'normal').text}>{data.name}</Text>
            <Text style={style(12,lightColors.text.secondary,'normal').text}>{data.location}</Text>
            <Text style={style(14,lightColors.text.primary,'bold').text}>{data.invested}% Invested</Text>
            <Button style={{width:"100%"}} title={'Invest now'} backgroundColor={lightColors.button.secondary} color={'white'}></Button>
        </View>
        </View>
        

      </View>
    </View>
  )
}
const style=(fontSize,color,fontWeight)=>StyleSheet.create({
    container:{
        width:"100%",
        paddingHorizontal:20
    },
    innercontainer:{
        borderRadius:20,
        width:"100%",
        borderColor:lightColors.border.primary,
        padding:5,
        borderWidth:1,
        flexDirection:"row",
        justifyContent:"space-evenly" ,
        backgroundColor:lightColors.background.primary,
    },
    image:{
        height:130,
        aspectRatio:1.1,
        borderRadius:20,
        marginRight:4
    },
    text:{
        fontWeight,
        fontSize,
        color
    },
    rating:{
        borderColor:lightColors.border.primary,
        borderWidth:1,
        alignItems:"center",
        justifyContent:'space-evenly',
        borderRadius:10,
        flexDirection:'row',
        height:25,
        paddingHorizontal:5,
      },
})
