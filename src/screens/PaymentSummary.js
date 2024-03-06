/*eslint-disable*/
import React from 'react'
import { View ,StyleSheet, StatusBar, Image} from 'react-native'
import GoBackButton from '../components/button/GoBackButton'
import CustomText from '../components/text/CustomText'
import { darkColors, lightColors } from '../theme/color'
import EndContainer from '../components/paymentSummary/EndContainer'
import { useSelector } from 'react-redux'
import userReducer from '../redux/reducers'

export default function PaymentSummary({navigation,route}) {
    const {rate,currency,darkMode}=useSelector(state=>state.userReducer)
    const date=new Date()
    const day=date.toLocaleDateString('en-US',{ year: 'numeric', month: 'short', day: '2-digit' })
    const paymentfee=200*rate
  return (
   <View style={style(darkMode).container} >
      <View style={style().header}>
        <GoBackButton navigation={navigation} />
        <View style={style().center}>
            <CustomText 
            customStyle={{textAlign:"center"}}
             topic={'Summary'} 
             color={darkMode?darkColors.text.secondary:lightColors.text.secondary} 
             fontSize={30} 
             fontWeight={'bold'}  />
        </View>
      </View>
      <View style={style().bodyContainer} >
       <Image source={{uri:route.params.data.image}} style={style().image}/>
         <CustomText
          customStyle={{textAlign:"center"}}
           topic={route.params.data.name} 
         color={darkMode?darkColors.text.secondary:lightColors.text.secondary} 
         fontSize={25} 
         fontWeight={'bold'}  />
         <CustomText customStyle={{textAlign:"center"}} topic={`Payment on ${day}`} color={lightColors.text.primary} fontSize={18} fontWeight={'bold'}  /> 
         <CustomText customStyle={{textAlign:"center"}} topic={`${(+route.params.amount*rate+paymentfee).toLocaleString('en-US', { style: 'currency', currency })}`} color={lightColors.text.primary} fontSize={45} fontWeight={'bold'}  />
         <View style={style().paymentFeeContainer} >
             <Image style={style().icon} source={require('../assets/images/info.png')} />
                <CustomText customStyle={{textAlign:"center"}} topic={`Payment fee ${paymentfee.toLocaleString('en-Us',{style:'currency',currency})} has been applied`}  color={lightColors.text.primary} fontSize={15} fontWeight={'bold'}  />
         </View>
      </View>
      <View style={{height:"100%"}} >
      <EndContainer/>
      </View>
   </View>
  )
}
const style=(darkMode)=>StyleSheet.create({

    header:{
        width:"100%",
        padding:15,
        flexDirection:"row"
    },
    container:{
        paddingTop:StatusBar.currentHeight,
        backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
    },
    center:{ 
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        height:150,
        width:150,
        borderRadius:20
    },
    bodyContainer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:15,
        gap:10,
        paddingHorizontal:15
    },
  paymentFeeContainer:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#e6f5f5',
    height:50,
    borderRadius:20,
    flexDirection:'row'
},
icon:{
    tintColor:lightColors.icon.primary,
    height:25,
    width:25
}
    
})
