/*eslint-disable*/
import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomText from '../text/CustomText'
import { lightColors } from '../../theme/color'
import VerticalSeperator from '../seperator/VerticalSeperator'

export default function QuestionAnswerCards({question,answer}) {
    const [open, setopen] = useState(0)
    const [ques, setques] = useState('')
    const onHandleChange=(ques)=>{
      if(open===1){
        setopen(0)
        setques('')
      }
      else{
        setopen(1)
        setques(ques)
      }
    }
    return (
   <View style={style().card}>
     <View style={style().innerCard}>
       <CustomText topic={question} color={lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
       <TouchableOpacity onPress={()=>{onHandleChange(question)}}>
       {open===0&&<Image style={style().image} source={require('../../assets/images/plus.png')}/>}
       {open===1&&<Image style={style().image} source={require('../../assets/images/minus.png')}/>}
       </TouchableOpacity>
     </View>
     {open==1&&ques===question&&
     <View>
     <VerticalSeperator  height={10}/>
     <CustomText topic={answer} color={lightColors.text.secondary} fontSize={20} fontWeight={'normal'}/>
     </View>
     }
   </View>
  )
}
const style=()=>StyleSheet.create({
    card:{
        width:"100%",
        paddingBottom:35,
        paddingTop:15,
        paddingHorizontal:15,
        borderRadius:20,
        borderColor:lightColors.border.secondary,
        borderWidth:1,
        backgroundColor:lightColors.background.primary
        
    },
    innerCard:{
        width:"100%",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    },
    image:{
        tintColor:lightColors.icon.primary,
        height:25,
        width:25,
        
    }
})

