import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Style from './style';
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import MainItem from '../../components/MainItem';
import CategoryBar from '../../components/CategoryBar';
import AdsItem from '../../components/AdsItem';

const {height, width} = Dimensions.get('window');

const CategoriesScreen = props => {
  console.disableYellowBox = true;
  const [chosenCategoryIndex, setChosenCategoryIndex] = useState(0);
  const [DataList, setDataList] = useState([
    {
      Category: 'Electronics',
      content: [
        {
          subCategory: 'Large Electronics',
          Data: [
            {
              id: '1',
              img:
                'https://i.ya-webdesign.com/images/gucci-black-panther-png.png',
              name: 'TVs',
            },
            {
              id: '2',
              img:
                'https://cdn.shopify.com/s/files/1/0070/3230/7812/products/Y326002_139_HERO_R_W_SPOTLESS-TRAVELER-TANK-DRESS_1024x.png?v=1587757706',
              name: 'Washers',
            },
          ],
        },
        {
          subCategory: 'Chargers',
          Data: [
            {
              id: '1',
              img:
                'https://i.ya-webdesign.com/images/gucci-black-panther-png.png',
              name: 'Gucci Black Panther',
            },
            {
              id: '2',
              img:
                'https://cdn.shopify.com/s/files/1/0070/3230/7812/products/Y326002_139_HERO_R_W_SPOTLESS-TRAVELER-TANK-DRESS_1024x.png?v=1587757706',
              name: "Women's Spotless Traveler Tank Dress",
            },
          ],
        },
      ],
    },
    {
      Category: 'Clothes',
      content: [
        {
          subCategory: 'Large Electronics',
          Data: [
            {
              id: '1',
              img:
                'https://i.ya-webdesign.com/images/gucci-black-panther-png.png',
              name: 'TVs asd fda',
            },
            {
              id: '2',
              img:
                'https://cdn.shopify.com/s/files/1/0070/3230/7812/products/Y326002_139_HERO_R_W_SPOTLESS-TRAVELER-TANK-DRESS_1024x.png?v=1587757706',
              name: 'Washers',
            },
          ],
        },
        {
          subCategory: 'Chargers',
          Data: [
            {
              id: '1',
              img:
                'https://i.ya-webdesign.com/images/gucci-black-panther-png.png',
              name: 'Gucci Black Panther',
            },
            {
              id: '2',
              img:
                'https://cdn.shopify.com/s/files/1/0070/3230/7812/products/Y326002_139_HERO_R_W_SPOTLESS-TRAVELER-TANK-DRESS_1024x.png?v=1587757706',
              name: "Women's Spotless Traveler Tank Dress",
            },
          ],
        },
      ],
    },
  ]);

  const [Ads, setAds] = useState([
    {
      img:
        'https://t4.ftcdn.net/jpg/01/67/96/25/240_F_167962567_KORkqjkag2wXaRZ50IKnA5X4Ze9kJ7sT.jpg',
      description: 'For all your summer clothing need',
      withSeemore: true,
    },
    {
      img:
        'https://t4.ftcdn.net/jpg/02/47/01/35/240_F_247013528_epn5nWel0QBzYbSmrWuBQikVAY98HAjm.jpg',
      description: 'For all your summer clothing need',
      withSeemore: true,
    },
  ]);

  const handlePressItem = item => {
    props.navigation.navigate('ProductStackNavigator');
  };

  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        title="Home"
        leftIcon="menu"
        rightIcon="general"
        HandleBack={() => props.navigation.openDrawer()}
        onPressNotification={() => props.navigation.navigate('Notifications')}
        onPressSearch={() => props.navigation.navigate('SearchScreen')}
        onPressCart={() => props.navigation.navigate('CartScreen')}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        // refreshing={true}
        style={{width:'100%',backgroundColor:Colors.backGray}}
        contentContainerStyle={{alignItems:'center'}}
        data={DataList}
        extraData={DataList}
        horizontal={true}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={()=>{setChosenCategoryIndex(index)}} style={{width:width*0.25,alignItems:'center',paddingVertical:20,
          backgroundColor:chosenCategoryIndex==index?Colors.tabsBackground:null}}>
              <Text style={{paddingHorizontal:5,textAlign:'center'}}>{item.Category}</Text>
          </TouchableOpacity>
           
        )}
        keyExtractor={item => item.id}
      />
      <ScrollView style={{paddingVertical: 20, paddingHorizontal: 20}}>
        {DataList[chosenCategoryIndex].content.map((List, index) => {
          return (
            <View key={index}>
              <CategoryBar title={List.subCategory} />

              <View style={Style.bodyContent}>
                {List.Data.slice(0, 4).map((item, index) => {
                  return (
                    // <MainItem
                    //   key={index}
                    //   IsLeft={index % 2 == 0}
                    //   item={item}
                    //   itemStyle={Style.itemContainer}
                    //   onPress={() => handlePressItem(item)}
                    // />
                    <View
                      style={[
                        Style.itemContainer,
                        {marginRight: index % 2 == 0 ? 20 : 0},
                      ]}>
                      <View style={Style.imgContainer}>
                        <Image
                          source={{uri: item.img}}
                          style={Style.imgStyle}
                        />
                      </View>
                      <Text
                      ellipsizeMode={'tail'}
                        numberOfLines={1}
                        style={Style.title}>
                        {item.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;
