/*eslint-disable*/
import React,{useState} from 'react'
import { View,StyleSheet,TouchableOpacity,Image, Modal } from 'react-native'
import EmptyContainer from '../container/EmptyContainer'
import CustomText from '../text/CustomText'
import { lightColors,darkColors } from '../../theme/color'

import EnterAmount from '../modal/EnterAmount'
import { useSelector } from 'react-redux'
import userReducer from '../../redux/reducers'
export default function TotalAmountCard({amount,setamount,minamount}) {
     const [open, setopen] = useState(false)
      const {rate,currency,darkMode}=useSelector(state=>state.userReducer)
      
    const element=(
    <>
    <Modal transparent visible={open}>
      <EnterAmount setopen={setopen} amount={amount} setamount={setamount} minamount={minamount}  />
    </Modal>
       <View style={[style().rowFlex,{justifyContent:'space-between'}]}>

         <CustomText
         topic={`${(+amount*rate).toLocaleString('en-US',{style: 'currency', currency: currency})}`}
          color={darkMode?darkColors.text.secondary:lightColors.text.secondary} 
          fontSize={30}
           fontWeight={'bold'}/>
         <TouchableOpacity style={style().editContainer} onPress={()=>{setopen(true)}} >
              <CustomText 
              color={darkMode?darkColors.text.secondary:lightColors.text.secondary}
               fontWeight={'bold'}
                topic={'Edit Amount'}
                  customStyle={{textAlign:'center'}}
                />
              <Image style={style().icon} source={require('../../assets/images/pencil.png')}/>
          </TouchableOpacity>
       </View>
       <TouchableOpacity style={[style().rowFlex,style().padding] }>
         <CustomText
           color={lightColors.text.primary}
            fontSize={14} fontWeight={'bold'} 
            topic={'Your Investment'} />
         <Image style={[style().icon,style().iconSize]}  source={require('../../assets/images/info.png')}/>
       </TouchableOpacity>
       <CustomText customStyle={{textAlign:'center',marginTop:10}} topic={`Minimum amount for investment is ${(+amount*rate).toLocaleString('en-US',{style: 'currency', currency: currency})}`} color={lightColors.text.grey} />
    </>
    )
  return (
    <EmptyContainer padding={15} elements={element}/>
  )
}
const style=()=>StyleSheet.create({
    rowFlex:{
        flexDirection:'row',
        alignItems:"center",
   },
   editContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:2,
},
icon:{
    tintColor:lightColors.icon.primary
},
padding:{
    paddingLeft:5
},
iconSize:{
    height:20,
    width:20
}


})
