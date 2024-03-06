/*eslint-disable*/
import React from 'react'
import { View,Text,StyleSheet,ScrollView } from 'react-native'
import EmptyContainer from '../components/container/EmptyContainer'
import TotalPortfolio from '../components/portfolio/TotalPortfolio'
import PendingDeposits from '../components/portfolio/pendingdeposits/PendingDeposits'
import PortfolioValue from '../components/portfolio/portfoliovalue/PortfolioValue'
import PropertyUpdates from '../components/portfolio/propertyupdates/PropertyUpdates'
import VerticalSeperator from '../components/seperator/VerticalSeperator'
import RentalReceived from '../components/portfolio/rentalreceived/RentalReceived'
import RentalStatement from '../components/portfolio/rentalstatement/RentalStatement'
import Investments from '../components/portfolio/investments/Investments'
import { darkColors, lightColors } from '../theme/color'
import PortfolioAllocation from '../components/portfolio/portfolioallocation/PortfolioAllocation'
import { useSelector } from 'react-redux'
import userReducer from '../redux/reducers'

export default function Portfolio() {
  const {darkMode,rate,currency}=useSelector(state=>state.userReducer)
  return (
    <ScrollView style={style(darkMode).container}>
    <View style={{gap:15}}>
      <TotalPortfolio darkMode={darkMode} darkColors={darkColors} />
      <PortfolioAllocation darkMode={darkMode} darkColors={darkColors}/>
      <PendingDeposits darkMode={darkMode} darkColors={darkColors}/>
      <PortfolioValue darkMode={darkMode} darkColors={darkColors}/>
      <PropertyUpdates darkMode={darkMode} darkColors={darkColors}/>
      <RentalReceived darkMode={darkMode} darkColors={darkColors}/>
      <RentalStatement darkMode={darkMode} darkColors={darkColors}/>
      <Investments darkMode={darkMode} darkColors={darkColors}/>
      <VerticalSeperator height={75}/>
      </View>
    </ScrollView>
  )
}
const style=(darkMode)=>StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
    paddingHorizontal:15,
    gap:15,
    paddingVertical:10
  }
})