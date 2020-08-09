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
import MainItem from '../../components/MainItem';
import CategoryBar from '../../components/CategoryBar';
import AdsItem from '../../components/AdsItem';

const { height, width } = Dimensions.get('window');

const HomeScreen = props => {

    const [DataList, setDataList] = useState([
        {
            category: 'New Offers',
            Data: [
                {
                    id: '1',
                    img: 'https://i.ya-webdesign.com/images/gucci-black-panther-png.png',
                    name: 'Gucci Black Panther',
                    rate: 4.5,
                    price: '50 EG',
                    IsFav: false,
                    discount: '-10%',
                },
                {
                    id: '2',
                    img: 'https://cdn.shopify.com/s/files/1/0070/3230/7812/products/Y326002_139_HERO_R_W_SPOTLESS-TRAVELER-TANK-DRESS_1024x.png?v=1587757706',
                    name: "Women's Spotless Traveler Tank Dress",
                    rate: 3.0,
                    price: '190 EG',
                    IsFav: true,
                    discount: '-19%',
                },
                {
                    id: '3',
                    img: 'https://i.ya-webdesign.com/images/pink-skirt-png.png',
                    name: "Women's Skirt",
                    rate: 3.5,
                    price: '280 EG',
                    IsFav: false,
                    discount: '0%',
                },
                {
                    id: '4',
                    img: 'https://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png',
                    name: "Sports Shoes",
                    rate: 3.5,
                    price: '150 EG',
                    IsFav: false,
                    discount: '0%',
                }
            ]
        },
        {
            category: 'Supermarket',
            Data: [
                {
                    id: '1',
                    img: 'https://pngimg.com/uploads/sunflower_oil/sunflower_oil_PNG3.png',
                    name: 'Sunflower Oil',
                    rate: 4.5,
                    price: '40 EG',
                    IsFav: false,
                    discount: '-10%',
                },
                {
                    id: '2',
                    img: 'https://cdn.shopify.com/s/files/1/0041/7497/0991/products/Dark_Chocolate_Enhanced_Caddy_Image_57pct_1500x.png?v=1574102477',
                    name: "Chocolate Box",
                    rate: 3.0,
                    price: '90 EG',
                    IsFav: true,
                    discount: '-19%',
                },
                {
                    id: '3',
                    img: 'https://madeinandhra.in/shop/wp-content/uploads/2019/03/hosue-hold-needs.png',
                    name: "House Hold Needs",
                    rate: 3.5,
                    price: '280 EG',
                    IsFav: false,
                    discount: '0%',
                },
                {
                    id: '4',
                    img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
                    name: "Paint Comps",
                    rate: 3.5,
                    price: '150 EG',
                    IsFav: false,
                    discount: '0%',
                }
            ]
        }
    ]);

    const [Ads, setAds] = useState([
        {
            img: 'https://t4.ftcdn.net/jpg/01/67/96/25/240_F_167962567_KORkqjkag2wXaRZ50IKnA5X4Ze9kJ7sT.jpg',
            description: "For all your summer clothing need",
            withSeemore: true,
        },
        {
            img: 'https://t4.ftcdn.net/jpg/02/47/01/35/240_F_247013528_epn5nWel0QBzYbSmrWuBQikVAY98HAjm.jpg',
            description: "For all your summer clothing need",
            withSeemore: true,
        }
    ])


    const handlePressItem = (item) => {
        props.navigation.navigate('ProductStackNavigator');
    }

    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} title='Home' leftIcon='menu' rightIcon='general' 
            HandleBack={() => props.navigation.openDrawer()}
            onPressNotification={()=> props.navigation.navigate('Notifications')}
            onPressSearch={()=> props.navigation.navigate('SearchScreen')}
            onPressCart={()=> props.navigation.navigate('CartScreen')}
            ></Header>

        
            <ScrollView style={{paddingVertical: 20 ,paddingHorizontal: 20}}>
                {DataList.map((List, index) => {
                    return (
                        <View key={index}>
                            <AdsItem item={Ads[index]}/>

                            <CategoryBar title={List.category}  />

                            <View style={Style.bodyContent}>
                                {List.Data.slice(0, 4).map((item, index) => {
                                    return (<MainItem  key={index} IsLeft={index%2 == 0} item={item} itemStyle={Style.itemContainer} handleClick={()=>updateItem(item, List.category)} onPress={() => handlePressItem(item)}></MainItem>)
                                })}
                            </View>

                      </View>
                    );
                })}

            </ScrollView>
        </View>
    );
};

export default HomeScreen;
