/*eslint-disable*/
import React,{useState} from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView,SafeAreaView} from 'react-native';
import HorizontalCard from '../components/cards/HorizontalCard';
import VerticalCards from '../components/cards/VerticalCards';
import FilterTags from '../components/tags/FilterTags';
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
  const tags=['Residential','Commercial','Affordable','Vacational','Exchange']
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <FilterTags data={tags}></FilterTags>
    <View horizontal>
      {data&&
      <FlatList
       data={data}
       horizontal
       overScrollMode='always'
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
     height:"100%"
  },
});

export default Home;
