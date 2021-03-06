import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native';
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
import { IconButton } from 'react-native-paper';

const { height, width } = Dimensions.get('window');

const SearchScreen = props => {

    const [SearchText, setSearchText] = useState('');

    const [DataList, setDataList] = useState([
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
        },
        {
            id: '5',
            img: 'https://pngimg.com/uploads/sunflower_oil/sunflower_oil_PNG3.png',
            name: 'Sunflower Oil',
            rate: 4.5,
            price: '40 EG',
            IsFav: false,
            discount: '-10%',
        },
        {
            id: '6',
            img: 'https://cdn.shopify.com/s/files/1/0041/7497/0991/products/Dark_Chocolate_Enhanced_Caddy_Image_57pct_1500x.png?v=1574102477',
            name: "Chocolate Box",
            rate: 3.0,
            price: '90 EG',
            IsFav: true,
            discount: '-19%',
        },
        {
            id: '7',
            img: 'https://madeinandhra.in/shop/wp-content/uploads/2019/03/hosue-hold-needs.png',
            name: "House Hold Needs",
            rate: 3.5,
            price: '280 EG',
            IsFav: false,
            discount: '0%',
        },
        {
            id: '8',
            img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: false,
            discount: '0%',
        }

    ]);

    const [displayedList , setDisplayedList] = useState(DataList);

    const onChangeText = (event) => {
        console.log(event);
        setSearchText(event);
        if(event != "")
        {
            // setDisplayedList([])
            let list = DataList.filter(i => i.name.toLowerCase().includes(event.toLowerCase()));
            setDisplayedList(list);
            console.log(displayedList)
        }
        else{
            setDisplayedList([...DataList]);
            console.log('entered here')
        }

    }

    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} SearchBar 
                searchValue={SearchText}
                leftIcon='back'
                HandleBack={() => props.navigation.pop()}
                onChange={(e) => onChangeText(e)}
            ></Header>
                    {displayedList.length > 0 ? 
                       <SafeAreaView style={Style.bodyContent}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        // refreshing={true}
                        data={displayedList}
                        extraData={displayedList}
                        numColumns={2}
                        // horizontal={false}
                        renderItem={({ item, index }) => (
                           <MainItem  key={item.id} IsLeft={index % 2 == 0} item={item} itemStyle={Style.itemContainer} ></MainItem>
                        )}
                        keyExtractor={item => item.id}
                      />
                    </SafeAreaView>
                    : ( SearchText != "") ?
                        <View style={Style.EmptyContent}>
                           <IconButton icon='magnify' color={Colors.lightgray} size={100} style={Style.iconStyle} />
                            <Text style={Style.textEmptyStyle}>No data matches your search</Text>
                        </View>
                        :
                        <View/>
                    
                 }
            {/* </ScrollView> */}
        </View>
    );
};

export default SearchScreen;