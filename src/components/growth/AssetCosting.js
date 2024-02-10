/*eslint-disable*/
import React from 'react'
import { StyleSheet, View,TouchableOpacity,Image, FlatList } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import VerticalSeperator from '../seperator/VerticalSeperator'
import Chart from '../chart/Chart'
import { data, totalAmount } from '../data/assetCosting'
import HorizontalSeperator from '../seperator/HorizontalSeperator'
import AssetPriceDisplay from './AssetPriceDisplay'
export default function AssetCosting() {
    
  return (
<View style={style().card}>
          <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={'Asset Costing'} color={lightColors.text} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity>
        <Image style={style().icon}  source={require('../../assets/images/question.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity>
        <Image style={style().icon2} source={require('../../assets/images/up.png')}></Image>
     </TouchableOpacity>
     </View>
     <VerticalSeperator height={10}/>
     <View style={[style().center,style().fullWidth]}>
     <Chart/>
     </View>
     {data&&data.map((item,index)=><AssetPriceDisplay item={item} key={index}/>)}
     <VerticalSeperator height={20}/>
     <View style={style().line}></View>
     <View style={style().total}>
       <CustomText topic={'TOTAL VALUE'} fontSize={20} fontWeight={'bold'} color={lightColors.text}/>
       <CustomText topic={`₹ ${totalAmount.toLocaleString()}`} fontSize={20} fontWeight={'bold'} color={lightColors.text}/>
     </View>
     </View>
  )
}
const style=()=>StyleSheet.create({
    card:{
        width:"100%",
        borderRadius:20,
        borderColor:lightColors.button,
        borderWidth:1,
        padding:10,
        paddingBottom:15,
        backgroundColor:'azure'
    },
    topicContainer:{
        flexDirection:'row',
        alignItems:'center',
        
        },
    icon:{
        height:30,
        width:30,
        tintColor:lightColors.button
    },
    headerContainer:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row"
    },
    icon2:{
        height:20,
        width:20,
        tintColor:lightColors.button
    },
    fullWidth:{
        width:"100%"
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:"black"
    },
    total:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})
