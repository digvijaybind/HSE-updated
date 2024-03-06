/*eslint-disable*/
import React,{useState} from 'react'
import { View ,StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import Button from  '../button/Button'
import Slider from '@react-native-community/slider';
import CurrencyFilter from '../filterOptions/CurrencyFilter'
export default function FilterModal({setfilterOpen}) {
    const [filterItem, setfilterItem] = useState('Affordable Housing')
    const filter=['Affordable Housing','Vacational Rentals','Residential Properties','Commercial Properties']
    const data=[{label:'Low to High',value:'low'},{label:'High to Low',value:'high'}]
    const [radius, setradius] = useState(3)
    const handleFilter=(item)=>{
        setfilterItem(item)
    }
  return (
    <View style={style().container} >
     <View style={style().innerContainer}>
     <View style={style().headerContainer}>
        <CustomText topic={'Filter'} color={lightColors.text.tertiary} fontSize={30} fontWeight={'bold'}/>
        <TouchableOpacity onPress={()=>{setfilterOpen(false)}}>
        <Image source={require('../../assets/images/cross.png')} tintColor={lightColors.icon.tertiary} />
        </TouchableOpacity>
     </View>
     <View>
        <FlatList
            data={filter}
            numColumns={2}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>{handleFilter(item)}}  style={style(filterItem===item?lightColors.background.primary:lightColors.background.secondary).button}>
                <CustomText topic={item} color={filterItem===item?lightColors.text.primary:lightColors.text.tertiary} fontSize={16} fontWeight={'normal'}/>
                </TouchableOpacity>
            )}
        />
     </View>
     <Button title={'Exchange'} style={style().button2} color={lightColors.text.tertiary}/>
     <View style={style().gap}>
        <CustomText topic={'• LOCATION'} color={lightColors.text.tertiary} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity style={[style().button3,style().button2]}>
        <CustomText topic={'Enter your preferred Location'} color={lightColors.text.tertiary} fontSize={14} fontWeight={'bold'}/>
        </TouchableOpacity>
     </View>
     <View >
     <View style={style().distance}>
     <CustomText topic={'• DISTANCE'} color={lightColors.text.tertiary} fontSize={20} fontWeight={'bold'}/>
         <CustomText topic={`${radius} km radius`} color={lightColors.text.tertiary} fontSize={12} fontWeight={'normal'}/>
     </View>
     <Slider
  style={{width: '100%', height: 40}}
  minimumValue={1}
  maximumValue={10}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  value={radius}
  onValueChange={(i)=>setradius(i)}
  step={1}
/>
     </View>
     <View style={[style().gap]}>
     <CustomText topic={'• SORT BY'} color={lightColors.text.tertiary} fontSize={20} fontWeight={'bold'}/>
      {data&&<CurrencyFilter
       data={data} 
       defaultItem={'Low to High'}
       customStyle={{width:"100%",borderColor:lightColors.border.tertiary}}
       customPlaceholderStyle={{color:lightColors.text.tertiary}}
        customContainerStyle={{borderColor:lightColors.border.tertiary}}
        dropdownPosition='top'
       />}
     </View>
     </View>
    </View>
  )
}

const style=(backgroundColor)=>StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        
    },
    innerContainer:{
        width:"100%",
        backgroundColor:lightColors.background.secondary,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:15,
        gap:15,
        paddingBottom:20
    },
    button:{
        padding:20,
        width:"48%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        borderColor:"white",
        borderWidth:1,
        marginHorizontal:"1%",
        marginVertical:10,
        backgroundColor
    },
   button2:{
    borderRadius:10,
    borderWidth:1,
    borderColor:lightColors.border.tertiary
   },
   button3:{
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:15,
    paddingVertical:10,
   },
   gap:{
    gap:15
   },
   distance:{
       justifyContent:"space-between",
       alignItems:'center',
       flexDirection:"row",
       padding:10
   },
   headerContainer:{
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
   }
})