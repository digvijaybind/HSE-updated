/*eslint-disable*/
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';
import { StyleSheet,View,Text,Image } from 'react-native';
import { lightColors } from '../theme/color';
export default function TabNavigator() {
    const Stack=createBottomTabNavigator()
    
  return (
     <Stack.Navigator screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:TabBarstyle.tabBar,
        headerShown:false,
        
     }}
     initialRouteName='home'
      >
        <Stack.Screen name='home' component={Home} options={{
            tabBarIcon:({focused})=>(
            <View style={styles(focused).container}>
                <Image source={require('../assets/images/home.png')}  style={styles(focused).image}></Image>
            </View>
            )
            
        }} 
        />
        <Stack.Screen name='portfolio' component={Portfolio} options={{
            tabBarIcon:({focused})=>(
            <View style={styles(focused).container}>
                <Image source={require('../assets/images/portfolio.png')}  style={styles(focused).image}></Image>
            </View>
            )
        }} 
        />
        <Stack.Screen name='saved' component={Saved} options={{
            tabBarIcon:({focused})=>(
            <View style={styles(focused).container}>
                <Image source={require('../assets/images/saved.png')}  style={styles(focused).image}></Image>
            </View>
            )
        }}
        />
        <Stack.Screen name='profile' component={Profile} options={{
            tabBarIcon:({focused})=>(
            <View style={styles(focused).container}>
                <Image source={require('../assets/images/profile.png')}  style={styles(focused).image}></Image>
            </View>
            )
        }}
        />
     </Stack.Navigator>
  )
}
const TabBarstyle=StyleSheet.create({
    tabBar:{
        position:'absolute',
        marginHorizontal:20,
        bottom:10,
        borderRadius:40,
        backgroundColor:lightColors.navigationBars,
        height:65,
        
    }
})
const styles = (focused) => StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:focused?"white":lightColors.navigationBars,
        height:40,
        width:40,
        borderRadius:100
    },
    image:{
        height:35,
        width:35,
        tintColor:focused?lightColors.navigationBars:"white"
    },
    text:{

    }
})
