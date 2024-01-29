/*eslint-disable*/
import React from 'react'
import { View,StyleSheet, Image,Text } from 'react-native'
import { lightColors } from '../../theme/color'
import Button from '../button/Button'

export default function VerticalCards() {
  return (
    <View style={style().container}>
      <View style={style().innercontainer}>
        <Image style={style().image} source={{uri:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg'}}/>
        <View>
            <Text style={style(20,'black','bold').text}>₹ 3,80,00,000</Text>
            <Text style={style(12,'black','normal').text}>Marshall Meadows</Text>
            <Text style={style(12,'black','normal').text}>Dramapur village, Colva</Text>
            <Text style={style(14,lightColors.button,'bold').text}>2% Invested</Text>
            <Button style={{width:"100%"}} title={'Invest now'} backgroundColor={lightColors.button} color={'white'}></Button>
        </View>
        <View style={style().rating}>
          <Image tintColor={lightColors.button} source={require('../../assets/images/rating.png')}></Image>
          <Text style={style(15,lightColors.button,'bold').text}>4.7</Text>
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
        borderColor:lightColors.border,
        padding:10,
        borderWidth:1,
        flexDirection:"row",
        justifyContent:"space-between"  
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
        borderColor:lightColors.border,
        borderWidth:1,
        alignItems:"center",
        justifyContent:'space-evenly',
        borderRadius:10,
        flexDirection:'row',
        height:25,
        paddingHorizontal:5
      },
})
