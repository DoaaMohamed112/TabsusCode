import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const { height, width } = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light,

  },
  SocialContainer:
  {
      flexDirection:'row',
      borderBottomWidth:2,
      borderColor:Colors.lightgray,
      position:'relative',
      paddingBottom:20
},
  SocialIconContainer:{
      borderColor:Colors.lightgray,
      borderWidth:1,
      borderRadius:50,
      width:50,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      margin:10
  },
  socialIconStyle:{
      resizeMode:'contain'
  },  

  OrStyle:{
    borderRadius:50,
    // width:0,
    // height:60,
    padding:15,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:Colors.light,
    position:'absolute',
    bottom:-20,
    // marginLeft:width*0.45
  }
});

export default Style;