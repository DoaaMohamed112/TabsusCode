import React from 'react';
import {
  StatusBar,
  AppRegistry
} from 'react-native';

import 'react-native-gesture-handler';
import MainStackNavigator from './src/navigations/index';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigations/NavigationService';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from "./src/constants/Colors";
import { Provider as PaperProvider } from 'react-native-paper';

import configureStore from './src/store/StoreConfiguration';
import initialState from './src/store/initialState';
import { Provider } from 'react-redux';

const store = configureStore(initialState);


export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      {/* <SafeAreaView> */}
      <PaperProvider>
        <NavigationContainer ref={navigationRef}>
          <MainStackNavigator />
        </NavigationContainer>
      </PaperProvider>
      {/* </SafeAreaView> */}
    </Provider>
  )
};


AppRegistry.registerComponent("Tabsus", () => App);
