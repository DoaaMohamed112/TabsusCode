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
import { IconButton } from 'react-native-paper';
import RangeSlider from 'rn-range-slider';


const { height, width } = Dimensions.get('window');

const PriceComponent = props => {
    const  [priceRange, setPriceRange] = useState({ rangeLow: 0, rangeHigh: 1000 })

    return (
        <View style={Style.container}>
            <View style={Style.titleContainer}>
                <View style={Style.lefttextContainer}>
                    <Text style={Style.fromText}>From</Text>
                    <Text style={[Style.fromText, { color: Colors.lightblue }]}>{'EG'} {priceRange.rangeLow}</Text>
                </View>
                <View style={Style.righttextContainer}>
                    <Text style={Style.toText}>To</Text>
                    <Text style={[Style.toText, { color: Colors.lightblue }]}>{'EG'} {priceRange.rangeHigh}</Text>
                </View>
            </View>
            <RangeSlider
                    style={Style.rangeSliderStyle}  gravity={'top'} 
                    labelStyle={'none'}  min={200} max={2000} step={10} thumbBorderWidth={10}
                    thumbBorderColor={Colors.thumbColor} thumbColor={Colors.primary} thumbRadius={18} lineWidth={8}
                    selectionColor={Colors.tabsBack} blankColor={Colors.tabsBack}
                    onValueChanged={(low, high, fromUser) => {
                        setPriceRange({ rangeLow: low, rangeHigh: high })
                    }} />
        </View>
    );
}


const Style = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20
    },
    rangeSliderStyle: {
        width: '80%',
        height: 80,
        alignSelf: 'center',
        marginVertical: 10
    },
    titleContainer:{
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
    },
    fromText: {
        // width: '50%',
        textAlign: "center",
        fontWeight: 'bold',
        color: Colors.textGray
    },
    toText: {
        // width: '50%',
        textAlign: "center",
        fontWeight: 'bold',
        color: Colors.textGray
    },
    righttextContainer:{
        marginLeft: 'auto',
    },
    lefttextContainer:{
        marginRight: 'auto',
    }
});

export default PriceComponent;