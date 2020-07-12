import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated
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
import { IconButton } from 'react-native-paper';
// import Animated from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const ProductScreen = props => {
  const [selectedTab, setTab] = useState(1);
  const [IsSizesOpened, setIsSizesOpened] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;
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
    colors: ['#cb35dc', '#6a51ed', '#ed5195', '#000000', '#acb6c4'],
  });

  let viewId = null;
  const [page, setPage] = useState(
    <ProductComponent Item={item} handleLike={handleLike} />,
  );

  const setSelectedTab = index => {
    setTab(index);
    setIsSizesOpened(false);
    // viewId.scrollTo({x: 0, y: 0, animated: true});
  };

  // const onScroll =(event) => Animated.event(
  //   [{
  //     nativeEvent: {
  //       contentOffset: { y: scrollY },
  //     },
  //   }],
  //   {
  //     listener: ({ nativeEvent }) => scrollY.setValue(nativeEvent.contentOffset.y),
  //   },
  // ).__getHandler()(event);

  const setRefScroll = ref => {
    viewId = ref;
  };

  const handleLike = () => {
    let itemTemp = {...item};
    itemTemp.Isfav = !item.Isfav;
    setItem({...itemTemp});
    console.log(item.Isfav);
  };

  const HEADER_MAX_HEIGHT = height * 0.55;
const HEADER_MIN_HEIGHT = 70;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT;

const headerHeight = scrollY.interpolate({
  inputRange: [0, HEADER_SCROLL_DISTANCE],
  outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
  extrapolate: 'clamp',
  useNativeDriver: true
});
const backgroundCol = scrollY.interpolate({
  inputRange: [0, 140],
  outputRange: ['rgba(244,245,248,0.0)', Colors.backGray],
  extrapolate: 'clamp',
  useNativeDriver: true
});
const IconColor = scrollY.interpolate({
  inputRange: [0, 140],
  outputRange: [Colors.dark, Colors.light],
  extrapolate: 'clamp',
  useNativeDriver: true
});

  return (
    <View style={Style.container}>
        <Animated.View style={[Style.headerStyle, {backgroundColor: backgroundCol}]}
        >
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
          
        </Animated.View>
       


        <Animated.ScrollView ref={setRefScroll}
         
         onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY
              }
            }
          }
        ],
       )
      }
        scrollEventThrottle={16}
        >

          
       {/* carousel */}
       <View 
          style={[{
            width: width,
            backgroundColor: Colors.error,
            // position: 'absolute',
            top: 0,
            // zIndex: 1,
            // flex: 0
            height: height * 0.55 
          }]}>
             {/* header */}
       
          <Carousel images={item.imgs} height={height * 0.55} />
        </View>
      {/* tabs */}
      <ProductTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        {selectedTab == 1 ? (
          IsSizesOpened == true ? (
            <SizesComponent />
          ) : (
            <ProductComponent
              Item={item}
              pressSizes={() => {
                setIsSizesOpened(true);
                // viewId.scrollTo({x: 0, y: 0, animated: true});
              }}
              handleLike={handleLike}
            />
          )
        ) : selectedTab == 2 ? (
          <DetailsComponent />
        ) : (
          <ReviewsComponent />
        )}
      </Animated.ScrollView>
      <View style={Style.footerStyle}>
        <TouchableOpacity style={{ backgroundColor: Colors.primary,borderRadius: 5,justifyContent:'center',alignItems: 'center' }}>
          <IconButton icon="heart-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: '85%', justifyContent: 'center' ,alignItems: 'center' }}>
          <BlockButton
            fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }}
            backColor={Colors.primary}
            style={{ width: '90%', paddingVertical: 10}}
            value="AddToCart"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;
