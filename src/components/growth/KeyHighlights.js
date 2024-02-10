/*eslint-disable*/
import React from 'react'
import { StyleSheet ,View,Image,TouchableOpacity} from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import { Link } from '@react-navigation/native'
export default function KeyHighlights() {
    const data={
        totalAssetValue:'1,72,22,520',
        shareType:'LLP Ownershipe',
        holdingCompany:'RYZHL-GOA-01'
    }
  return (
    <View style={style().card}>
      <View style={style().header}>
       <CustomText topic={'Key Highlights'} color={'black'} fontSize={20} fontWeight={'bold'}></CustomText>
       <TouchableOpacity>
       <Image style={style().icon} source={require('../../assets/images/up.png')} ></Image>
      </TouchableOpacity>
       </View>
       <View style={style().itemSeperator}></View>
       <View style={style().container}>
         <View style={[style().subContainer,style().border]}>
         <CustomText topic={'Total Asset Value'} color={lightColors.button} fontSize={12} fontWeight={'normal'}/>
         <CustomText topic={data.totalAssetValue} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
         
        <Link to={''} style={{textDecorationLine:'underline'}} ><CustomText   topic={'Know more'} color={lightColors.button} fontSize={12} fontWeight={'normal'}/></Link>
         </View>
         <View style={[style().subContainer,style().border]}>
         <CustomText topic={'Share type'} color={lightColors.button} fontSize={12} fontWeight={'normal'}/>
         <CustomText topic={data.shareType} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
        <Link to={''} style={{textDecorationLine:'underline'}} ><CustomText   topic={'Know more'} color={lightColors.button} fontSize={12} fontWeight={'normal'}/></Link>
         </View>
         <View style={style().subContainer}>
         <CustomText topic={'Holding Company'} color={lightColors.button} fontSize={12} fontWeight={'normal'}/>
         <CustomText topic={data.holdingCompany} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
        <Link to={''} style={{textDecorationLine:'underline'}} ><CustomText   topic={'Know more'} color={lightColors.button} fontSize={12} fontWeight={'normal'}/></Link>
         </View>
       </View>
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
    paddingBottom:20,
    backgroundColor:'azure'
 },
 header:{
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
 },
 icon:{
    height:25,
    width:25,
    tintColor:lightColors.button
},
container:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
},
subContainer:{
    justifyContent:"center",
    alignItems:'center',

},
border:{
    borderColor:"black",
    borderRightWidth:1,
    paddingRight:10
},
itemSeperator:{
    height:10
}
})
