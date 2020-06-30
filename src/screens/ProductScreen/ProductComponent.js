import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import StarRating from 'react-native-star-rating';
import {IconButton} from 'react-native-paper';
import ImagesPaths from '../../constants/ImagesPaths';
import CategoryBar from '../../components/CategoryBar';
import MainItem from '../../components/MainItem';
const {height, width} = Dimensions.get('window');

const ProductComponent = props => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);

  const [selectedColors, setSelectedColors] = useState([]);

  
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

  useEffect(() => {
    // event listener for landscape or portrait detection
    const updatLayout = () => {
      const {width, height} = Dimensions.get('window');
      setWidth(width);
      setHeight(height);
    };

    Dimensions.addEventListener('change', updatLayout);
    return () => {
      Dimensions.removeEventListener('change', updatLayout);
    };
  });

  const handleColorSelection = color => {
    let colors = [...selectedColors];
    let index = colors.findIndex(i => i == color);
    if (index != -1) {
      colors.splice(index, 1);
    } else {
      colors.push(color);
    }
    setSelectedColors([...colors]);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.basicContent}>
        <Text style={Styles.title}>Product name</Text>
        <Text style={Styles.detail}>{props.Item.name}</Text>
      </View>
      <View style={Styles.basicContent}>
        <View style={Styles.starsStyle}>
          <StarRating
            disabled={true}
            emptyStar={'star'}
            fullStar={'star'}
            halfStar={'star'}
            maxStars={5}
            rating={props.Item.rate}
            fullStarColor={Colors.primary}
            emptyStarColor={Colors.lightgray}
            starSize={15}
            starStyle={{paddingHorizontal: 1}}
          />
        </View>
        <Text style={Styles.detail}>{props.Item.productNumber}</Text>
      </View>
      <View style={Styles.priceContent}>
        <View style={Styles.priceContainer}>
          <Text style={Styles.priceText}>
            {props.Item.price} {'   '}
          </Text>
          <Text style={Styles.oldPriceText}> {props.Item.oldprice} </Text>
        </View>
        <View style={Styles.iconsStyle}>
          <TouchableOpacity onPress={props.handleLike} activeOpacity={0.7}>
            <IconButton
              size={25}
              icon="heart"
              color={props.Item.Isfav ? Colors.error : Colors.textGray}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconButton
              size={25}
              icon="share-variant"
              color={Colors.textGray}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* colors */}
      <View style={Styles.colorSet}>
        <Text style={Styles.colorSetTitle}>SELECT COLOR</Text>
        <FlatList
          data={props.Item.colors}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleColorSelection(item)}
              style={[Styles.colorCircle, {backgroundColor: item}]}>
              {selectedColors.findIndex(i => i == item) != -1 ? (
                <IconButton size={25} color={Colors.light} icon="check" />
              ) : null}
            </TouchableOpacity>
          )}
        />
      </View>

      {/* sizes */}
      <TouchableOpacity style={Styles.sizesContent}>
        <Text style={Styles.sizeText}>SELECT SIZE</Text>
        <View style={Styles.iconContainer}>
          <IconButton
            icon="chevron-right"
            size={35}
            style={Styles.iconStyle}
          />
        </View>
      </TouchableOpacity>

      {/* Delivery time information */}
      <View style={Styles.timeBlock}>
        <View style={Styles.imgContainerStyle}>
          <Image source={ImagesPaths.DeliveryTime} style={Styles.imgStyle} />
        </View>
        <View style={Styles.infoText}>
          <Text style={Styles.titleText}>Delivery time</Text>
          <Text style={Styles.pragText}>
            The order will be delivered after three days from this day
          </Text>
        </View>
      </View>

      {/* Return Policy information */}
      <View style={Styles.timeBlock}>
        <View style={Styles.imgContainerStyle}>
          <Image source={ImagesPaths.ReturnPolicy} style={Styles.imgStyle} />
        </View>
        <View style={Styles.infoText}>
          <Text style={Styles.titleText}>Return Policy</Text>
          <Text style={Styles.pragText}>
            14 days free return and up to 30 days for detective product.
          </Text>
        </View>
      </View>

      {/* sold by information */}
      <View style={Styles.timeBlock}>
        <View style={Styles.imgContainerStyle}>
          <Image source={ImagesPaths.SoldBy} style={Styles.imgStyle} />
        </View>
        <View style={Styles.infoText}>
          <Text style={Styles.titleText}>Sold by:</Text>
          <Text style={Styles.pragText}>elhosiny reda</Text>
        </View>
      </View>

      <CategoryBar title="Related Products" />

      <View style={Styles.bodyContent}>
        {DataList.slice(0, 4).map((item, index) => {
          return (
            <MainItem
              key={index}
              IsLeft={index % 2 == 0}
              item={item}
              itemStyle={Styles.itemContainer}
            />
          );
        })}
      </View>
    
    </View>
 
 );
};

export default ProductComponent;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 0,
  },
  basicContent: {
    flexDirection: 'row',
    paddingTop: 13,
    paddingHorizontal: 20,
  },
  title: {
    width: '50%',
    textAlign: 'left',
    fontSize: 15,
  },
  detail: {
    width: '50%',
    textAlign: 'right',
    color: Colors.textGray,
  },
  starsStyle: {
    width: '50%',
    alignItems: 'flex-start',
  },
  priceText: {
    color: Colors.lightblue,
  },
  oldPriceText: {
    color: Colors.lightblue,
    opacity: 0.5,
    textDecorationLine: 'line-through',
  },
  iconsStyle: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  priceContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  priceContent: {
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: Colors.tabsBack,
    borderBottomWidth: 1,
  },
  colorSet: {
    width: '100%',
    borderBottomColor: Colors.tabsBack,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  colorCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  colorSetTitle: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  timeBlock: {
    // borderTopColor: Colors.lightgray,
    // borderTopWidth: 1,
    borderBottomColor: Colors.tabsBack,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    // marginVertical: 20,
    width: '100%',
  },
  imgContainerStyle: {
    borderColor: Colors.lightgray,
    borderRadius: 5,
    borderWidth: 1,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imgStyle: {
    width: '70%',
    height: '60%',
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  pragText: {
    width: '60%',
    color: Colors.textGray,
    lineHeight: 20,
    fontSize: 13,
  },
  infoText: {
    width: width - 80,
  },
  sizesContent: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: Colors.tabsBack,
    borderBottomWidth: 1,
    // paddingHorizontal: 20
  },
  iconStyle: {
    justifyContent: 'center',
  },
  sizeText: {
    alignSelf: 'center',
    width: '70%',
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },
  iconContainer:{
    alignItems: 'flex-end',
    width: '30%',
  },
  itemContainer: {
    width: width / 2 - 40,
    height: width *0.8,
},
bodyContent: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    width: width - 40,
    alignSelf: 'center',
    justifyContent: 'center',
}
});
