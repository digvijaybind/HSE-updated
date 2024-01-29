/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity,Dimensions } from 'react-native'
import { lightColors } from '../../theme/color'
import Button from '../button/Button'
import { Link } from '@react-navigation/native'
import { standardPhoneWidth } from '../../utils/constant'

export default function HorizontalCard({data}) {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [width, setwidth] = useState(screenWidth>standardPhoneWidth?standardPhoneWidth:screenWidth)
  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(Dimensions.get('window').width);
      setwidth(screenWidth>standardPhoneWidth?standardPhoneWidth:screenWidth)
    };
    Dimensions.addEventListener('change', updateDimensions);
    
  }, []);
  const invest=()=>{}
   
  return (
    <View style={{padding:20,width,}}>
   <View style={[styles().container]}>
   <TouchableOpacity>
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
        <Text style={styles(25,'bold',lightColors.text).text}>₹ {data.price}</Text>
        <Text style={styles(12,'normal',lightColors.text).text}>{data.name}</Text>
        <Text style={styles(12,'normal',lightColors.text).text}>{data.location}</Text>
      </View>
      <View style={styles().container2}>
         <View style={styles().rowFlex}>
          <View style={styles().rating}>
          <Image tintColor={lightColors.button} source={require('../../assets/images/rating.png')}></Image>
          <Text style={styles(15,'bold',lightColors.button).text}>4.7</Text>
          </View>
          <View style={styles().readMore}>
          <Link to={'/'} style={styles(15,'normal',lightColors.button).text}>Read More</Link>
          </View>
         </View>
         <Button onPress={invest} title={'Invest now'} backgroundColor={lightColors.button} color={'white'} style={{width:"100%",padding:10,height:'auto',marginTop:10}}></Button>
      </View>
     </View>
   </View>
   </View>
  )
}
const styles=(fontSize,fontWeight,color)=>StyleSheet.create({
  container:{
    borderRadius:20,
    borderColor:lightColors.border,
    borderWidth:1,
    justifyContent:"flex-start",
    alignItems:"center",
    padding:0.5,
    width:"100%",
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
    borderColor:lightColors.border,
    borderWidth:0.5,
    justifyContent:"center",
    alignItems:'center',
    padding:5
  },
  featuretext:{
    color:lightColors.border,
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
    borderColor:lightColors.border,
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
