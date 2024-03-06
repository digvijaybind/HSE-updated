/*eslint-disable*/
import React from 'react'
import { TouchableOpacity ,Image} from 'react-native'
import { lightColors } from '../../theme/color'

export default function GoBackButton({navigation}) {
  return (
    <TouchableOpacity onPress={()=>{navigation.goBack()}} >
         <Image tintColor={lightColors.icon.primary} source={require('../../assets/images/back.png')}/> 
    </TouchableOpacity>
  )
}
