
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light
    },
    bodyContent: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        width: '100%'
    },
    title: {
        color: Colors.textGray,
        fontSize: 15,
        textAlignVertical: "center",
        alignSelf: 'center'
    }
});

export default Style;