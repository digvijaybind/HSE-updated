/*eslint-disable*/
import { listenerCount } from 'npm'
import React,{useState} from 'react'
import { StyleSheet, View ,Text,Image, TouchableOpacity} from 'react-native'
import { lightColors } from '../../theme/color'
import ProgressShow from '../loader/ProgressShow'
import VerticalSeperator from '../seperator/VerticalSeperator'
import CustomText from '../text/CustomText'

export default function InvestmentOverview() {
    const [open, setopen] = useState(0)
    const data={
        ageGrowth:"20.31",
        totalTokens:2030,
        LockIn:2,
        tokensLeft:2000,
        invested:2
    }
  const handleChange=()=>{
    if(open==1){
        setopen(0)
    }
    else{
        setopen(1)
    }
  }
  return (
   <View style={style().card}>
     <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={'Investment Overview'} color={lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
         <TouchableOpacity>
        <Image style={style().icon}  source={require('../../assets/images/info.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity onPress={handleChange}>
        {open==1&&<Image style={style().icon2} source={require('../../assets/images/up.png')}></Image>}
        {open==0&&<Image style={style().icon2} source={require('../../assets/images/down.png')}></Image>}
     </TouchableOpacity>
     </View>
     {open==1&&
        <View>
     <View style={style().middleContainer}>
      <View style={style().innerMiddleContainer}>
      <View style={[style().center,style().border]}>
        <Text style={textStyle(12,lightColors.text.primary,'normal').text}>
            Age Growth
        </Text>
        <Text style={[textStyle(15,lightColors.text.secondary,'bold').text]}>
        <Image style={{height:20,width:20}}  source={require('../../assets/images/triangle.png')}></Image>
            {data.ageGrowth} %
        </Text>
        </View>
        <View style={[style().center,style().border]}>
        <Text style={textStyle(12,lightColors.text.primary,'normal').text}>
           Total Tokens
        </Text>
        <Text style={[textStyle(15,lightColors.text.secondary,'bold').text]}>{data.totalTokens.toLocaleString()}
        </Text>
        </View>
        <View style={style().center}>
        <Text style={textStyle(12,lightColors.text.primary,'normal').text}>
            Lock in
        </Text>
        <Text style={[textStyle(15,lightColors.text.secondary,'bold').text]}>{data.LockIn} Years
        </Text>
        </View>
      </View>
     </View>
     <View style={style().bottomContainer} >
        <View style={style().loaderContainer}>
         <View  style={style(2).insideLoader}></View>
        </View>
        <VerticalSeperator height={5}/>
        <View style={style().bottomEndContainer}>
       <Text style={textStyle(13,lightColors.text.primary,'normal').text}>{data.invested}% invested</Text>
       <Text style={textStyle(13,lightColors.text.primary,'normal').text}>{data.tokensLeft.toLocaleString()} Tokens left</Text>
        </View>
     </View>
     </View>}
   </View>
  )
}
const style=(invested)=>StyleSheet.create({
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
    middleContainer:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    innerMiddleContainer:{
    flexDirection:'row',
    justifyContent:"space-evenly",
    width:"100%",
    alignItems:"center"
    },
    center:{
        justifyContent:"center",
        alignItems:"center"
    },
    border:{
        borderColor:lightColors.border.secondary,
        borderRightWidth:1,
        paddingRight:10
    },
    bottomContainer:{
        padding:10,
        justifyContent:"space-between"
    },
    loaderContainer:{
        width:"100%",
        backgroundColor:lightColors.background.primary,
        borderRadius:25,
        height:5
    },
    insideLoader:{
        backgroundColor:lightColors.background.secondary,
        width:`${invested}%`,
        height:5,
        borderRadius:25
    },
    bottomEndContainer:{
        justifyContent:"space-between",
        width:"100%",
        flexDirection:"row"
    }
})
const textStyle=(fontSize,color,fontWeight)=>StyleSheet.create({
 text:{
    fontSize,
    color,
    fontWeight
 }
})