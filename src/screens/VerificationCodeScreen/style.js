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
      justifyContent:'center'
    },
    title: {
      color: Colors.textGray,
      marginBottom:10
  },
  inputTextStyle: {
      width: '100%',
      marginBottom: 20
  },
  // root: {flex: 1, padding: 10},

  codeFieldRoot: {marginTop: 0,marginHorizontal:10},
  cell: {
    width: 60,
    height: 50,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 2,
    borderRadius:5,
    borderColor: '#00000030',
    textAlign: 'center',
        
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default Style;