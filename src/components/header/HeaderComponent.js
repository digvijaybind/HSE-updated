/*eslint-disable*/
import React from 'react'
import { View,Text,TouchableOpacity,Image,StatusBar, StyleSheet } from 'react-native'
import { darkColors, lightColors } from '../../theme/color'
import { useNavigation } from '@react-navigation/native';
import CustomText from '../text/CustomText';
import { useSelector } from 'react-redux';
import userReducer from '../../redux/reducers';

export default function HeaderComponent({title,style}) {
  const {darkMode}=useSelector(state=>state.userReducer)
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary}}>
<View style={[styles().container,style]}>
    
    <View style={styles().innerContainer}>
    <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles().image} source={require('../../assets/images/hamburgermenu.png')}></Image>
    </TouchableOpacity>
    <CustomText topic={title} fontSize={25} fontWeight={'bold'} color={'white'}/>
    </View>
    <View style={styles().innerContainer2}>
    <TouchableOpacity>
      <Image style={styles().image} source={require('../../assets/images/search.png')}></Image>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image style={styles().image} source={require('../../assets/images/NotificationIcon.png')}></Image>
    </TouchableOpacity>
    </View>
   </View>
   </View>
  )
}
const styles=()=>StyleSheet.create({
    container:{
        backgroundColor:lightColors.background.secondary,
        height:110,
        borderRadius:25,
        justifyContent:"space-between",
        paddingTop:StatusBar.currentHeight,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:"flex-end",
        paddingBottom:10
    },
    innerContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"50%",
        maxWidth:200,
        justifyContent:"space-around",
        minWidth:200
    },
    image:{
        height:35,
        width:35,
        tintColor:lightColors.icon.tertiary,
    },
    text:{
        color:lightColors.text.tertiary,
        fontSize:25,
        fontWeight:"bold"
    },
    innerContainer2:{
        justifyContent:"space-between",
        flexDirection:'row',
        maxWidth:80,
        width:"20%",
        minWidth:80
    }
    
})