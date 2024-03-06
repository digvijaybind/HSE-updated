/*eslint-disable*/
import React,{useState} from 'react'
import { StyleSheet, View,TouchableOpacity,Image, Dimensions } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import VerticalSeperator from '../seperator/VerticalSeperator'
import {color,data,price,totalAmount} from '../data/assetCosting'
import AssetPriceDisplay from './AssetPriceDisplay'
import DoughnutPieChart from '../chart/DoughnutPieChart'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import userReducer from '../../redux/reducers'
export default function AssetCosting() {
    const {rate,currency}=useSelector(state=>state.userReducer)
    const widthandHeight=Dimensions.get('window').width-60
    const [open, setopen] = useState(0)
    const handleChange=()=>{   
        if(open==1){
            setopen(0)
        }else{
            setopen(1)
        }
    } 
    
    
  return (
<View style={style().card}>
        <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={'Asset Costing'} color={lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity>
        <Image style={style().icon}  source={require('../../assets/images/question.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity onPress={handleChange}>
        {open==1&&<Image style={style().icon2} source={require('../../assets/images/up.png')}></Image>}
        {open==0&&<Image style={style().icon2} source={require('../../assets/images/down.png')}></Image>}   
     </TouchableOpacity>
     </View>
     <VerticalSeperator height={10}/>
     {open==1&&<View>
     <View style={[style().center,style().fullWidth]}>
       <DoughnutPieChart data={price} colors={color} />
       <View style={style().textContainer}>
         <CustomText topic={'Asset Value'} fontSize={25} fontWeight={'bold'} color={lightColors.text.grey}/>
       </View>
     </View>
     {data&&data.map((item,index)=><AssetPriceDisplay rate={rate} currency={currency} item={item} key={index}/>)}
     <VerticalSeperator height={20}/>
     <View style={style().line}></View>
     <View style={style().total}>
       <CustomText topic={'TOTAL VALUE'} fontSize={20} fontWeight={'bold'} color={lightColors.text.secondary}/>
       <CustomText topic={`${(+totalAmount*rate).toLocaleString('en-Us',{style:"currency",currency})}`} fontSize={20} fontWeight={'bold'} color={lightColors.text.secondary}/>
     </View>
     </View>}
     </View>
  )
}
const style=()=>StyleSheet.create({
    card:{
        width:"100%",
        borderRadius:20,
        borderColor:lightColors.border.primary,
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
        tintColor:lightColors.icon.primary
    },
    headerContainer:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row"
    },
    icon2:{
        height:20,
        width:20,
        tintColor:lightColors.icon.primary
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
    },
    textContainer:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // top: '50%',
        // left: '50%',
        // transform: [{ translateX: -15 }, { translateY: -((Dimensions.get('window').width-60)/4) }],
    }
})
