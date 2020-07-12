import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView ,Image} from 'react-native';
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

    const onChange = (item) => {
        console.log(item)
    }
    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Checkout' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView

                contentContainerStyle={{}} style={{ flexGrow: 1, marginBottom: 120 }} >
                <View style={{ height: '100%' }}>
                    <View style={Style.bodyContainer}>
                        {/* Shipping Address */}
                        <Text style={Style.title}>Shipping Address</Text>
                        <AdressItem name='hussien mohamed' city='tanta' street='nasr street' mobile='01115492192'></AdressItem>

                        {/* button part */}
                        <TouchableOpacity style={{ width: '100%', marginTop: 20, marginBottom: '10%' }} onPress={() => props.navigation.navigate('AddressBookScreen')} >
                            <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} iconSize={25} backColor={Colors.light} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} value='NewAddress'></BlockButton>
                        </TouchableOpacity>

                        {/* Delivery Method */}
                        <Text style={{ fontWeight: 'bold' }}>Delivery Method</Text>
                        {/* Radio group  */}


                    </View>
                    <RadioButtonGroup handleChange={(selected) => onChange(selected)} labels={['Free Delivery', 'Express Delivery']}></RadioButtonGroup>

                    <View style={Style.timeBlock}>
                        <View style={Style.imgContainerStyle}>
                            <Image source={require('../../assets/images/Delivery-time.png')} style={Style.imgStyle} />
                        </View>
                        <View>
                            <Text style={Style.titleText}>Delivery time</Text>
                            <Text style={Style.pragText}>The order will be delivered after three days from this day</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
             {/* footer */}
             <View style={Style.footerStyle}>
                <View style={{ flexDirection: I18n.locale=='ar'?'row-reverse': 'row' }}>
                <Text style={{ fontWeight: 'bold', flex: 0.5 }}>{I18n.t('TotalSummation')}</Text>
                    {/* price */}

                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                        <Text style={Style.priceStyle}>EG 20</Text>
                    </View>
                </View>
                <TouchableOpacity  onPress={() => props.navigation.navigate('PlaceOrderScreen')} style={{ width: '100%', marginTop: 20 }} >
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Next'></BlockButton>
                </TouchableOpacity>
            </View>
         
        </View>
    );
}


export default CheckoutScreen;



