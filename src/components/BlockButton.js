import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../constants/Colors';
import FontSizes from '../constants/FontSizes';
import { Icon } from 'react-native-elements';

const Styles = StyleSheet.create({
    Container: {
        flex: 0,
        backgroundColor: Color.primary,
        borderRadius: 5,
        paddingVertical: 5,
        // width: '100%',
        borderWidth:2,
        borderColor:Color.primary,
        alignSelf: 'center'
    },

    title: {
        fontSize: FontSizes.subtitle,
        textAlign: 'center',
        letterSpacing: 1,
        color: Color.dark

    },
});

const BlockButton = props => {
    return (
        <View style={[Styles.Container, props.style,{backgroundColor: props.backColor} ]}>
            {/* <TouchableOpacity onPress={props.handleClick}> */}
               { props.iconName!=undefined? <Icon
                    reverse
                    name={props.iconName}
                    type={props.iconType}
                    size={props.size}
                    color={Color.secondary}
                    style={{ ...props.btnStyle }}
                    onPress={props.Clicked}
                    disabled={!props.IsValid}
                />:<></>}
                <Text style={[Styles.title,props.fontStyle]}>{props.value}</Text>
            {/* </TouchableOpacity> */}
        </View>
    );
};

export default BlockButton;

