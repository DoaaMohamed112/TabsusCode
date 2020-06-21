import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import I18n from '../i18n'

const CategoryBar = (props) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.categoryStyle}>
                <Text style={Styles.text}>{props.title}</Text>
            </View>
            <TouchableOpacity style={Styles.btnStyle} activeOpacity={0.8}>
    <Text style={Styles.text}>{I18n.t('ViewAll')}</Text>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        marginBottom: 20,
        paddingVertical: 10
    },
    categoryStyle: {
        flex: 0.5,
        alignItems: 'flex-start'
    },
    btnStyle: {
        flex: 0.5,
        alignItems: 'flex-end'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default CategoryBar;