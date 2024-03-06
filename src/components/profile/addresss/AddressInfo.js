/*eslint-disable*/
import React,{useState} from 'react'
import { View,StyleSheet } from 'react-native'
import Inputs from '../personalInfo/Inputs'
import { lightColors } from '../../../theme/color'

export default function AddressInfo() {
    const [userAddress, setuserAddress] = useState(
        {
           line1:'12, Neel Siddhi Towers Apt.',
           line2:'Sector 16A, Plot 25',
           line3:'Near New Horizon School',
           pincode:'410210',
           state:'Maharashtra',
           city:'Mumbai',
        }
        )
  return (

         <View>
        {userAddress&&
        <View style={style().container}>
         <Inputs value={userAddress.line1}  editable={true} icon={'edit'} label={'Address Line 1'} />
         <Inputs value={userAddress.line2} editable={true} icon={'edit'} label={'Address Line 2'} />
         <Inputs value={userAddress.line3} editable={true} icon={'edit'} label={'Address Line 3'}/>
         <Inputs value={userAddress.pincode} editable={true} icon={'edit'} label={'Pincode'} />
         <Inputs value={userAddress.state} icon={'edit'} label={'State'}/>
         <Inputs value={userAddress.city} editable={true} icon={'edit'} label={'City'} />
        </View>}
     </View>
  )
}
const style=()=>StyleSheet.create({
    container:{
      gap:15
    }
})