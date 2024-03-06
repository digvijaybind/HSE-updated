/*eslint-disable*/
import React,{useState} from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { lightColors,darkColors } from '../theme/color'
import Introduction from '../components/profile/Introduction'
import InfoTags from '../components/profile/InfoTags'
import ProgressShow from '../components/profile/ProgressShow'
import PersonalInfo from '../components/profile/personalInfo/PersonalInfo'
import VerticalSeperator from '../components/seperator/VerticalSeperator'
import AddressInfo from '../components/profile/addresss/AddressInfo'
import { useSelector } from 'react-redux'
import userReducer from '../redux/reducers'

export default function Profile({navigation}) {
  const infoTypes=['Personal Info','Address info','KYC Verification']
  const [infoType, setinfoType] = useState('Personal Info')
  const {darkMode}=useSelector(state=>state.userReducer)  
  return (
    <View style={styles(darkMode).container}>
      <Introduction/>
      <InfoTags infoType={infoType} setinfoType={setinfoType} navigation={navigation}/>
      <ProgressShow/>
      <ScrollView>
      {infoType&&infoType=='Personal Info'&&<PersonalInfo/>}
      {infoType&&infoType=='Address Info'&&<AddressInfo/>}
      </ScrollView>
      <VerticalSeperator height={65}/>
    </View>
  )
}
const styles=(darkMode)=>StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
      zIndex:2,
      padding:15,
      gap:15
  },
  circle:{
    height:140,
    aspectRatio:1,
    borderRadius:100,
    backgroundColor:lightColors.background.primary,
    padding:5,
    marginTop:-40,
   
},
innercircle:{
    height:"100%",
    width:"100%",
    backgroundColor:lightColors.background.secondary,
    borderRadius:100,
    
},

})
