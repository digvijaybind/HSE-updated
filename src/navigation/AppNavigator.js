/*eslint-disable*/
// AppNavigator.js
import {createStackNavigator} from '@react-navigation/stack';

import LoadScreen from '../screens/LoaderScreen';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import PropertyDetails from '../screens/PropertyDetails';
import KYCVerification from '../screens/KYCVerification';
import SelfieUpload from '../screens/kycVerificationScreens/SelfieUpload';
import AddressProof from '../screens/kycVerificationScreens/AddressProof';
import EmploymentProof from '../screens/kycVerificationScreens/EmploymentProof';
import OtherDocuments from '../screens/kycVerificationScreens/OtherDocuments';
import InvestingScreen from '../screens/InvestingScreen';
import PaymentSummary from '../screens/PaymentSummary';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen  name="Loader" component={LoadScreen} />
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="tabnavigation"  component={DrawerNavigator} />
    <Stack.Screen name='propertyDetail' component={PropertyDetails}/>
    <Stack.Screen name='kyc' component={KYCVerification}/>
    <Stack.Screen name='selfie' component={SelfieUpload}/>
    <Stack.Screen name='addressProof' component={AddressProof}/>
    <Stack.Screen name='employmentProof' component={EmploymentProof}/>
    <Stack.Screen name='otherDocuments' component={OtherDocuments}/>
    <Stack.Screen name='invest' component={InvestingScreen}/>
    <Stack.Screen name='paymentSummary' component={PaymentSummary}/>
  </Stack.Navigator>
);

export default AppNavigator;
