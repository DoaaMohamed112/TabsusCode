import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header'
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'

const { height, width } = Dimensions.get('window');

const PointsVouchersScreen = props => {

    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} title='PointsVouchers' leftIcon='back'
                HandleBack={() => props.navigation.pop()}
            ></Header>
            {/* points container */}
            <View style={Style.PointsContainer}>
                {/* Points Background */}
                <ImageBackground source={ImagesPaths.pointsVouchers} style={Style.PointBackground} imageStyle={Style.PointImage}>
                    
                    {/* Points Text */}
                    <View style={Style.PointTextContainer}>
                        <Text>{I18n.t('YouHave')}</Text>
                        <Text style={Style.PointTextStyle}>1500</Text>
                        <Text>{I18n.t('Points')}</Text>
                    </View>
                </ImageBackground>

            </View>
            {/* Voucher container */}
        <View style={Style.VoucherContainer}>
            <Image style={Style.VoucherImage} source={require('../../assets/dummyImages/voucher.png')}/>
        </View>
        </View>
    );
};

export default PointsVouchersScreen;

