import React from 'react';
import {
  StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import MainStackNavigator from './src/navigations/index';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigations/NavigationService';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from "./src/constants/Colors";
// import { Provider } from 'react-redux';

// import configureStore from './src/store/StoreConfiguration';
// import initialState from './src/store/initialState';

// const store = configureStore(initialState);

export default function App(){
console.disableYellowBox=true;
 return( 
   <>
 <StatusBar barStyle="light-content"  backgroundColor={Colors.dark} />
      {/* <SafeAreaView> */}
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
      {/* </SafeAreaView> */}
      </>
 )   
};

