import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.light
    },
    headerStyle:{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
        elevation:1000,
    },
    bar: {
        marginTop: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
      },
    
});

export default Style;