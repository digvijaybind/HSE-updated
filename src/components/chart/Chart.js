/*eslint-disable*/
import React from 'react'
import { StyleSheet, View } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { lightColors } from '../../theme/color'
import { color, price } from '../data/assetCosting'
export default function Chart() {

  return (
    <View>
      <PieChart
        widthAndHeight={250}
        series={price}
        sliceColor={color}
        coverRadius={0.80}
      />
    </View>
  )
}
const style=()=>StyleSheet.create({

})
