import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Loader from '../components/loadScreen/Loader';
import {useNavigation} from '@react-navigation/native';

const LoadScreen = ({navigation}) => {
  // const navigation = useNavigation();
  useEffect(() => {
    // Simulate loading tasks
    setTimeout(() => {
      navigation.navigate('tabnavigation'); // Navigate to the Home screen after loading tasks
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.TextContainer}>Loading...</Text>
      <Loader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextContainer: {
    color: 'black',

  },
});

export default LoadScreen;
