import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes'
const {height, width} = Dimensions.get('window');

const Style = StyleSheet.create({
    Container: {
      width:'100%',
      height:'100%',
      flex:1,
      backgroundColor:Colors.backgroundColor,
      alignItems:'center',
      padding:10,
      position:'relative'
    },
    LogoStyle:{
        marginTop:50
    },
    TitleStyle:{
        marginTop:40,
        fontSize:FontSizes.subtitle,
        
        letterSpacing:1
    },
    LangButton:{
        flex:0.5,
        marginHorizontal:10
    }
});

export default Style;