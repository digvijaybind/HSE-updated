/*eslint-disable*/
import React,{useState} from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView,SafeAreaView,Image, Dimensions} from 'react-native';
import HorizontalCard from '../components/cards/HorizontalCard';
import VerticalCards from '../components/cards/VerticalCards';
import FilterTags from '../components/tags/FilterTags';
import LocationFilter from '../components/filterOptions/LocationFilter';
import OtherFilters from '../components/filterOptions/OtherFilters';
import KycHomeCard from '../components/kyc/KycHomeCard';
import VerticalSeperator from '../components/seperator/VerticalSeperator';
import { Modal } from 'react-native';
import FilterModal from '../components/modal/FilterModal';
import { darkColors, lightColors } from '../theme/color';
import {ActivityIndicator} from 'react-native-paper';
import { useSelector } from 'react-redux';
import userReducer from '../redux/reducers';

const Home = ({navigation}) => {
  const {darkMode,currency,rate}=useSelector(state=>state.userReducer)
  console.log(Dimensions.get('window').width)
  const [loader, setloader] = useState(false)
  const [data, setdata] = useState([
    {
      image:'https://static3.mansionglobal.com/production/media/article-images/8abd2609e007d3aac3da2a6db70da8c4/large_S1-GW207_DUBAIX_OR_20200723190514.jpg',
      invested:2,
      price:422000000,
      location:"Deira Dubai UAE",
      name:"Dubai Creek Resort -opposite",
      rating:4.7,
      minamount:10000
    },
    {
      image:'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
      invested:2,
      price:42200000,
      location:"Deira Dubai UAE",
      name:"Dubai Creek Resort -opposite",
      rating:4.7,
      minamount:10000
    },
    {
      image:'https://luxury-houses.net/wp-content/uploads/2020/12/Design-Concept-of-the-Most-Outstanding-Mansion-in-Dubai-1.jpg',
      invested:2,
      price:42200000,
      location:"Deira Dubai UAE",
      name:"Dubai Creek Resort -opposite",
      rating:4.7,
      minamount:10000
    }
  ])
  const [filterOpen, setfilterOpen] = useState(false)
  const tags=['Residential','Commercial','Affordable','Rentals','Exchange']
  const invest=(data)=>{
    console.log(data)
    navigation.navigate('invest',{data})
  }
  return (
    <SafeAreaView style={styles(darkMode).container}>
    {loader&&<View style={{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",zIndex:2,position:"absolute"}}>
    <ActivityIndicator color='green' size={'large'}  />
    </View>}
    
    <View style={styles().topContainer}>
    <View style={styles().kyc}>
       <KycHomeCard darkMode={darkMode} navigation={navigation}/>
    </View>
    <View style={styles().filter}>
    <LocationFilter darkMode={darkMode}/>
    <OtherFilters darkMode={darkMode} setloader={setloader} setfilterOpen={setfilterOpen}/>
    </View>
    <FilterTags data={tags}></FilterTags>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles().bottomContainer} horizontal>
      {data&&
       <FlatList
       data={data}
       horizontal
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=><HorizontalCard  currency={currency} rate={rate} onPress={invest} navigation={navigation} data={item}/>}
      ></FlatList> 
      }
      </View>
      <View style={styles().verticalcardContainer}>
      {data&&data.map
      ((item,index)=>
      <VerticalCards currency={currency} rate={rate} key={index} data={item}/>
      )}
      </View>
      <VerticalSeperator height={80}/>
      </ScrollView>
        <Modal transparent visible={filterOpen} animationType='slide' >
        <FilterModal setfilterOpen={setfilterOpen}/> 
        </Modal>
    </SafeAreaView>
  );
};

const styles =(darkMode)=> StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:darkMode?darkColors.background.primary:lightColors.background.primary,
    paddingTop:10
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
