/*eslint-disable*/
import React,{useState} from 'react'
import {  StyleSheet, TextInput, View } from 'react-native'
import { lightBlue100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import { configureLayoutAnimations } from 'react-native-reanimated/lib/typescript/reanimated2/core'
import Button from '../button/Button'
import { useSelector } from 'react-redux'
import userReducer from '../../redux/reducers'
export default function EnterAmount({setopen,amount,setamount,minamount}) {
    const {rate,currency}=useSelector(state=>state.userReducer)
    const handleChange=()=>{
        if(!err){
            setopen(false)
        }
    }
    const [amt, setamt] = useState(amount*rate)
   const [err, seterr] = useState(false)
  return (
   <View style={style.container} >
       <View style={style.innerContainer}>
           <View style={style.header}>
               <CustomText topic={'Enter Amount'} color={lightColors.text.tertiary} fontSize={25} fontWeight={'bold'} />
           </View>
           <View style={style.endContainer}>
           <>
              <TextInput
                 value={+amt.toString()}
                keyboardType='number-pad'
                 placeholder='Enter Amount'
                 placeholderTextColor={lightColors.text.grey}
                 onChangeText={(text)=>{
                    if(+text>=+minamount*rate){
                        seterr(false)
                        setamt(text)
                        setamount(+text/rate)
                    }
                    else{
                        setamt(text)
                        seterr(true)
                    }
                 }}
               style={style.input}/>
               {err&&<CustomText topic={`Minimum amount is ${(+minamount*rate).toLocaleString('en-Us',{style:'currency',currency})}`} color={'red'} />}
               </>
               <Button color={lightColors.text.tertiary} title={'Submit'} backgroundColor={lightColors.background.secondary}  style={{width:'100%'}}
                   onPress={handleChange}
               />
           </View>
       </View>
   </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    innerContainer:{
        width:"100%",
        backgroundColor:"white",
        borderRadius:20,
        maxWidth:350
    },
    header:{
        width:"100%",
        padding:15,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:lightColors.background.secondary,
        borderTopStartRadius:20,
        borderTopEndRadius:20
    },
    endContainer:{
        marginTop:20,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        gap:15
    },
    input:{
        width:"100%",
        padding:10,
        borderRadius:10,
        borderColor:lightColors.border.tertiary,
        borderWidth:1,
        backgroundColor:lightColors.background.quaternary,
        color:lightColors.text.secondary
    }

})
