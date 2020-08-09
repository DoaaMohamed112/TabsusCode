import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';
import Style from './style';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import MainItem from '../../components/MainItem';

const {height, width} = Dimensions.get('window');

const WishListScreen = props => {
  const [chosenCategoryIndex, setChosenCategoryIndex] = useState(0);
  const [DataList, setDataList] = useState([
    {
      id: '1',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
      name: "Paint Comps",
      rate: 3.5,
      price: '150 EG',
      IsFav: true,
      discount: '0%',
    },
    {
      id: '2',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: true,
            discount: '0%',
    },
    {
      id: '3',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: true,
            discount: '0%',
    },
    {
      id: '4',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
      name: "Paint Comps",
      rate: 3.5,
      price: '150 EG',
      IsFav: true,
      discount: '0%',
    },
    {
      id: '5',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: true,
            discount: '0%',
    },
    {
      id: '6',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
      name: "Paint Comps",
      rate: 3.5,
      price: '150 EG',
      IsFav: true,
      discount: '0%',
    },
    {
      id: '7',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: true,
            discount: '0%',
    },
  ],);

  const [colCount, setcolCount] = useState(2);

//   const handlePressItem = item => {
//     props.navigation.navigate('ProductStackNavigator');
//   };

const onSetISView = () => {
    if(colCount == 2)
    {
        setcolCount(1);
    }
    else{
    setcolCount(2);
    }
}

  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        title="MyWishList"
        leftIcon="menu"
        rightIcon="general"
        HandleBack={() => props.navigation.openDrawer()}
        onPressNotification={() => props.navigation.navigate('Notifications')}
        onPressSearch={() => props.navigation.navigate('SearchScreen')}
        onPressCart={() => props.navigation.navigate('CartScreen')}
      />

      <SafeAreaView style={Style.bodyContent}>
                        <FlatList
                        key={colCount}
                        showsVerticalScrollIndicator={false}
                        // refreshing={true}
                        data={DataList}
                        extraData={DataList}
                        numColumns={colCount}
                        // horizontal={false}
                        renderItem={({ item, index }) => (
                           <MainItem  key={item.id} IsLeft={index % 2 == 0} item={item} itemStyle={[Style.itemContainer, {width:  colCount == 2 ? width/2 - 30 : width - 40}]} ></MainItem>
                        )}
                        keyExtractor={item => item.id}
                      />
     </SafeAreaView>
    </View>
  );
};

export default WishListScreen;
