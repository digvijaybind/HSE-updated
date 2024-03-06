/*eslint-disable*/
import React from 'react'
import { StyleSheet, View, TouchableOpacity,Image, Modal } from 'react-native'
import EmptyContainer from '../container/EmptyContainer'
import CustomText from '../text/CustomText'
import { lightColors } from '../../theme/color'
import EnterAmount from '../modal/EnterAmount'

export default function InvestingInfoCard({assetId,amount,ownershipPercent,avgGrowth}) {
    const element=(
        <View style={style().container}>
        <Modal visible transparent >
          <EnterAmount/>
        </Modal>
        <View style={style().header}>
          <CustomText topic={`Asset ID : ${assetId}`} color={lightColors.text.secondary} fontSize={18} fontWeight={'bold'}/>
          <TouchableOpacity style={style().editContainer}>
              <CustomText color={'black'} fontWeight={'bold'} topic={'Edit'}/>
              <Image style={style().icon} source={require('../../assets/images/pencil.png')}/>
          </TouchableOpacity>
        </View>
        <View style={style().rowFlex}>
          <CustomText topic={" • You're going to invest"} color={lightColors.text.secondary} fontSize={15} fontWeight={'bold'}  />
          <CustomText topic={`₹ ${amount}`} color={lightColors.text.secondary} fontSize={15} fontWeight={'bold'}  />
        </View>
        <View style={style().rowFlex}>
          <CustomText topic={" • Ownership percentage"} color={lightColors.text.secondary} fontSize={15} fontWeight={'bold'}  />
          <CustomText topic={`${ownershipPercent}%`} color={lightColors.text.secondary} fontSize={15} fontWeight={'bold'}  />
        </View>
        <View style={style().rowFlex}>
          <CustomText topic={" • Average Growth"} color={lightColors.text.secondary} fontSize={15} fontWeight={'bold'}  />
          <View style={style().rowFlex} >
          <Image style={style().icon1} source={require('../../assets/images/triangle.png')}/>
          <CustomText topic={`${avgGrowth}%`} color={lightColors.text.primary} fontSize={15} fontWeight={'bold'}  />
          </View>
        </View>
     </View>
    )
  return (
     <EmptyContainer padding={15} borderColor={lightColors.border.primary} elements={element}/>
  )
}
const style=()=>StyleSheet.create({
    
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems :"center",
    },
    editContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:2
    },
    container:{
       gap:10
    },
    rowFlex:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    icon1:{
        tintColor:lightColors.icon.primary,
        height:15,
        width:15,
        marginRight:2
    },
    icon:{
        tintColor:lightColors.icon.primary
    }
})