/*eslint-disable*/
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import TabNavigator from './TabNavigator'
import Home from '../screens/Home'
import { lightColors } from '../theme/color'
import { View,Text, TouchableOpacity ,Image, StatusBar} from 'react-native'
import HeaderComponent from '../components/header/HeaderComponent'

export default function DrawerNavigator({navigation}) {
  
    const Drawer=createDrawerNavigator()
  return (
    <Drawer.Navigator drawerOptions={{
      isConfigured:true
    }} initialRouteName="entry"
    
     screenOptions={{
      
      header:()=>(
       <HeaderComponent navigation={navigation}/>
       )
     }}>
        <Drawer.Screen options={{sceneContainerStyle:{flex:1,backgroundColor:"white"}}} name='entry' component={TabNavigator}/>
    </Drawer.Navigator>
  )
}
