import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    Container: {
      width:'50%',
      height:'100%',
      resizeMode:'contain',
      alignSelf:'center',
    },
    ImageStyle:{
      resizeMode:'contain',
      width:'100%'
    }
});

export default Style;