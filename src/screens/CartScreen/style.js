import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light,

    //   padding:10
  },
  footerStyle: {
    position: 'absolute',
    backgroundColor: Colors.light,
    width: '100%',
    bottom: 0,
    height: '17%',

    borderTopWidth:2,
    borderColor:Colors.lightgray,
    padding: 20,
    shadowColor: Colors.lightgray,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 5.78,
    
    elevation: 5,
  },
  priceStyle: {
    // textAlignVertical:'center',
    color: Colors.lightblue,
    fontWeight: 'bold',
    //  marginStart: 5,
  }
});

export default Style;