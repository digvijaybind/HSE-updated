/*eslint-disable*/
import React,{useState} from 'react'
import EmptyContainer from '../../container/EmptyContainer'
import { View ,StyleSheet} from 'react-native'
import CustomText from '../../text/CustomText'
import { lightColors } from '../../../theme/color'

export default function RentalReceived({darkMode,darkColors}) {
    const [rentalreceived, setrentalreceived] = useState('')
    const date=new Date()
    const dateJoined=`16 Aug 2023`
    const currentDate=`${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
    const elements=(
    <View style={style().card}>
      <View>
        <CustomText topic={'Rental Received'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
        <CustomText topic={dateJoined +'-'+ currentDate} color={lightColors.text.grey} fontSize={13} fontWeight={'normal'}/>
      </View>
      {!rentalreceived&&<View style={style().center}>
        <CustomText topic={'No rents on selected date range'} fontSize={13} fontWeight={'normal'} color={lightColors.text.grey}/>
      </View>}
    </View>
    )
  return (
   <EmptyContainer elements={elements}/>
  )
}
const style=()=>StyleSheet.create({
    card:{
        gap:15
    },
    center:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    }
})