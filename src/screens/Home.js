/*eslint-disable*/
import React,{useState} from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView,SafeAreaView,Image} from 'react-native';
import HorizontalCard from '../components/cards/HorizontalCard';
import VerticalCards from '../components/cards/VerticalCards';
import FilterTags from '../components/tags/FilterTags';
import LocationFilter from '../components/filterOptions/LocationFilter';
import { Dropdown } from 'react-native-element-dropdown';
import CountryFlag from 'react-native-country-flag';
import OtherFilters from '../components/filterOptions/OtherFilters';
import CurrencyFilter from '../components/filterOptions/CurrencyFilter';
import KycHomeCard from '../components/kyc/KycHomeCard';
import VerticalSeperator from '../components/seperator/VerticalSeperator';
const Home = ({navigation}) => {
  const [data, setdata] = useState([
    {
      image:'https://static3.mansionglobal.com/production/media/article-images/8abd2609e007d3aac3da2a6db70da8c4/large_S1-GW207_DUBAIX_OR_20200723190514.jpg',
      invested:2,
      price:"4,22,00,000",
      location:"Deira Dubai UAE",
      name:"Dubai Creek Resort -opposite",
      rating:4.7,
    },
    {
      image:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
      invested:2,
      price:"4,22,00,000",
      location:"Deira Dubai UAE",
      name:"Dubai Creek Resort -opposite",
      rating:4.7,
    },
    {
      image:'https://luxury-houses.net/wp-content/uploads/2020/12/Design-Concept-of-the-Most-Outstanding-Mansion-in-Dubai-1.jpg',
      invested:2,
      price:"4,22,00,000",
      location:"Deira Dubai UAE",
      name:"Dubai Creek Resort -opposite",
      rating:4.7,
    }
  ])
  const [conutry, setconutry] = useState('')
  const tags=['Residential','Commercial','Affordable','Vacational','Exchange']
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.topContainer}>
    <View style={styles.kyc}>
       <KycHomeCard/>
    </View>
    <View style={styles.filter}>
    <LocationFilter/>
    <OtherFilters/>
    </View>
    <FilterTags data={tags}></FilterTags>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.bottomContainer} horizontal>
      {data&&
       <FlatList
       data={data}
       horizontal
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=><HorizontalCard navigation={navigation} data={item}/>}
      ></FlatList> 
      }
      </View>
      <View style={styles.verticalcardContainer}>
      {data&&data.map
      ((item,index)=>
      <VerticalCards key={index} data={item}/>
      )}
      </View>
      <VerticalSeperator height={80}/>
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    // height:"100%",
    backgroundColor:'white',
},
  filter:{
    padding:10, 
    flexDirection:'row',
    justifyContent:"space-between"
  },
  kyc:{
    paddingHorizontal:20,
    width:"100%"
  },
  topContainer:{
    paddingBottom:10,
  },
  bottomContainer:{
   position:"relative"
  },
  verticalcardContainer:{
    flex:1,
    gap:10
  }
});

export default Home;
