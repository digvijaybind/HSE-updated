/*eslint-disable*/
import React,{useState} from 'react'
import { View, StyleSheet, Text, SafeAreaView} from 'react-native'
import ImagePropertyDetail from '../components/imageContainer/ImagePropertyDetail'
import InformationTags from '../components/tags/InformationTags'
import Growth from '../components/growth/Growth'
import { ScrollView } from 'react-native-gesture-handler'
import Overview from '../components/overview/Overview'
import VerticalSeperator from '../components/seperator/VerticalSeperator'
import Button from '../components/button/Button'
import { lightColors } from '../theme/color'
import Documents from '../components/documents/Documents'
import FAQs from '../components/faqs/FAQs'
export default function PropertyDetails({route,navigation}) {
  const [selectedTag, setselectedTag] = useState('Growth')
  return (
   <SafeAreaView style={styles().container}>
    <ImagePropertyDetail data={route.params.data} navigation={navigation}/>
    <View style={styles().headerContainer}>
      <Text style={textStyle('black',20,'bold').text}>{route.params.data.name}</Text>
      <Text style={[textStyle('black',15,'normal').text,{marginTop:5}]}>{route.params.data.location}</Text>
    </View>
    <View style={{paddingVertical:10}}>
    <InformationTags selectedTag={selectedTag} setselectedTag={setselectedTag}/>
    </View>
    <ScrollView style={styles().info}>
    {selectedTag=='Growth'&&<Growth/>}
     {selectedTag=='Overview'&&<Overview/>}
    {selectedTag=='Documents' &&<Documents/>}
    {selectedTag=="FAQ's"&&<FAQs/>}
    </ScrollView>
    <View style={styles().buttonContainer}>
      <Button title={"Let's Invest"} backgroundColor={lightColors.button} style={{borderRadius:20}} color={'white'}/>
    </View>
   </SafeAreaView>
  )
}
const styles=()=>StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
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
