/*eslint-disable*/
import React from 'react'
import { View ,StyleSheet,StatusBar,TouchableOpacity,Image} from 'react-native'
import { darkColors, lightColors } from '../../theme/color'
import { useNavigation } from '@react-navigation/native';
import CustomText from '../text/CustomText';
import { runOnJS } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import userReducer from '../../redux/reducers';

export default function ProfileHeader() {
    const navigation=useNavigation()
    const {darkMode}=useSelector(state=>state.userReducer)
  return (
    <View style={{backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary}} >
    <View style={styles().container}>
    <View style={styles().innerContainer }>
    <TouchableOpacity onPress={()=>{ navigation.openDrawer()}}  >
      <Image style={styles().image} source={require('../../assets/images/hamburgermenu.png')}></Image>
    </TouchableOpacity>
    <CustomText topic={'My Profile'} color={lightColors.text.tertiary} fontSize={25} fontWeight={"bold"}/>
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
        height:130,
        borderRadius:25,
        paddingTop:StatusBar.currentHeight,
        paddingHorizontal:20,
        paddingBottom:10
    },
    innerContainer:{
     width:"100%",
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
     height:"90%"
    },
    image:{
        height:35,
        width:35,
        tintColor:lightColors.icon.tertiary, 
    },
})