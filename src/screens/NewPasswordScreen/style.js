import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      backgroundColor:Colors.light,
    //   padding:10
    },
    bodyContainer:{
      paddingHorizontal:20,
      width:'100%',
      height:height-70 , //70 is the height of header,
      // justifyContent:'center'
      marginTop:50
    },
    title: {
      color: Colors.textGray,
      marginBottom:10
  },
  inputTextStyle: {
      width: '100%',
      height:50,
      // marginBottom: 20
  },
  textStyle:{
    marginTop: 20
},
errorStyle: {
    fontSize: 12,
    color: Colors.error,
    marginTop: 10
},
});

export default Style;