import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import FontSizes from '../constants/FontSizes';
import I18n from '../i18n'


const OrderStatus = (props) => {
    return (
        <View style={[Styles.container,props.style]}>
            <View style={{ flexDirection:I18n.locale=='ar'?'row-reverse': 'row' }}>
                <View style={{ flex: 0.8,alignItems:I18n.locale=='ar'?'flex-end':'flex-start' }}>
                    {/* order number */}
                    <Text style={Styles.data}>{props.orderNumber}</Text>
                </View>
                <View style={{ flex: 0.2 }}>
                    {/* status */}
                    <Text style={Styles.statusText}>{props.status}</Text>
                </View>
            </View>
        <View style={{flexDirection:I18n.locale=='ar'?'row-reverse': 'row' ,paddingTop:5 }}>
            {/* date */}
            <View style={{ flex: 0.8 ,alignItems:I18n.locale=='ar'?'flex-end':'flex-start' }}>
            <Text style={[Styles.data, Styles.dataDate]}>{props.date}</Text>
            </View>

            {/* price */}
            <View style={{ flex: 0.2 }}>
            <View style={{ alignItems:I18n.locale=='ar'?'flex-start' : 'flex-end' }}>
                <Text style={Styles.priceStyle}>EG 20</Text>
            </View>
            </View>

        </View>
        </View >
    );
}

const Styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.textGray,
        borderRadius: 5,
    },
    data: {
        fontWeight: 'bold',

    },
    dataDate: {
        color: Colors.textGray,
    },
    statusText: {
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 5,
        color: Colors.light,
        textAlign: 'center',
        fontSize: FontSizes.small,
        textAlignVertical: 'center'
    },
    priceStyle: {
        // textAlignVertical:'center',
        color: Colors.lightblue,
        fontWeight: 'bold',
        //  marginStart: 5,
    }
});

export default OrderStatus;