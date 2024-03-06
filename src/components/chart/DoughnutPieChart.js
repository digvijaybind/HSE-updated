/*eslint-disable*/
import React from 'react'
import PieChart from 'react-native-pie-chart'
import { Dimensions } from 'react-native'

export default function DoughnutPieChart({data,colors}) {
  const widthAndHeight=Dimensions.get('window').width>400?350:(Dimensions.get('window').width-60)
  return (
    <PieChart
      series={data}
      sliceColor={colors}
      widthAndHeight={widthAndHeight}
      coverRadius={0.8}
      style={{zIndex:2}}
      
    />
  )
}

