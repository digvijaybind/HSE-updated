import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Home = () => {
  return (
    <View>
      <Text>this is home screen</Text>
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

export default Home;
