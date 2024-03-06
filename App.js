/*eslint-disable*/
import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { darkColors, lightColors } from './src/theme/color';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
function App() {
  return (
    <View style={{flex:1,backgroundColor:darkColors.background.primary}}>
    <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer >
      {/* <PaperProvider> */}
     <Provider store={Store}>
      <AppNavigator />
      </Provider>
      {/* </PaperProvider> */}
      </NavigationContainer>
      
    </View>
  );
}
export default App;
