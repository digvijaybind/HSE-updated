/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity,Dimensions } from 'react-native'
import { lightColors } from '../../theme/color'
import Button from '../button/Button'
import { Link } from '@react-navigation/native'
import { standardPhoneWidth } from '../../utils/constant'
import CustomText from '../text/CustomText'

export default function HorizontalCard({data,navigation,onPress,currency,rate}) {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [width, setwidth] = useState(screenWidth>standardPhoneWidth?standardPhoneWidth:screenWidth)
  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(Dimensions.get('window').width);
      setwidth(screenWidth>standardPhoneWidth?standardPhoneWidth:screenWidth)
    };
    Dimensions.addEventListener('change', updateDimensions);
    
  }, []);
  
   
  return (
    <View style={{padding:20,width,}}>
   <View style={[styles().container]}>
   <TouchableOpacity onPress={()=>{navigation.navigate('propertyDetail',{data})}}>
     <ImageBackground source={{uri:data.image}} style={styles().image}>
     <View style={styles().innercontainer}>
      <View style={styles().feature}>
      <Text style={styles().featuretext}>Trending</Text>
      </View>
      <View style={styles().feature}>
        <Text style={styles().featuretext}>{data.invested}% Invested</Text>
      </View>
      </View>
     </ImageBackground>
     </TouchableOpacity>
     <View style={styles().center}>
      <View style={styles().container1}>
      <CustomText fontWeight={'bold'} fontSize={20} color={ lightColors.text.secondary} topic={(data.price*rate).toLocaleString('en-US', { style: 'currency', currency: currency })} />
        <CustomText fontSize={12} fontWeight={'normal'} color={lightColors.text.secondary} topic={data.name} />
        <CustomText fontSize={12} fontWeight={'normal'} color={ lightColors.text.secondary} topic={data.location} />
      </View>
      <View style={styles().container2}>
         <View style={styles().rowFlex}>
          <View style={styles().rating}>
          <Image tintColor={lightColors.icon.primary} source={require('../../assets/images/rating.png')}></Image>
          <Text style={styles(15,'bold',lightColors.text.primary).text}>{data.rating}</Text>
          </View>
          <View style={styles().readMore}>
          <Link to={'/propertyDetail'} style={styles(15,'normal',lightColors.text.primary).text}>Read More</Link>
          </View>
         </View>
         <Button onPress={()=>{onPress(data)}} title={'Invest now'} backgroundColor={lightColors.button.secondary} color={'white'} style={{width:"100%",padding:10,height:'auto',marginTop:10}}></Button>
      </View>
     </View>
   </View>
   </View>
  )
}
const styles=(fontSize,fontWeight,color)=>StyleSheet.create({
  container:{
    borderRadius:20,
    borderColor:lightColors.border.primary,
    borderWidth:1,
    justifyContent:"flex-start",
    alignItems:"center",
    padding:0.3,
    width:"100%",
    backgroundColor:lightColors.background.primary,
  },
  image:{
    width:"100%",
    aspectRatio:1.4,
    borderRadius:19,
    overflow:"hidden",
  },
  innercontainer:{
    padding:10,
    alignItems:'flex-start',
    flexDirection:"row",
    justifyContent:'space-between',
  },
  feature:{
    backgroundColor:'white',
    borderRadius:10,
    borderColor:lightColors.border.primary,
    borderWidth:0.5,
    justifyContent:"center",
    alignItems:'center',
    padding:5
  },
  featuretext:{
    color:lightColors.text.primary,
    fontSize:15,
    fontWeight:'bold'
  },
  center:{
  width:"100%",
  flexDirection:'row'
  },
  container1:{
    padding:10,
    width:"60%",
  },
  container2:{
    padding:5,
    flex:1,
  },
  text:{
    fontSize,
    color,
    fontWeight
  },
  rating:{
    borderColor:lightColors.border.primary,
    borderWidth:1,
    alignItems:"center",
    justifyContent:'space-evenly',
    borderRadius:10,
    flexDirection:'row',
    height:25,
    width:"40%",
  },
  rowFlex:{
    flexDirection:'row',
    justifyContent:"space-evenly",
    
  },
  readMore:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
