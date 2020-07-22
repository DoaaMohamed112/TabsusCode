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
        height: width *0.6,
        
        
    },
    bodyContent: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        width: width - 20,

    },
    imgStyle: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
      },
      imgContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: Colors.backGray,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '10%',
      },
      title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop:10
      },
});

export default Style;