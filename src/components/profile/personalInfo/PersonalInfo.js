/*eslint-disable*/
import React from 'react'
import { View,StyleSheet } from 'react-native'
import Inputs from './Inputs'
import { useState } from 'react'

export default function PersonalInfo() {
    const [userDetail, setuserDetail] = useState(
    {
       firstName:'Chandler',
       lastName:'Bing',
       emailId:'user4455@gmail.com',
       phoneNumber:'+91 9876548799',
       investmentPreferences:[],
       date:'31/10/1985'
    }
    )
  return (
     <View>
        {userDetail&&
        <View style={style.container}>
         <Inputs value={userDetail.firstName} editable={false} icon={'lock'} label={'First Name-Should be same as mentioned in documents'} />
         <Inputs value={userDetail.lastName} editable={false} icon={'lock'} label={'Last Name-Should be same as mentioned in documents'} />
         <Inputs value={userDetail.emailId} editable={true} icon={'edit'} label={'Email id'}/>
         <Inputs value={userDetail.phoneNumber} editable={true} icon={'edit'} label={'Phone Number'} />
         <Inputs value={userDetail.date} icon={'calender'} label={'Date - DD/MM/YYYY'}/>
         <Inputs  editable={true} icon={'edit'} label={'Invetment Preferences'} />
        </View>}
     </View>
  )
}
const style=StyleSheet.create({
   container:{
    width:"100%",
     gap:15,
    justifyContent:'space-evenly',
   }
})