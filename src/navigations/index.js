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
import AddressBookScreen from '../screens/AddressBookScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';
import SideBar from '../components/SideBar';
import { IconButton } from 'react-native-paper';
import ImagesPaths from '../constants/ImagesPaths';
import Colors from '../constants/Colors';
import ProductScreen from '../screens/ProductScreen';
import SignupScreen from '../screens/SignupScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import CheckoutFinishScreen from '../screens/CheckoutFinishScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';
import WishListScreen from '../screens/WishListScreen'
import WalletScreen from '../screens/WalletScreen';
import AccountScreen from '../screens/AccountScreen';
import FilterScreen from '../screens/FilterScreen';
import AccountInfoScreen from '../screens/AccountInfoScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReturnsConditionsScreen from '../screens/ReturnsConditionsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import ContactScreen from '../screens/ContactScreen';
import FAQScreen from '../screens/FaqScreen';
import PointsVouchersScreen from '../screens/PointsVouchersScreen';
import ReviewOrderScreen from '../screens/ReviewOrderScreen';
import ReturnsScreen from '../screens/ReturnsScreen';
import AddReturnScreen from '../screens/AddReturnScreen';
import AddressbookListScreen from '../screens/AddressbookListScreen';
import OrdersScreen from '../screens/OrdersScreen';

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
         <Drawer.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{
            drawerLabel: "Home",
          }}
        />
         <Drawer.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            drawerLabel: "Settings",
          }}
        />
         <Drawer.Screen
          name="ReturnsConditionsScreen"
          component={ReturnsConditionsScreen}
          options={{
            drawerLabel: "Returns and Refund",
          }}
        />
         <Drawer.Screen
          name="TermsConditionsScreen"
          component={TermsConditionsScreen}
          options={{
            drawerLabel: "Terms & Conditions",
          }}
        />
         <Drawer.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{
            drawerLabel: "Feedback to improve us",
          }}
        />
         <Drawer.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{
            drawerLabel: "Contact Us",
          }}
        />
         <Drawer.Screen
          name="FAQScreen"
          component={FAQScreen}
          options={{
            drawerLabel: "FAQ",
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
              } else if (route.name === 'Wish list') {
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
          <Tab.Screen name="Categories" component={CategoryStackNavigator} />
          <Tab.Screen name="Wish list" component={WishListScreen} />
          <Tab.Screen name="account" component={AccountScreen} />
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
            <Stack.Screen name="SigupScreen" component={SignupScreen} />
            {/* <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} /> */}
            {/* <Stack.Screen name="TermsConditionsScreen" component={TermsConditionsScreen} /> */}


        </Stack.Navigator>
    );
}

const CategoryStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
               <Tab.Screen name="Categories" component={CategoriesScreen} />
               <Tab.Screen name="CategoryItems" component={CategoryItemsScreen} />
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
            <Stack.Screen name="ProductStackNavigator" component={ProductStackNavigator} />
            <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
            <Stack.Screen name="AddressBookScreen" component={AddressBookScreen}/>
            <Stack.Screen name="CheckoutFinishScreen" component={CheckoutFinishScreen}/>
            <Stack.Screen name="PaymentScreen" component={PaymentScreen}/>
            <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen}/>
            <Stack.Screen name="ReviewOrderScreen" component={ReviewOrderScreen}/>
            <Stack.Screen name="WalletScreen" component={WalletScreen}/>
            <Stack.Screen name="PointsVouchersScreen" component={PointsVouchersScreen}/>
            <Stack.Screen name="AccountInfoScreen" component={AccountInfoScreen}/>
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
            <Stack.Screen name="ReturnsStackNavigator" component={ReturnsStackNavigator} />
            <Stack.Screen name="AddressbookListScreen" component={AddressbookListScreen} />
            <Stack.Screen name="OrdersScreen" component={OrdersScreen} />


        </Stack.Navigator>
    );
}

const PaymentStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
        </Stack.Navigator>
    );
}
const ReturnsStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="ReturnsScreen" component={ReturnsScreen} />
            <Stack.Screen name="AddReturnScreen" component={AddReturnScreen} />
        </Stack.Navigator>
    );
}

const ProductStackNavigator = () => {
  return (
      <Stack.Navigator headerMode="none" >
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
  );
}
const AccountStackNavigator = () => {
  return (
      <Stack.Navigator headerMode="none" >
                    <Stack.Screen name="AccountScreen" component={AccountScreen}/>
            <Stack.Screen name="WalletScreen" component={WalletScreen}/>
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
      </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none" >
            {/* <Stack.Screen name="ReviewOrderScreen" component={ReviewOrderScreen}/> */}
            <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />
            <Stack.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
            {/* <Stack.Screen name="AccountStackNavigator" component={AccountStackNavigator} /> */}
        </Stack.Navigator>
    );
}


export default MainStackNavigator;