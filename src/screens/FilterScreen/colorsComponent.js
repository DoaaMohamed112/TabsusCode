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


const { height, width } = Dimensions.get('window');

const ColorComponent = props => {

    return (
        <View style={Style.container}>
            <Text style={Style.title}>{I18n.t('selectColor')}</Text>

            <FlatList
                data={props.colors}
                showsHorizontalScrollIndicator={false}
                numColumns={3}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.handleColorSelection(item)}
                        style={[Style.colorCircle, { backgroundColor: item }]}>
                        {props.selectedColors.findIndex(i => i == item) != -1 ? (
                            <IconButton size={25} color={Colors.light} icon="check" />
                        ) : null}
                    </TouchableOpacity>
                )}
            />
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
    },
    colorCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 10,
        marginVertical: 20,
      },
      colorSetTitle: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingTop: 20,
      },
});

export default ColorComponent;