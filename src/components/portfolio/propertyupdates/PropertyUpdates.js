/*eslint-disable*/
import React,{useState} from 'react'
import EmptyContainer from '../../container/EmptyContainer'
import { StyleSheet, View } from 'react-native'
import CustomText from '../../text/CustomText'
import { lightColors } from '../../../theme/color'

export default function PropertyUpdates({darkMode,darkColors}) {
    const [records, setrecords] = useState('')
    const elements=(
        <View style={style().card}>
            <CustomText topic={'Property Updates'} fontSize={20} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontWeight={"bold"}/>
            {!records&&<View style={[style().center,{marginTop:10}]}>
            <CustomText topic={'There are no records to  show'} fontSize={15} color={lightColors.text.grey} fontWeight={"normal"}/>
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
