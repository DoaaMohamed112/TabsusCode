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
    headContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderBottomColor: Colors.backGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    camIcon: {
        backgroundColor: Colors.tabsBackground,
        marginStart: 'auto'
    },
    profileContainer:{
        flexDirection: 'row',
        flex: 0.7,
    },
    avatarImg: {
        width: 50,
        height:50,
        // resizeMode: 'contain',
        borderRadius:25
    },
    avatarContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: '80%',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.dark
    },
    email: {
        fontSize: 13,
        color: Colors.textGray
    },
    Content: {
        marginHorizontal: 20,
        marginVertical: '10%',
        backgroundColor: Colors.tabsBack,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 10,
    },
    listItem: {
        color: Colors.textGray,
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 30
    },
});

export default Style;