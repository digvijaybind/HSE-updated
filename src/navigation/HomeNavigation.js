/*eslint-disable*/
import React from 'react'
import { View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import { St } from 'react-flags-select';
import Home from '../screens/Home';
import PropertyDetails from '../screens/PropertyDetails';
export default function HomeNavigation() {
    const Stack=createStackNavigator()
  return (
   <Stack.Navigator >
    <Stack.Screen name='homepage' component={Home}></Stack.Screen>
    <Stack.Screen name='prop' component={PropertyDetails}></Stack.Screen>
   </Stack.Navigator>
  )
}
