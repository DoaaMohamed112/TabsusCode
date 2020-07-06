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
import { RadioButton } from 'react-native-paper';
import RadioButtonGroup from '../../components/RadioButtonGroup';
const { height, width } = Dimensions.get('window');

const PlaceOrderScreen = props => {
    const [deliveryMethod, setDeliveryMethod] = useState('Free')
    const [Voucher, setVoucher] = useState('')
    const [coupon, setCoupon] = useState('')
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

    const onChange = (item) => {
        console.log(item)
    }
    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Checkout' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView contentContainerStyle={{  }}style={{flexGrow:1,marginBottom:120}} >
                <View style={Style.bodyContainer}>
                    {/* Shipping Address */}
                    <Text style={Style.title}>Shipping Address</Text>
                    <AdressItem name='hussien mohamed' city='tanta' street='nasr street' mobile='01115492192'></AdressItem>

                    {/* Payment Method */}
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Payment Method</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ flex: 0.8 }}>
                            {/* Radio group  */}
                            <RadioButtonGroup handleChange={(selected) => onChange(selected)} labels={['Credit Card', 'Wallet', 'Cash Money']}></RadioButtonGroup>
                        </View>
                        {/* Price */}
                        <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
                            <Text style={Style.priceStyle}>EG 20</Text>
                        </View>
                    </View>

                    {/* Points & Voucher */}
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', flex: 0.5 }}>Points & Voucher</Text>
                            {/* Points */}
                            <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                                <Text style={Style.priceStyle}>Points 1000</Text>
                            </View>
                        </View>
                        {/* Voucher Input Part */}
                        <View style={{ flexDirection: 'row',paddingTop:10 }}>
                           <View style={{flex:0.7}}>
                            <InputText inputType='TextInput'
                                value={Voucher} HandleChange={(value) => { setVoucher(value) }}
                                style={Style.inputTextStyle}
                                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                            ></InputText>
                            </View>
                            <TouchableOpacity style={{  flex: 0.3,    }} >
                                <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%', borderTopStartRadius: 0, borderBottomStartRadius: 0,justifyContent:'center', height: 50 }} value='Apply'></BlockButton>
                            </TouchableOpacity>
                        </View>
                          {/* Coupon Input Part */}
                          <Text style={{ fontWeight: 'bold' }}>Coupon Code</Text>
                           
                          <View style={{ flexDirection: 'row',paddingTop:10 }}>
                          <View style={{flex:0.7}}>
                          <InputText inputType='TextInput'
                                value={coupon} HandleChange={(value) => { setCoupon(value) }}
                                style={Style.inputTextStyle}
                                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                            ></InputText>
                              </View>  
                            <TouchableOpacity style={{ width: '100%', flex: 0.3 }} >
                                <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%', borderTopStartRadius: 0, borderBottomStartRadius: 0,justifyContent:'center',height:50 }} value='Apply'></BlockButton>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </ScrollView>


                {/* footer */}
                <View style={Style.footerStyle}>
                    <View style={{ flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row' }}>
                        <Text style={{ fontWeight: 'bold', flex: 0.5 }}>{I18n.t('TotalSummation')}</Text>
                        {/* price */}

                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Text style={Style.priceStyle}>EG 20</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                        <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='PlaceOrder'></BlockButton>
                    </TouchableOpacity>
                </View>
        </View>
    );
}


export default PlaceOrderScreen;



