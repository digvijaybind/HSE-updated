/*eslint-disable*/
import React,{useState} from 'react'
import { View,StyleSheet, StatusBar, Image ,TouchableOpacity} from 'react-native'
import CustomText from '../components/text/CustomText'
import { lightColors ,darkColors} from '../theme/color'
import InvestingInfoCard from '../components/investing/InvestingInfoCard'
import TotalAmountCard from '../components/investing/TotalAmountCard'
import Button from '../components/button/Button'
import GoBackButton from '../components/button/GoBackButton'
import { useSelector } from 'react-redux'
import userReducer from '../redux/reducers'

export default function InvestingScreen({route,navigation}) {
  const {darkMode}=useSelector(state=>state.userReducer)
  const [amount, setamount] = useState(route.params.data.minamount)
    const onhandleChange=()=>{
      navigation.navigate('paymentSummary',{data:route.params.data,amount})
    }
  return (
 <View style={style(darkMode).container}>
   <View style={style().header}>
   <GoBackButton navigation={navigation}/>
     <View style={style().headerContainer}>
       <CustomText
         customStyle={{textAlign:"center"}}
         topic={route.params.data.name}
          color={darkMode?darkColors.text.secondary:lightColors.text.secondary} 
          fontSize={25} 
          fontWeight={'bold'}  />
     </View>
   </View>
    {amount&&<TotalAmountCard darkMode={darkMode} setamount={setamount} amount={amount} minamount={route.params.data.minamount}/>}
    <View style={style().endContainer}>
          <Button title={'Proceed'} onPress={onhandleChange} style={{width:200}} color={lightColors.text.tertiary} backgroundColor={lightColors.background.secondary} />
    </View>
 </View>
  )
}
const style=(darkMode)=>StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingTop:StatusBar.currentHeight,
        gap:15,
        backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,

    },
    header:{
        width:"100%",
        padding:10,
        flexDirection:"row"
    },
    headerContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        tintColor:lightColors.icon.primary
    },
     endContainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"flex-end",
      padding:20
     }
})
