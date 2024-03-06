/*eslint-disable*/
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { color, data, price } from '../data/assetCosting'
import { VictoryPie } from "victory-native";

export default function Chart() {

  return (
    <View>
        {/* <VictoryPie
          data={data}
        /> */}
    </View>
  )
}
const style=()=>StyleSheet.create({
   container:{
    zIndex:2,
    justifyContent:"center",
    alignItems:"center"
  }
})
