/*eslint-disable*/
import React,{useState} from 'react'
import { StyleSheet ,View,Image,TouchableOpacity} from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import { Link } from '@react-navigation/native'
import VerticalSeperator from '../seperator/VerticalSeperator'
export default function KeyHighlights() {
    const [open, setopen] = useState(0)
    const handleChange=()=>{   
        if(open==1){
            setopen(0)
        }else{
            setopen(1)
        }
    } 
const data={
totalAssetValue:'1,72,22,520',
shareType:'LLP Ownershipe',
holdingCompany:'RYZHL-GOA-01'
}
return (
<View style={style().card}>
<View style={style().header}>
<CustomText topic={'Key Highlights'} color={lightColors.text.secondary} fontSize={20} fontWeight={'bold'}></CustomText>
<TouchableOpacity onPress={handleChange}>
        {open==1&&<Image style={style().icon} source={require('../../assets/images/up.png')}></Image>}
        {open==0&&<Image style={style().icon} source={require('../../assets/images/down.png')}></Image>}
</TouchableOpacity>
</View>
<VerticalSeperator height={10}/>

{open==1&&<View style={style().container}>
<View style={[style().subContainer,style().border]}>
<CustomText topic={'Total Asset Value'} color={lightColors.text.primary} fontSize={12} fontWeight={'normal'}/>
<CustomText topic={data.totalAssetValue} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>

<Link to={''} style={{textDecorationLine:'underline'}} ><CustomText   topic={'Know more'} color={lightColors.text.primary} fontSize={12} fontWeight={'normal'}/></Link>
</View>
<View style={[style().subContainer,style().border]}>
<CustomText topic={'Share type'} color={lightColors.text.primary} fontSize={12} fontWeight={'normal'}/>
<CustomText topic={data.shareType} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>
<Link to={''} style={{textDecorationLine:'underline'}} ><CustomText   topic={'Know more'} color={lightColors.text.primary} fontSize={12} fontWeight={'normal'}/></Link>
</View>
<View style={style().subContainer}>
<CustomText topic={'Holding Company'} color={lightColors.text.primary} fontSize={12} fontWeight={'normal'}/>
<CustomText topic={data.holdingCompany} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>
<Link to={''} style={{textDecorationLine:'underline'}} ><CustomText   topic={'Know more'} color={lightColors.text.primary} fontSize={12} fontWeight={'normal'}/></Link>
</View>
</View>
}
</View>
)
}
const style=()=>StyleSheet.create({
card:{
width:"100%",
borderRadius:20,
borderColor:lightColors.border.primary,
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
tintColor:lightColors.icon.primary
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
borderColor:lightColors.border.secondary,
borderRightWidth:1,
paddingRight:10
},
itemSeperator:{
height:10
}
})
