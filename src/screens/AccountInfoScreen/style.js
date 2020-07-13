

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
        flex: 1
    },
    socialContainer: {
        flex: 1,
        backgroundColor : Colors.light,
    },
    title: {
        color: Colors.darkgray,
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 30
    },
    accountIconsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 10
    },
    IconStyle: {
        backgroundColor: Colors.facebookColor,
        marginHorizontal: 10
    },
    Icon2ContainerStyle:{
        padding: 10,
        borderColor: Colors.lightgray,
        borderWidth: 1,
        borderRadius: 100,
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    Icon2Style: {
      width: '90%',
      height: '90%',
      resizeMode: 'contain',
    },
    lineStyle:{
        borderTopWidth: 1,
        borderColor: Colors.lightgray,
        marginTop: 35,
        position: 'relative'
    },
    lineTextStyle: {
        fontSize: 18,
        color: Colors.textGray,
        paddingHorizontal: 20,
        backgroundColor: Colors.light,
        position: 'absolute',
        top: -15,
        left: '40%',
    },
    form:{
        paddingHorizontal: 20,
        width: '100%',
        paddingVertical: 20,
    },
    inputStyle: {
        width: '100%',
        height: 50
    },
    textStyle:{
        marginTop: 20
    },
    errorStyle: {
        fontSize: 12,
        color: Colors.error,
        marginTop: 10
    },
    dropdownTitle: {
        color: Colors.textGray,
        fontSize: 15,
        marginTop: 20
      },
});

export default Style;

