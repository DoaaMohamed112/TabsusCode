import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Style from './style';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import Carousel from '../../components/Carousel';
import ProductTabs from '../../components/ProductTabs';
import ProductComponent from './ProductComponent';
import SizesComponent from './SizesComponent';
import DetailsComponent from './DetailsComponent';
import ReviewsComponent from './ReviewsComponent';

const {height, width} = Dimensions.get('window');

const ProductScreen = props => {
  const [selectedTab, setTab] = useState(1);
  const [item, setItem] = useState({
    imgs: [
      'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
      'https://pngimg.com/uploads/tshirt/tshirt_PNG5427.png',
      'https://purepng.com/public/uploads/large/purepng.com-red-t-shirtclothingred-t-shirtfashion-dress-shirt-cloth-tshirt-631522326799mcfdo.png',
    ],
    name: 'SKU',
    rate: 3,
    price: 'EG 50',
    oldprice: 'EG 50',
    productNumber: '12468786754154',
    Isfav: false,
    colors: ['#cb35dc', '#6a51ed', '#ed5195', '#000000', '#acb6c4']
  });

  const setSelectedTab = index => {
    setTab(index);
  };

  const handleLike = () => {
    let itemTemp = {...item};
    itemTemp.Isfav = !item.Isfav;
    setItem({...itemTemp})
  }



  return (
    <View style={Style.container}>
      <View style={{height: height * 0.55}}>
        <View style={Style.headerStyle}>
          <Header
            style={{height: 70, backgroundColor: 'transparent'}}
            leftIcon="back"
            rightIcon="notification cart"
            HandleBack={() => props.navigation.pop()}
            onPressNotification={() =>
              props.navigation.navigate('Notifications')
            }
            onPressSearch={() => props.navigation.navigate('SearchScreen')}
            onPressCart={() => props.navigation.navigate('CartScreen')}
            noshadow={true}
            IconColor={Colors.dark}
          />
        </View>
        <View
          style={{
            width: width,
            minHeight: height * 0.5,
            backgroundColor: Colors.backGray,
            position: 'absolute',
            top: 0,
            zIndex: 1,
          }}>
          <Carousel images={item.imgs} height={height * 0.55} />
        </View>
      </View>
      <ProductTabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <ScrollView>
        {/* <ProductComponent Item={item} handleLike={handleLike} /> */}
        {/* <SizesComponent /> */}
      {/* <DetailsComponent /> */}
          <ReviewsComponent />
      </ScrollView>
      {/* <View style={Style.footerStyle}>
        <TouchableOpacity style={{width: '100%', marginTop: 20, marginBottom: 20, elevation: 10}}>
          <BlockButton
            fontStyle={{fontSize: FontSizes.subtitle, fontWeight: 'bold'}}
            backColor={Colors.primary}
            style={{width: '90%'}}
            value="Next"
          />
        </TouchableOpacity>
      </View> */}

    </View>
  );
};

export default ProductScreen;
