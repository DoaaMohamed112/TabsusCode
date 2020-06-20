import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
        flex: 1,
    },
    itemContainer: {
        width: width / 2 - 30,
        height: width *0.8,
    },
    bodyContent: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        width: width - 40,
    }
});

export default Style;