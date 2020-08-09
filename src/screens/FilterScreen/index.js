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
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import DiscountComponent from './discountComponent';
import RatingComponent from './ratingComponent';
import ColorComponent from './colorsComponent';
import BrandsComponent from './brandsComponent';
import SizesComponent from './sizesComponent';
import StylesComponent from './stylesComponent';
import PriceComponent from './priceComponent';


const {height, width} = Dimensions.get('window');

const FilterScreen = props => {
    const [selectedSideItem , setSelectedItem] = useState(0);
    const [discountOption , setSelectedOption] = useState('');
    const [SelectedBrand , setSelectedBrand] = useState('');
    const [SelectedSize , setSelectedSize] = useState('');
    const [SelectedStyle , setSelectedStyle] = useState('');
    const [rate , setrate] = useState(0);
    
  const [brands, setbrands] = useState(['The Name', 'The Name', 'The Name', 'The Name']);
  const [styles, setStyles] = useState(['The Name', 'The Name', 'The Name', 'The Name']);
  const [sizes, setSizes] = useState(['UK', 'US', 'IT']);

  const [selectedColors, setSelectedColors] = useState([]);
  const [colors, setColors] = useState(['#cb35dc', '#6a51ed', '#ed5195', '#acb6c4', '#676767', '#000000']);


  const { navigation } = props;
  
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
        // console.log("entered")
        setSelectedItem(0);
        setSelectedOption('');
        setrate(0);
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);



  const onSelect = (index) => {
    setSelectedItem(index);
  }

  const onChangeDiscountOption = (selected) => {
    //   console.log(selected);
      setSelectedOption(selected);
  }

  const onChangeRate = (selected) => {
      setrate(selected);
  }

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
      <View style={Style.container}>
          <Header
              style={{ height: 70 }}
              title="Filter"
              leftIcon="menu"
              rightIcon="general"
              HandleBack={() => props.navigation.openDrawer()}
              onPressNotification={() => props.navigation.navigate('Notifications')}
              onPressSearch={() => props.navigation.navigate('SearchScreen')}
              onPressCart={() => props.navigation.navigate('CartScreen')}
          />


          <View style={Style.pageContainer}>
              <View style={Style.sidebarContainer}>
                 <TouchableOpacity style={{backgroundColor : selectedSideItem == 0 ? Colors.tabsBackground : Colors.backGray} } onPress={() => onSelect(0)}><Text style={[Style.sideItemText, {color: selectedSideItem == 0 ? Colors.darkgray : Colors.textGray}]}>{I18n.t('Discount')}</Text></TouchableOpacity>
                 <TouchableOpacity style={{backgroundColor : selectedSideItem == 1 ? Colors.tabsBackground : Colors.backGray} } onPress={() => onSelect(1)}><Text style={[Style.sideItemText, {color: selectedSideItem == 1 ? Colors.darkgray : Colors.textGray}]}>{I18n.t('Rating')}</Text></TouchableOpacity>
                 <TouchableOpacity style={{backgroundColor : selectedSideItem == 2 ? Colors.tabsBackground : Colors.backGray} } onPress={() => onSelect(2)}><Text style={[Style.sideItemText, {color: selectedSideItem == 2 ? Colors.darkgray : Colors.textGray}]}>{I18n.t('Color')}</Text></TouchableOpacity>
                 <TouchableOpacity style={{backgroundColor : selectedSideItem == 3 ? Colors.tabsBackground : Colors.backGray} } onPress={() => onSelect(3)}><Text style={[Style.sideItemText, {color: selectedSideItem == 3 ? Colors.darkgray : Colors.textGray}]}>{I18n.t('Brand')}</Text></TouchableOpacity>
                 <TouchableOpacity style={{backgroundColor : selectedSideItem == 4 ? Colors.tabsBackground : Colors.backGray} } onPress={() => onSelect(4)}><Text style={[Style.sideItemText, {color: selectedSideItem == 4 ? Colors.darkgray : Colors.textGray}]}>{I18n.t('Size')}</Text></TouchableOpacity>
                 <TouchableOpacity style={{backgroundColor : selectedSideItem == 5 ? Colors.tabsBackground : Colors.backGray} } onPress={() => onSelect(5)}><Text style={[Style.sideItemText, {color: selectedSideItem == 5 ? Colors.darkgray : Colors.textGray}]}>{I18n.t('Price')}</Text></TouchableOpacity>
                 <TouchableOpacity style={{backgroundColor : selectedSideItem == 6 ? Colors.tabsBackground : Colors.backGray} } onPress={() => onSelect(6)}><Text style={[Style.sideItemText, {color: selectedSideItem == 6 ? Colors.darkgray : Colors.textGray}]}>{I18n.t('Style')}</Text></TouchableOpacity>
              </View>
              <View style={Style.componentContainer}>
                 {
                     (selectedSideItem == 0 ? <DiscountComponent selectedItem={discountOption} onChange={(selected) => onChangeDiscountOption(selected)} /> : 
                      selectedSideItem == 1 ? <RatingComponent selectedItem={rate} onChange={(selected) => onChangeRate(selected)} /> : 
                      selectedSideItem == 2 ? <ColorComponent selectedColors={selectedColors} colors={colors} handleColorSelection={(color) => handleColorSelection(color)}/> :
                      selectedSideItem == 3 ? <BrandsComponent labels={brands} selectedItem={SelectedBrand}/> : 
                      selectedSideItem == 4 ? <SizesComponent labels={sizes} selectedItem={SelectedSize}/> : 
                      selectedSideItem == 5 ? <PriceComponent /> : 
                      selectedSideItem == 6 ? <SizesComponent labels={sizes} selectedItem={SelectedSize}/> : 
                      
                      null
                     )
                 }
              </View>
          </View>


          <View style={Style.footerStyle}>
              <TouchableOpacity style={{ width: '50%', marginTop: 10,paddingHorizontal: 5 }} >
                  <BlockButton fontStyle={{ fontSize: FontSizes.pragraph, fontWeight: 'bold', paddingVertical: 5 }} backColor={Colors.light} style={{ width: '100%' }} value='Cancel'></BlockButton>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '50%', marginTop: 10, paddingHorizontal: 5 }}  >
                  <BlockButton fontStyle={{ fontSize: FontSizes.pragraph, fontWeight: 'bold', paddingVertical: 5 }} backColor={Colors.primary} style={{ width: '100%' }} value='Apply'></BlockButton>
              </TouchableOpacity>
          </View>

      </View>
  );
};

export default FilterScreen;
