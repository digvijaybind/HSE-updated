/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { View,StyleSheet, LogBox } from 'react-native'
import EmptyContainer from '../../container/EmptyContainer'
import CustomText from '../../text/CustomText'
import { lightColors } from '../../../theme/color'
import { Table, Row, Rows } from 'react-native-table-component';
export default function PendingDeposits({darkMode,darkColors}) {
  const [data, setdata] = useState([])
 
    LogBox.ignoreLogs(['Warning: Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`.'])
      const elements=(
      <View style={style().container}>
       <CustomText topic={'Pending Deposits'} color={darkMode?darkColors.text.secondary:lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
       <View>
       <Table>
        <Row  data={['ID', 'Property', `Amount (INR)`]} style={style().tableHeader} textStyle={{color:'white'}} />
        <Rows data={data} style={style().center} textStyle={{color:"black"}}/>
        </Table>
        </View>
      {data&&data.length==0&&<View style={style().center}>
        <CustomText topic={'There are no records to show'} color={lightColors.text.grey} fontSize={14} fontWeight={'normal'}/>
        </View>}
      </View>)
  return (
    <EmptyContainer elements={elements}/>
  )
}
const style=()=>StyleSheet.create({
  tableHeader:{
    height: 40, 
    backgroundColor: lightColors.background.secondary,
    padding:10,
    borderRadius:10,
  },
  container:{
    gap:10
  },
  tableheaderText:{
    color:lightColors.text.tertiary
  },
  center:{
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  }
})