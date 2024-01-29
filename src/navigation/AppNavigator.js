/*eslint-disable*/
// AppNavigator.js
import {createStackNavigator} from '@react-navigation/stack';

import LoadScreen from '../screens/LoaderScreen';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Loader" component={LoadScreen} />
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="tabnavigation" component={TabNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;
