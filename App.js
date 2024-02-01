/*eslint-disable*/
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
 
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
    <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}
export default App;
