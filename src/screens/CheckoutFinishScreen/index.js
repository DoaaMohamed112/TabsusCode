import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
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
import { RadioButton, IconButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');

const CheckoutFinishScreen = props => {


    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Checkout' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView style={{ flexGrow: 1,height:'100%' }} >
                <View style={Style.bodyContainer}>
                    <View style={{ borderBottomColor: Colors.lightgray, borderBottomWidth: 1, alignItems: 'center' }}>
                        <IconButton icon="check" style={{ backgroundColor: Colors.greenSuccess }} size={20} color={Colors.light} />
                        <Text style={{ fontSize: FontSizes.pragraph, marginTop: 10, marginBottom: 20 }}>Thank you for your purchase</Text>
                    </View>
                    <View style={{ alignItems: 'center', padding: 30 }}>
                        <Text style={{ marginBottom: 20, fontSize: 15}}>{I18n.t('YourOrderNumber')}<Text style={{fontWeight:'bold' }}>123456</Text></Text>
                        <Text style={{ textAlign: 'center' }}>{I18n.t('ConfirmationMessageIsSent')} info@gmail.com</Text>
                    </View>
                </View>


               
            </ScrollView>
            <View style={Style.footerStyle}>
                    <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                        <BlockButton fontStyle={{ fontSize: FontSizes.pragraph, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='ContinueShopping'></BlockButton>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '100%', marginTop: 20 }}  onPress={() => props.navigation.navigate('OrderDetailsScreen')} >
                        <BlockButton fontStyle={{ fontSize: FontSizes.pragraph, fontWeight: 'bold' }} backColor={Colors.light} style={{ width: '100%' }} value='ViewOrderDetails'></BlockButton>
                    </TouchableOpacity>
                </View>
        </View>
    );
}


export default CheckoutFinishScreen;



