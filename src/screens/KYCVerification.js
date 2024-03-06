/*eslint-disable*/
import React from 'react'
import { View,StatusBar,StyleSheet, TouchableOpacity ,Image} from 'react-native'
import { darkColors, lightColors } from '../theme/color'
import KycHeader from '../components/kyc/KycHeader'
import KYCBody from '../components/kyc/kycbody/KYCBody'
import Button from '../components/button/Button'
import { useSelector } from 'react-redux'
import userReducer from '../redux/reducers'

export default function KYCVerification({navigation}) {
  const {darkMode}=useSelector(state=>state.userReducer)  
  return (
    <View style={style(darkMode).container}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={style().padding}>
          <Image style={style().icon} source={require('../assets/images/back.png')}/>
        </TouchableOpacity>
         <KycHeader darkMode={darkMode}/>
         <KYCBody navigation={navigation}/>
         <View style={style().padding}>
         <Button style={{width:"100%"}} title={'Verify'} color={lightColors.text.tertiary} backgroundColor={lightColors.background.secondary}></Button>
         </View>
        
    </View>
  )
}
const style=(darkMode)=>StyleSheet.create({
    container:{
       paddingTop:StatusBar.currentHeight,
       backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
       flex:1
    },
    padding:{
        padding:15
    },
    icon:{
        tintColor:lightColors.icon.primary
    }
})
