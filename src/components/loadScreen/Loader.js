/*eslint-disable*/
import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3498db" />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
