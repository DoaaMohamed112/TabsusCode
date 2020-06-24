import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

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
import SideBar from '../components/SideBar';
import { IconButton } from 'react-native-paper';
import ImagesPaths from '../constants/ImagesPaths';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerNavigator() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <SideBar {...props} />}
        drawerStyle={{width:'80%'}}
      >
         <Drawer.Screen
          name="Home"
          component={TabsNavigator}
          options={{
            drawerLabel: "Home",
          }}
        />
       
      </Drawer.Navigator>
    );
  }

function TabsNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? ImagesPaths.home
                  : ImagesPaths.home;
              } else if (route.name === 'Categories') {
                iconName = focused
                ? ImagesPaths.category
                : ImagesPaths.category;
              } else if (route.name === 'Favourite') {
                iconName = focused
                ? ImagesPaths.fav
                : ImagesPaths.fav;
              } else if (route.name === 'account') {
                iconName = focused
                ? ImagesPaths.account
                : ImagesPaths.account;
              }
  
              // You can return any component that you like here!
              return <IconButton  icon={iconName} size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: Colors.darkgray,
            inactiveTintColor: Colors.textGray,
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Categories" component={HomeScreen} />
          <Tab.Screen name="Favourite" component={HomeScreen} />
          <Tab.Screen name="account" component={HomeScreen} />
        </Tab.Navigator>
    );
  }

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >

            <Stack.Screen name="Splash" component={Splash} />

            <Stack.Screen name='VerificationCodeScreen' component={VerificationCodeScreen} />
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
}

const PaymentStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen}/>

            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
            <Stack.Screen name="AddressBookScreen" component={AddressBookScreen}/>
        </Stack.Navigator>
    );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
        
            <Stack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />

            <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
        </Stack.Navigator>
    );
}


export default MainStackNavigator;