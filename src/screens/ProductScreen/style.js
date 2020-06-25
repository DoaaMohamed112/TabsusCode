import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerStyle:{
        height: 70,
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 2,
        elevation:1,
        alignItems: 'center'

    }
});

export default Style;