import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
const SplashScreen = ({navigation}) => {
  // const navigation = useNavigation();
  useEffect(() => {
    // Simulate loading tasks
    setTimeout(() => {
      navigation.navigate('SplashScreen'); // Navigate to the Home screen after loading tasks
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.cotainer}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
