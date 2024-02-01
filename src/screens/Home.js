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
const Home = () => {
  const [data, setdata] = useState([
    {
      image:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
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
      image:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
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
    <ScrollView>
    <View horizontal>
      {data&&
      <FlatList
       data={data}
       horizontal
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=><HorizontalCard data={item}/>}
      ></FlatList>
      }
      </View>
      <View style={{flex:1}}>
      <FlatList
       data={data}
       ItemSeparatorComponent={()=>(<View style={{height:5}}></View>)}
       renderItem={({})=>(<VerticalCards/>)}
      ></FlatList>
      </View>
      <View style={{height:80}}/>
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
    paddingBottom:10
  }
});

export default Home;
