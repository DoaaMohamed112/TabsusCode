import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'

const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      backgroundColor:Colors.light,
    //   padding:10
    },
    bodyContainer:{
      // paddingHorizontal:20,
      // paddingTop:50,
      marginBottom:150, //footer height
      width:'100%',
    },
    title: {
      color: Colors.dark,
      fontWeight:'bold',
      marginBottom:10,
      paddingVertical:10
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5
  },
 
   footerStyle: {
    position: 'absolute',
    backgroundColor: Colors.backGray,
    width: '100%',
    bottom: 0,
    height: 150,
    borderTopWidth:2,
    borderColor:Colors.lightgray,
    paddingVertical: 10,
    shadowColor: Colors.lightgray,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 5.78,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    elevation: 5,
  },
  ShippingAddress:{
    paddingHorizontal:20,
    paddingBottom:10
  },
  footerTextStyle:{
    flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row' ,
    marginBottom:10,
    paddingHorizontal:20
  },
  totalSummation:{
    borderTopColor:Colors.textGray,
    borderTopWidth:1,
    width:'100%',
    paddingVertical:20
  }
});

export default Style;