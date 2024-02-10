/*eslint-disable*/
// AppNavigator.js
import {createStackNavigator} from '@react-navigation/stack';

import LoadScreen from '../screens/LoaderScreen';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import PropertyDetails from '../screens/PropertyDetails';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen  name="Loader" component={LoadScreen} />
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="tabnavigation"  component={DrawerNavigator} />
    <Stack.Screen name='propertyDetail' component={PropertyDetails}/>
  </Stack.Navigator>
);

export default AppNavigator;
