import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/SplashScreen';
import Welcome from '../screens/WelcomeScreen';
import Notifications from '../screens/NotificationsScreen'
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationCodeScreen from '../screens/VerificationCodeScreen';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/SearchScreen';
import AddressBookScreen from '../screens/ِAddressBookScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';
const Stack = createStackNavigator();


// const AuthStackNavigator = () => {
//     return (
//         <Stack.Navigator headerMode="none" >
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="SignUp" component={SignUp} />
//             <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//             <Stack.Screen name="ChangePassword" component={ChangePassword} />
//         </Stack.Navigator>
//     );
// }

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notifications" component={Notifications}/>
            <Stack.Screen name="CartScreen" component={CartScreen}/>
            <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        </Stack.Navigator>
    );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen}/>

            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
            <Stack.Screen name="AddressBookScreen" component={AddressBookScreen}/>
            <Stack.Screen name="Splash" component={Splash} />
      
             <Stack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
            <Stack.Screen name='VerificationCodeScreen' component={VerificationCodeScreen}/>
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
           {/* <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} /> */}
        </Stack.Navigator>
    );
}


export default MainStackNavigator;