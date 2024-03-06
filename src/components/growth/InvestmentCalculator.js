/*eslint-disable*/
import React,{useState} from 'react'
import { StyleSheet, View,Text,TouchableOpacity,Image, FlatList } from 'react-native'
import { lightColors } from '../../theme/color'
import CustomText from '../text/CustomText'
import Progress from '../loader/Progress'
import VerticalSeperator from '../seperator/VerticalSeperator'
import HorizontalSeperator from '../seperator/HorizontalSeperator'
export default function InvestmentCalculator() {
    const [year, setyear] = useState('1 Year')
    const [open, setopen] = useState(0)
    const handleChange=()=>{   
        if(open==1){
            setopen(0)
        }else{
            setopen(1)
        }
    } 
    const data={
        thisAsset:'',
        mutualFunds:'',
        sharesAndCrypto:'',
        fixedDeposits:'',
    }
    const years=['1 Year','2 years','3 years','4 years']
   const onHandleChange=(item)=>{
    setyear(item)
   }
  return (
    <View style={style().card}>
          <View style={style().headerContainer}>
     <View style={style().topicContainer}>
        <CustomText topic={'Investment Calculator'} color={lightColors.text.secondary} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity >
        <Image style={style().icon}  source={require('../../assets/images/info.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity onPress={handleChange}>
        {open==1&&<Image style={style().icon2} source={require('../../assets/images/up.png')}></Image>}
        {open==0&&<Image style={style().icon2} source={require('../../assets/images/down.png')}></Image>}
        </TouchableOpacity>
     </View>
     <VerticalSeperator height={10}/>
     {open==1&&<View>
     <View style={style().middleContainer}>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={5}/>
        <View style={style().innerContainer}>
            <CustomText topic={'This Asset'} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,030 X ${data.thisAsset}%`} color={lightColors.text.primary} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={5}/>
       </View>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={5}/>
        <View style={style().innerContainer}>
            <CustomText topic={'Mutual Funds'} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,005 X ${data.mutualFunds}%`} color={lightColors.text.primary} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={5}/>
       </View>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={10}/>
        <View style={style().innerContainer}>
            <CustomText topic={'Shares & Crypto'} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,005 X ${data.sharesAndCrypto}%`} color={lightColors.text.primary} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={5}/>
       </View>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={5}/>
        <View style={style().innerContainer}>
            <CustomText topic={'Fixed Deposits'} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,020 X ${data.fixedDeposits}%`} color={lightColors.text.primary} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={10}/>
       </View>
       
     </View>
     <View style={style().bottomContainer}>
       <CustomText topic={'Select Year'} color={lightColors.text.secondary} fontSize={13} fontWeight={'normal'}/>
       <VerticalSeperator height={5}/>
        <View style={style().center}>
        <FlatList
         horizontal
         
         ItemSeparatorComponent={()=>(<HorizontalSeperator width={10}/>)}
            data={years}
            renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{onHandleChange(item)}} style={style( year.slice(' ')[0]===item.slice(' ')[0]?lightColors.button.secondary:'white').yearSelector}>
           <CustomText topic={item} fontSize={15} color={year.slice(' ')[0]===item.slice(' ')[0]?lightColors.text.tertiary:lightColors.text.primary}  fontWeight={'normal'}/>
          </TouchableOpacity>
     )}
        />
        </View>
        <VerticalSeperator height={20}/>
        <View style={style().center} >
        <CustomText topic={'Investing in fractional real estate involves risk & uncertainities .Projected investment performance is subjected to change based on a variety of factors'} color={lightColors.text.primary} fontSize={8} customStyle={{textDecorationLine:'underline'}}/>
        </View>
     </View>
     </View>}
    </View>
  )
}
const style=(backgroundColor)=>StyleSheet.create({
    card:{
        width:"100%",
        borderRadius:20,
        borderColor:lightColors.border.primary,
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
        tintColor:lightColors.icon.primary
    },
    headerContainer:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row"
    },
    icon2:{
        height:20,
        width:20,
        tintColor:lightColors.icon.primary
    },
    middleContainer:{
        justifyContent:"center",
        alignItems:'center',
        width:"100%"
    },
    innerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    fullWidth:{
        width:"100%"
    },
    itemSeperator:{
        height:10
    },
    center:{
     justifyContent:"center",
     alignItems:"center"
    },
    yearSelector:{
        backgroundColor,
       borderRadius:12,
        borderColor:lightColors.border.primary,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:8,
        paddingHorizontal:10,
    }
})
