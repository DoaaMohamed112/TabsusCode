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
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header';
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import MainItem from '../../components/MainItem';
import CategoryBar from '../../components/CategoryBar';
import AdsItem from '../../components/AdsItem';
import { IconButton } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const CategoryItemsScreen = props => {
  console.disableYellowBox = true;
  const [chosenCategoryIndex, setChosenCategoryIndex] = useState(0);
  const [DataList, setDataList] = useState([
    {
      id: '1',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
      name: "Paint Comps",
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '2',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: false,
            discount: '0%',
    },
    {
      id: '3',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
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
    },
    {
      id: '5',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: false,
            discount: '0%',
    },
    {
      id: '6',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
      name: "Paint Comps",
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '7',
      img: 'https://www.advancedpaints.co.uk/wp-content/uploads/2018/06/paint_comps.png',
            name: "Paint Comps",
            rate: 3.5,
            price: '150 EG',
            IsFav: false,
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
        title="Categories"
        leftIcon="menu"
        rightIcon="general"
        HandleBack={() => props.navigation.openDrawer()}
        onPressNotification={() => props.navigation.navigate('Notifications')}
        onPressSearch={() => props.navigation.navigate('SearchScreen')}
        onPressCart={() => props.navigation.navigate('CartScreen')}
      />

      <View style={Style.tabsContainer}>
    
          <TouchableOpacity style={Style.tabStyle}>
              <Text style={Style.tabText}>Sort by</Text>
              <Image style={Style.tabImg} source={ImagesPaths.sortby}/>
          </TouchableOpacity>
          <TouchableOpacity style={Style.tabStyle}>
              <Text style={Style.tabText}>Filter</Text>
              <Image style={Style.tabImg} source={ImagesPaths.filter}/>
          </TouchableOpacity>
          <TouchableOpacity style={Style.tabStyle} onPress={onSetISView}>
              <Text style={Style.tabText}>View</Text>
              <Image style={Style.tabImg} source={colCount == 2 ? ImagesPaths.view : ImagesPaths.view2}/>
          </TouchableOpacity>

          </View>
      
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

export default CategoryItemsScreen;
