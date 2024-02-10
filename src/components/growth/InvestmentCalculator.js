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
        <CustomText topic={'Investment Calculator'} color={lightColors.text} fontSize={20} fontWeight={'bold'}/>
        <TouchableOpacity>
        <Image style={style().icon}  source={require('../../assets/images/info.png')}></Image>
        </TouchableOpacity>
     </View>
     <TouchableOpacity>
        <Image style={style().icon2} source={require('../../assets/images/up.png')}></Image>
     </TouchableOpacity>
     </View>
     <VerticalSeperator height={10}/>
     <View style={style().middleContainer}>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={5}/>
        <View style={style().innerContainer}>
            <CustomText topic={'This Asset'} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,030 X ${data.thisAsset}%`} color={lightColors.button} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={5}/>
       </View>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={5}/>
        <View style={style().innerContainer}>
            <CustomText topic={'Mutual Funds'} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,005 X ${data.mutualFunds}%`} color={lightColors.button} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={5}/>
       </View>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={10}/>
        <View style={style().innerContainer}>
            <CustomText topic={'Shares & Crypto'} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,005 X ${data.sharesAndCrypto}%`} color={lightColors.button} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={5}/>
       </View>
       <View style={style().fullWidth}>
        <Progress value={2}/>
        <VerticalSeperator height={5}/>
        <View style={style().innerContainer}>
            <CustomText topic={'Fixed Deposits'} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
            <CustomText topic={`₹ 10,020 X ${data.fixedDeposits}%`} color={lightColors.button} fontSize={13} fontWeight={'normal'}/>
        </View>
        <VerticalSeperator height={10}/>
       </View>
       
     </View>
     <View style={style().bottomContainer}>
       <CustomText topic={'Select Year'} color={lightColors.text} fontSize={13} fontWeight={'normal'}/>
       <VerticalSeperator height={5}/>
        <View style={style().center}>
        <FlatList
         horizontal
         
         ItemSeparatorComponent={()=>(<HorizontalSeperator width={10}/>)}
            data={years}
            renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{onHandleChange(item)}} style={style( year.slice(' ')[0]===item.slice(' ')[0]?lightColors.button:'white').yearSelector}>
           <CustomText topic={item} fontSize={15} color={year.slice(' ')[0]===item.slice(' ')[0]?'white':lightColors.button}  fontWeight={'normal'}/>
          </TouchableOpacity>
     )}
        />
        </View>
        <VerticalSeperator height={20}/>
        <View style={style().center} >
        <CustomText topic={'Investing in fractional real estate involves risk & uncertainities .Projected investment performance is subjected to change based on a variety of factors'} color={lightColors.button} fontSize={8} customStyle={{textDecorationLine:'underline'}}/>
        </View>
     </View>
    </View>
  )
}
const style=(backgroundColor)=>StyleSheet.create({
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
        borderColor:lightColors.border,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:8,
        paddingHorizontal:10,
    }
})
