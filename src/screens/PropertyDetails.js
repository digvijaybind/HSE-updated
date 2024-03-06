/*eslint-disable*/
import React,{useState} from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native'
import ImagePropertyDetail from '../components/imageContainer/ImagePropertyDetail'
import InformationTags from '../components/tags/InformationTags'
import Growth from '../components/growth/Growth'
import { ScrollView } from 'react-native-gesture-handler'
import Overview from '../components/overview/Overview'
import Button from '../components/button/Button'
import { darkColors, lightColors } from '../theme/color'
import Documents from '../components/documents/Documents'
import FAQs from '../components/faqs/FAQs'
import { useSelector } from 'react-redux'
import userReducer from '../redux/reducers'
import CustomText from '../components/text/CustomText'

export default function PropertyDetails({route,navigation}) {
  const {darkMode}=useSelector(state=>state.userReducer)

  const [selectedTag, setselectedTag] = useState('Growth')
  return (
  <SafeAreaView style={styles(darkMode).container}>
    <ImagePropertyDetail data={route.params.data} navigation={navigation}/>
    <View style={styles().headerContainer}>
    <CustomText
        topic={route.params.data.name}
        fontSize={20}
        fontWeight={'bold'}
        color={darkMode?darkColors.text.secondary:lightColors.text.secondary}
    />
      <CustomText
        topic={route.params.data.location}
        fontSize={20}
        fontWeight={'bold'}
        color={darkMode?darkColors.text.secondary:lightColors.text.secondary}
    />
    </View>
    <View style={{paddingVertical:10}}>
    <InformationTags selectedTag={selectedTag} setselectedTag={setselectedTag}/>
    </View>
    <ScrollView style={styles().info}>
    {selectedTag=='Growth'&&<Growth/>}
     {selectedTag=='Overview'&&<Overview/>}
    {selectedTag=='Documents' &&<Documents/>}
    {selectedTag=="FAQ's"&&<FAQs darkMode={darkMode} />}
    </ScrollView>
    <View style={styles().buttonContainer}>
      <Button title={"Let's Invest"} backgroundColor={lightColors.background.secondary} style={{borderRadius:20}} color={lightColors.text.tertiary}/>
    </View>
   </SafeAreaView>
  )
}
const styles=(darkMode)=>StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
  },
  info:{
    paddingHorizontal:20,
  },
  buttonContainer:{
    width:"100%",
    justifyContent:"center",
    alignItems:'center',
    padding:20
  },
  headerContainer:{
    paddingTop:34,
    padding:10
  }
})
const textStyle=(color,fontSize,fontWeight)=>StyleSheet.create({
  text:{
   color,
   fontSize,
   fontWeight
  }
})
