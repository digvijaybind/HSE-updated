/*eslint-disable*/
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Sections from './Sections'
import Checker from '../../checker/Checker'

export default function KYCBody({navigation}) {
    const [checked, setchecked] = useState(false)
  return (
    <View style={style().container}>
       <Sections  content={'Upload Your Selfie'} goTo={'selfie'} navigation={navigation} />
       <Sections content={'Address Proof'} goTo={'addressProof'} navigation={navigation} />
       <Sections content={'Employment Proof'} goTo={'employmentProof'} navigation={navigation} />
       <Sections content={'Upload Other Documents'} goTo={'otherDocuments'} navigation={navigation} />
       <Checker checked={checked} setchecked={setchecked} />
       
    </View>
  )
}
const style=()=>StyleSheet.create({
    container:{
        padding:15,
        width:"100%",
        gap:15,
        justifyContent:'center',
        alignItems:"center"
    },
})