/*eslint-disable*/
import React from 'react'
import { StyleSheet,View , StatusBar} from 'react-native'
import { darkColors, lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import { DrawerContentScrollView, DrawerItemList,} from '@react-navigation/drawer'
import { useSelector } from 'react-redux'
import userReducer from '../../redux/reducers'

export default function DrawerContent(props) {
  const {darkMode}=useSelector(state=>state.userReducer)
  console.log(StatusBar.currentHeight)
  return (
    <View style={styles().container}>
      <DrawerContentScrollView 
      {...props}
      contentContainerStyle={styles().screenContainer}
       >
      
       <View style={styles().header}>
        <CustomText topic={"User"} color={lightColors.text.tertiary} fontSize={30} fontWeight={'bold'} />
      </View>
      <View style={styles(darkMode).itemContainer}>
       <DrawerItemList {...props} />
       </View>
      </DrawerContentScrollView>
    </View>
  )
}
const styles=(darkMode)=>StyleSheet.create({
    container: {
        flex: 1
      },
   header:{
        backgroundColor:lightColors.background.secondary,
        height:100+StatusBar.currentHeight,
        justifyContent:"center",
        alignItems:"flex-start",
        width:"100%",
        paddingHorizontal:20,
        paddingTop:StatusBar.currentHeight
   },
   screenContainer:{
     flex:1,
     paddingHorizontal:20,
      backgroundColor:lightColors.background.secondary
   },
   itemContainer:{
    flex:1,
    backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
   }
})
