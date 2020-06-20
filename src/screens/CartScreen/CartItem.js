import React from 'react'
import { View, StyleSheet, Image, ImageBackground, Text } from 'react-native'
import Colors from '../../constants/Colors';
import QuantityIncrementer from '../../components/QuantityIncrementer';
import FontSizes from '../../constants/FontSizes';

const CartItem = props => {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* product Image */}
                <View style={styles.imageContainer}> 
                <Image style={styles.ImageStyle}  source={props.itemImage} />
                </View>
                <View style={styles.dataContainer}>
                    {/* name */}
                    <Text>{props.productName}</Text>
                    {/* details */}
                    <Text style={styles.detailsText}>COLOR: {props.color} SIZE: {props.size} </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {/* Incrementer */}
                        <QuantityIncrementer style={styles.QuantityStyle}></QuantityIncrementer>
                        {/* price */}
                        <Text style={styles.priceStyle}>{props.currency} {props.price}</Text>
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
        borderBottomWidth: 1
    },
    imageContainer: {
        width: 50,
        height: 70,
        margin: 10,
        flex: 0.2,
        backgroundColor:Colors.lightgray
    },
    ImageStyle: {
        width: '100%',
        height:'100%',
        resizeMode: 'contain',
        // backgroundColor: Colors.lightgray,

    },
    dataContainer: {
        flex: 0.8
    },
    detailsText: {
        color: Colors.lightgray,
        fontSize: FontSizes.small,
    },
    QuantityStyle: {
        marginTop: 10
    },
    priceStyle:{
        textAlignVertical: 'bottom',
         color: Colors.lightblue, 
         fontWeight: 'bold',
         marginStart: 5
    }

});
export default CartItem