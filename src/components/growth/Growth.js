/*eslint-disable*/
import React from 'react'
import {View } from 'react-native'
import InvestmentOverview from './InvestmentOverview'
import KeyHighlights from './KeyHighlights'
import InvestmentCalculator from './InvestmentCalculator'
import VerticalSeperator from '../seperator/VerticalSeperator'
import AssetCosting from './AssetCosting'
import AdditionalInformation from './AdditionalInformation'
export default function Growth() {
  return (
   <View >
    <InvestmentOverview/>
    <VerticalSeperator height={10}/>
    <KeyHighlights/>
    <VerticalSeperator height={10}/>
    <InvestmentCalculator/>
    <VerticalSeperator height={10}/>
    <AssetCosting/>
    <VerticalSeperator height={10}/>
    <AdditionalInformation/>
    <VerticalSeperator height={30}/>
   </View>
  )
}

