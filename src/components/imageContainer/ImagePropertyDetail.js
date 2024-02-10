/*eslint-disable*/
import { View,Image, ImageBackground, StyleSheet,Text, StatusBar,TouchableOpacity } from 'react-native'
import { lightColors } from '../../theme/color'

export default function ImagePropertyDetail({data,navigation}) {
    const goBack=()=>{
        navigation.goBack()
    }
  return (
    <View >
    <View style={styles().innerContainer}>
    <ImageBackground imageStyle={{borderRadius:30}} source={{uri:data.image}} style={styles().imageBackground} resizeMode='cover'>
    <View style={styles().upperBox}>
    <TouchableOpacity onPress={goBack}>
     <Image source={require('../../assets/images/back.png')}></Image>
     </TouchableOpacity>
     <View style={styles().innerBox}>
     <TouchableOpacity>
        <Image style={styles('white').image} source={require('../../assets/images/save.png')}></Image>
      </TouchableOpacity>
     <TouchableOpacity>
        <Image source={require('../../assets/images/share.png')}></Image>
      </TouchableOpacity>
    </View>
  </View>
  <View style={styles().lowerBox}>
  <View>
  <TouchableOpacity style={styles().viewContainers}>
    <Image tintColor={lightColors.border} source={require('../../assets/images/360view.png')}></Image>
  </TouchableOpacity>
  <Text style={textStyle(10,'grey','normal').text}>View 360°</Text>
</View>
<View>
  <TouchableOpacity style={styles().viewContainers}>
     <Image tintColor={lightColors.border} source={require('../../assets/images/playVideo.png')}></Image>
  </TouchableOpacity>
  <Text style={textStyle(10,'grey','normal').text}>Play Video</Text>
  </View>
  </View>
    </ImageBackground>
    </View>
    </View>
  )
}
const styles=(tintColor)=>StyleSheet.create({
    
    innerContainer:{
        
     height:325
    },
    imageBackground:{
      flex:1,
      paddingTop:StatusBar.currentHeight+10,
      paddingHorizontal:20,
      justifyContent:"space-between",
      // position:"relative",
      resizeMode:'cover'
      
    },
    upperBox:{
      alignItems:"flex-start",
      justifyContent:'space-between',
      flexDirection:"row",
      height:"90%"
    },
    innerBox:{
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:"center",
      width:60
    },
    image:{
     tintColor 
    },
    viewContainers:{
      backgroundColor:"white",
      borderRadius:100,
      borderWidth:1,
      marginRight:15,
      justifyContent:'center',
      alignItems:"center",
      padding:5
    },
    lowerBox:{
      justifyContent:"flex-end",
      alignItems:"flex-end",
      flexDirection:"row"
    }
  })
  const textStyle=(fontSize,color,fontWeight)=>StyleSheet.create({
    text:{
      fontSize,
      fontWeight,
      color
    }
  })
  