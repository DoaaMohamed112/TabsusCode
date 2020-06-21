import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import BlockButton from './BlockButton';


const AdsItem = (props) => {
    return (
        <ImageBackground style={Styles.Container} imageStyle={Styles.ImageStyle} source={{ uri: props.item.img }}>
            <Text style={Styles.text}>{props.item.description}</Text>
            <BlockButton value="SeeMore"  style={Styles.btnStyle} fontStyle={Styles.fontStyle} backColor={Colors.primary}/>
        </ImageBackground>
    );
}

const Styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    ImageStyle: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 20,
        color: Colors.light,
        paddingLeft: 20,
        width: '55%'
    },
    btnStyle: {
       paddingHorizontal: 20,
        alignSelf: 'flex-start',
        marginStart: 20,
        marginTop: 10,
        paddingVertical: 10
    },
    fontStyle:{
        fontSize: 15,
        fontWeight: 'bold'
    }

});

export default AdsItem;