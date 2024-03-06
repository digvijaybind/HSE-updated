/*eslint-disable*/
import React,{useState} from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'

 const Container=({title,jsxElement,imageIcon,onPress})=>{
    const [open, setopen] = useState(0)
    const handleChange=()=>{ 
        console.log(jsxElement)  
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
        <CustomText topic={title} color={lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity>
        {imageIcon&&<Image style={style().icon}  source={imageIcon}></Image>}
        </TouchableOpacity>
     </View>
     <TouchableOpacity onPress={handleChange}>
        {open==0&&<Image style={style().icon2} source={require('../../assets/images/down.png')}></Image>}
        {open==1&&<Image style={style().icon2} source={require('../../assets/images/up.png')}></Image>} 
     </TouchableOpacity>
     </View>
     {jsxElement&&jsxElement}
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
})
export default Container