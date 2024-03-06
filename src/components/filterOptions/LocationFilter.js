/*eslint-disable*/
import React ,{useState} from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { View ,Text,StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import CountryFlag from 'react-native-country-flag';
import { darkColors, lightColors } from '../../theme/color';
export default function LocationFilter({darkMode}) {
    const [selected, setSelected] = useState("");
    const [country, setcountry] = useState('')
  const onSelect = (code) => setSelected(code);
  return (
    <Dropdown
    style={style().dropdown}
    selectedTextStyle={style().selectedTextStyle}
    placeholderStyle={style(darkMode).placeholderStyle}
    data={[{label:'India',value:'in',isoCode:'in'},{label:'UAE',value:'ae',isoCode:'ae'}]}
    placeholder={country?country:"Location"}
    labelField={'label'}
    valueField={'value'}
    itemTextStyle={style().itemTextStyle}
    containerStyle={style().containerStyle}
    value={country}
    iconColor={darkMode?darkColors.icon.secondary:lightColors.icon.secondary}
    onChange={item=>{
      setcountry(item.label)
    }}
    renderItem={(item)=>(
    <View style={style().renderItemContainer}>
   <CountryFlag  isoCode={item.isoCode} size={20}/>
   <Text style={style().renderItemText}>{item.label}</Text>
    </View>
    )}
    ></Dropdown>
  )
}
const style=(darkMode)=>StyleSheet.create({
  dropdown:{
      maxWidth:130,
      borderRadius:10,
      paddingHorizontal:5,
      width:"30%",
      minWidth:130
  },
  selectedTextStyle:{
      color:lightColors.text.secondary,
      fontSize:15,
      fontWeight:"bold"
  },
  placeholderStyle:{
      color:darkMode?darkColors.text.secondary:lightColors.text.secondary,
      fontSize:20,
      fontWeight:"bold"
  },
  itemTextStyle:{
      color:lightColors.text.secondary
  },
  containerStyle:{
      borderRadius:10,
      borderColor:lightColors.border.secondary,
      borderWidth:0.5
  },
  renderItemContainer:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      padding:10
  },
  renderItemText:{
      color:lightColors.text.secondary,
      fontSize:15,
      fontWeight:"bold"
  }
})