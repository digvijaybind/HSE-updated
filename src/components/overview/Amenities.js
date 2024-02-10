/*eslint-disable*/
import React,{useEffect,useState} from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import HorizontalSeperator from '../seperator/HorizontalSeperator'
import VerticalSeperator from '../seperator/VerticalSeperator'
export default function Amenities() {
    const [icons, seticons] = useState()
    const getIcons=async()=>{
    let data= [
             {"name":"Gated Community", "url":"https://cdn-icons-png.freepik.com/128/10179/10179557.png"},
             {"name": "Children's Play Area", "url": "https://cdn-icons-png.freepik.com/128/11433/11433993.png"}, 
             {"name": "24X7 Water Supply", "url": "https://cdn-icons-png.freepik.com/128/7644/7644991.png"}, 
             {"name": "Rain Water Harvesting", "url": "https://cdn-icons-png.freepik.com/128/7289/7289963.png"}, 
             {"name": "Power Backup", "url": "https://cdn-icons-png.freepik.com/128/13269/13269998.png"}, 
             {"name": "Car Parking", "url": "https://cdn-icons-png.freepik.com/128/75/75905.png"}, 
             {"name": "Intercom", "url": "https://cdn-icons-png.freepik.com/128/11761/11761567.png"}, 
             {"name": "CCTV", "url": "https://cdn-icons-png.freepik.com/128/2642/2642550.png"}, 
             {"name": "24X7 Security", "url": "https://cdn-icons-png.freepik.com/128/53/53049.png"}]
        seticons(data)
    }
     useEffect(() => {
        getIcons()
     }, [])
    return (
    <View style={style().card}>
    <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={'Amenities'} color={lightColors.text} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity>
        <Image style={style().icon}  source={require('../../assets/images/question.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity>
        <Image style={style().icon2} source={require('../../assets/images/down.png')}></Image>
     </TouchableOpacity>
     </View>
     <VerticalSeperator height={10}/>
     {icons&&<FlatList
        data={icons.length>5&&icons.slice(0,5)}
        style={{width:"100%"}}
        
        ItemSeparatorComponent={()=>(<HorizontalSeperator width={15}/>)}
        horizontal={true}
        renderItem={({item})=>(
        <View style={style().amenityIconContainer}>
         <Image style={style().amenityIcon} source={{uri:item.url}}/>
         <CustomText topic={item.name} fontSize={8} color={lightColors.text} fontWeight={'bold'}></CustomText>
        </View>)}
     />}
     <VerticalSeperator height={10}/>
     {icons&&icons.length>5&&<FlatList
        data={icons.slice(5)}
        style={{width:"100%"}}
        
        ItemSeparatorComponent={()=>(<HorizontalSeperator width={15}/>)}
        horizontal={true}
        renderItem={({item})=>(
        <View style={style().amenityIconContainer}>
         <Image style={style().amenityIcon} source={{uri:item.url}}/>
         <CustomText topic={item.name} fontSize={8} color={lightColors.text} fontWeight={'bold'} ></CustomText>
        </View>)}
     />}
     </View>
  )
}
const style=()=>StyleSheet.create({
    card:{
        width:"100%",
        borderRadius:20,
        borderColor:lightColors.button,
        borderWidth:1,
        padding:10,
        paddingBottom:15,
        backgroundColor:'azure'
    },
    topicContainer:{
        flexDirection:'row',
        alignItems:'center',
        
        },
    icon:{
        height:30,
        width:30,
        tintColor:lightColors.button
    },
    headerContainer:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row"
    },
    icon2:{
        height:20,
        width:20,
        tintColor:lightColors.button
    },
    fullWidth:{
        width:"100%"
    },
    amenityIcon:{
        height:15,
        width:15
    },
    amenityIconContainer:{
        height:40,
        width:50,
        justifyContent:"center",
        alignItems:"center"
    }
})