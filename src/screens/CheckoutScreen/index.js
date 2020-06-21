import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import AdressItem from '../../components/AddressItem'
import { RadioButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');

const CheckoutScreen = props => {
    const [deliveryMethod, setDeliveryMethod] = useState('Free')
    useEffect(() => {

        // //get screen dimensions
        // const updateDimensions = () => {
        //     setScreenHeight(Dimensions.get('window').height);
        //     setScreenWidth(Dimensions.get('window').width);
        // }
        // //when orientation of screen changes, get updated width & height
        // Dimensions.addEventListener('change', updateDimensions);
        // return () => {
        //     Dimensions.removeEventListener('change', updateDimensions);
        // }
    });
    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Checkout' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView >
                <View style={Style.bodyContainer}>
                {/* Shipping Address */}
                <Text style={Style.title}>Shipping Address</Text>
                <AdressItem name='hussien mohamed' city='tanta' street='nasr street' mobile='01115492192'></AdressItem>

                {/* button part */}
                <TouchableOpacity style={{ width: '100%', marginTop: 20, marginBottom: '20%' }} >
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} iconSize={25} backColor={Colors.light} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} value='NewAddress'></BlockButton>
                </TouchableOpacity>
              
                {/* Delivery Method */}
                <Text style={{ fontWeight: 'bold' }}>Delivery Method</Text>
                {/* Radio group  */}
                <RadioButton.Group
                    onValueChange={value => setDeliveryMethod(value)}
                    value={deliveryMethod}
                >
                    <View style={Style.radioStyle}>
                        <RadioButton color={Colors.primary} value="Free" />
                        <Text style={Style.radioText}>Free Delivery</Text>
                    </View>
                    <View style={Style.radioStyle}>
                        <RadioButton style={{backgroundColor:Colors.textGray}} color={Colors.primary} value="Express" />
                        <Text style={Style.radioText}>Express Delivery</Text>
                    </View>
                </RadioButton.Group>
                
                </View>
                
                <View></View>
            </ScrollView>
        </View>
    );
}


export default CheckoutScreen;



