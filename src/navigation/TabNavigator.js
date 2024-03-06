/*eslint-disable*/
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';
import { StyleSheet,View,Text,Image } from 'react-native';
import { lightColors } from '../theme/color';
import HomeNavigation from './HomeNavigation';
import HeaderComponent from '../components/header/HeaderComponent';
import ProfileHeader from '../components/header/ProfileHeader';
export default function TabNavigator() {
    const Stack=createBottomTabNavigator()
    
  return (
     <Stack.Navigator screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:TabBarstyle.tabBar,    
        
     }}
     initialRouteName='home'
      >
        <Stack.Screen name='home' component={Home} options={{
            tabBarIcon:({focused})=>(
            <View style={styles(focused).container}>
                <Image source={require('../assets/images/home.png')}  style={styles(focused).image}></Image>
            </View>
            ),
            header:(()=>(
                <HeaderComponent title={'Hello User'}/>
            )),
            
            
        }} 
        />
        <Stack.Screen name='portfolio' component={Portfolio} options={{
            tabBarIcon:({focused})=>(
            <View style={styles(focused).container}>
                <Image source={require('../assets/images/portfolio.png')}  style={styles(focused).image}></Image>
            </View>
            ),
            header:(()=>(
                <HeaderComponent title={'Portfolio'}/>
            ))
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
            ),
            header:(()=>(
                <ProfileHeader/>
            )),
            
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
        backgroundColor:lightColors.background.secondary,
        height:65,
        
    }
})
const styles = (focused) => StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:focused?lightColors.background.primary:lightColors.background.secondary,
        height:40,
        width:40,
        borderRadius:100
    },
    image:{
        height:35,
        width:35,
        tintColor:focused?lightColors.icon.primary:lightColors.icon.tertiary
    },
    text:{

    }
})
