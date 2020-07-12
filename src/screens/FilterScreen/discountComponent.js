import React, { useEffect, useState } from 'react';
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import RadioButtonGroup from '../../components/RadioButtonGroup';


const { height, width } = Dimensions.get('window');

const DiscountComponent = props => {

    return (
        <View style={Style.container}>
            <Text style={Style.title}>{I18n.t('discountQuestion')}</Text>

            <RadioButtonGroup reverse selectedItem={props.selectedItem} handleChange={(selected) => props.onChange(selected)} labels={['YES', 'NO']}></RadioButtonGroup>

        </View>
    );
}


const Style = StyleSheet.create({
    container: {
        width: '100%',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
});

export default DiscountComponent;