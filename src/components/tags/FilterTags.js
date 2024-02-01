/*eslint-disable*/
import React,{useState} from 'react'
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { lightColors } from '../../theme/color'

export default function FilterTags({data}) {
    const [active, setactive] = useState(data[0])
    const onPress=(item)=>{
        setactive(item)
    }
    const Tag=({item})=>(
        <TouchableOpacity onPress={()=>{onPress(item)}} 
        style={
            style(active===item?lightColors.button:'white','',active===item?0:1).container
            }>
            <Text 
            style={
                style('',active===item?'white':'grey').text
                }>{item}</Text>
        </TouchableOpacity>
    )
  return (
    <View style={{paddingHorizontal:10}}>
       <FlatList
         data={data}
         horizontal
         ItemSeparatorComponent={()=>(<View style={{width:5}}></View>)}
         keyExtractor={(item, index) => index.toString()}
         renderItem={Tag}
         showsHorizontalScrollIndicator={false}
        >
</FlatList>
    </View>
  )
}
const style=(backgroundColor,color,borderWidth)=>StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        padding:6,
        borderColor:'grey',
        borderWidth,
        borderRadius:13,
        backgroundColor
    },
    text:{
        color,
        fontSize:15
    }
})
