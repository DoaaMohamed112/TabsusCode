import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
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
import OrderStatus from '../../components/OrderStatus';
import OrderProductItem from '../../components/OrderProductItem';
const { height, width } = Dimensions.get('window');

const OrderDetailsScreen = props => {
    const [deliveryMethod, setDeliveryMethod] = useState('Free')
    const [Voucher, setVoucher] = useState('')
    const [coupon, setCoupon] = useState('')
    useEffect(() => {
        // I18n.locale='ar'
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
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='OrderDetails' leftIcon='close' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView contentContainerStyle={{ height: '100%' }} >
                <View style={Style.bodyContainer}>

                    {/* productItem */}
                    <SafeAreaView style={{height: '100%' }}>
                        <FlatList
                            ListHeaderComponent={() => (
                                //Order Status
                                <OrderStatus orderNumber='1234567' status='pending' date='4/1/2020 6:20 pm'></OrderStatus>
                            )}
                            showsVerticalScrollIndicator={false}
                            refreshing={true}
                            data={[0, 1]}
                            renderItem={({ item, index }) => (
                                <OrderProductItem price={20} size='XL' color='red' sku="0590458902809" subtotal={10} productName="Product Name" currency='EG' itemImage={{uri: 'https://i.ya-webdesign.com/images/gucci-black-panther-png.png'}}></OrderProductItem>
                            )}
                            keyExtractor={item => item._id}

                            ListFooterComponent={()=>(
                                <>
                     <Text style={Style.title}>Shipping Address</Text>
                    <AdressItem name='hussien mohamed' city='tanta' street='nasr street'
                     mobile='01115492192'></AdressItem>
                     </>
                            )}
                            ListFooterComponentStyle={Style.ShippingAddress}
                        />

                    </SafeAreaView>
                  
                </View>


                {/* footer */}
                <View style={Style.footerStyle}>
                    <View style={Style.footerTextStyle}>
                        <Text style={{ fontWeight: 'bold', flex: 0.5 }}>{I18n.t('Total')}</Text>
                        {/* Total price */}

                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Text style={Style.priceStyle}>EG 20</Text>
                        </View>
                    </View>
                
                    <View style={Style.footerTextStyle}>
                        <Text style={{ fontWeight: 'bold', flex: 0.5 }}>{I18n.t('DeliveryPrice')}</Text>
                        {/* Delivery price */}

                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Text style={Style.priceStyle}>EG 20</Text>
                        </View>
                    </View>
                
                    <View style={Style.footerTextStyle}>
                        <Text style={{ fontWeight: 'bold', flex: 0.5 }}>{I18n.t('Vat')}</Text>
                        {/*Vat price */}

                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Text style={Style.priceStyle}>EG 20</Text>
                        </View>
                    </View>

                    <View style={[Style.footerTextStyle,Style.totalSummation]}>
                        <Text style={{ fontWeight: 'bold', flex: 0.5 }}>{I18n.t('TotalSummation')}</Text>
                        {/*Vat price */}

                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <Text style={[Style.priceStyle,{color:Colors.lightblue,fontWeight:'bold'}]}>EG 20</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}


export default OrderDetailsScreen;



