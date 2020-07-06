import React from 'react'
import { View, StyleSheet, Image, ImageBackground,Dimensions, Text } from 'react-native'
import Colors from '../constants/Colors';
import QuantityIncrementer from './QuantityIncrementer';
import FontSizes from '../constants/FontSizes';
import I18n from '../i18n'
const { height, width } = Dimensions.get('window');


const OrderProductItem = props => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row', }}>
                {/* product Image */}
                <View style={styles.imageContainer}>
                    <Image style={styles.ImageStyle} source={props.itemImage} />
                </View>
                <View style={[styles.dataContainer, { alignItems: I18n.locale == 'ar' ? 'flex-end' : 'flex-start' }]}>
                    {/* name */}
                    <Text style={{ fontSize: FontSizes.small, fontWeight: 'bold' }}>{props.productName}</Text>
                    {/* details */}
                    <Text style={styles.detailsText}>{I18n.t('COLOR')}: {props.color}{'\t'}{I18n.t('SIZE')}: {props.size} </Text>
                    <Text style={styles.detailsText}>{I18n.t('SKU')}: {props.sku}</Text>
                    <View style={{ flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row' }}>
                        {/* price */}
                        <View style={{width:'100%', flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row', }}>
                            <Text style={[styles.priceStyle ]}>
                                <Text style={[styles.priceStyle, { color: Colors.dark, fontSize: FontSizes.small }]}>{I18n.t('Price')}: </Text>
                                {props.currency} {props.price}</Text>
                                <View style={{alignSelf:'flex-end',paddingHorizontal:5,marginLeft:'auto'}}>
                            <Text style={[styles.priceStyle,]}>
                                <Text style={[styles.priceStyle, { color: Colors.dark, fontSize: FontSizes.small }]}>{I18n.t('Subtotal')}: </Text>
                                {props.currency} {props.subtotal}</Text>
                                </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderColor: Colors.lightgray,
        borderBottomWidth: 1,

    },
    imageContainer: {
        width: 60,
        height: 55,
        padding:5,
        alignSelf:'center',
        marginHorizontal: 20,
        // flex: 0.2,
        backgroundColor: Colors.tabsBack
    },
    ImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        // backgroundColor: Colors.lightgray,
        
    },
    dataContainer: {
        width:width-110, //70 is width of image container

    },
    detailsText: {
        color: Colors.textGray,
        fontSize: FontSizes.small,
        fontWeight: 'bold'
    },
    QuantityStyle: {
        marginTop: 10
    },
    priceStyle: {
        textAlignVertical: 'bottom',
        color: Colors.lightblue,
        fontWeight: 'bold',
        marginStart: 5,
        marginEnd: 5
    }

});
export default OrderProductItem