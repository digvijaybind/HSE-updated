/*eslint-disable*/
import React, {useState,useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Switch,
} from 'react-native';
import 'react-native-gesture-handler';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Button from './src/components/button/Button';
import LoadScreen from './src/screens/LoaderScreen';
import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import AppNavigator from './src/navigation/AppNavigator';
const Stack = createStackNavigator();
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDark, setIsDark] = useState(isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDark ? '#000000' : '#ffffff',
    color: isDark ? '#ffffff' : '#000000',
  };

  const Smapledemo = () => {
    console.log('hii');
  };

  const handlePress = () => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        return console.log(json.movies);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{flex:1}}>
    <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

      {/* <Text>hiiir</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40',
        }}>
        <Button
          onPress={handlePress}
          title="Press Me"
          backgroundColor="#3498db"
          color="#ffffff"
        />
      </View> */}
      {/* <View
        style={{
          flex: 1,
          backgroundColor: isDark ? 'black' : 'white',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Switch value={isDark} onValueChange={val => setIsDark(val)} />
        <Text style={styles.container}>App.js</Text>
      </View> */}
      {/* <View style={[styles.container, backgroundStyle]}>
        <Switch value={isDark} onValueChange={val => setIsDark(val)} />
        <Text style={styles.text}>App.js</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
