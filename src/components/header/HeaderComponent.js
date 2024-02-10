/*eslint-disable*/
import React from 'react'
import { View,Text,TouchableOpacity,Image,StatusBar, StyleSheet } from 'react-native'
import { lightColors } from '../../theme/color'

export default function HeaderComponent(props) {
  return (
    <View style={styles().container}>
    <View style={styles().innerContainer}>
    <TouchableOpacity onPress={()=>{props.navigation.openDrawer()}}  >
      <Image style={styles().image} source={require('../../assets/images/hamburgermenu.png')}></Image>
    </TouchableOpacity>
    <Text style={styles().text}>Hello, User</Text>
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
  )
}
const styles=()=>StyleSheet.create({
    container:{
        backgroundColor:lightColors.button,
        height:110,
        marginBottom:15,
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
        tintColor:"white",
    },
    text:{
        color:'white',
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