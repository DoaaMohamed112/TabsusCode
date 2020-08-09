import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Style from './style';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import MainItem from '../../components/MainItem';
import ModalView from '../../components/ModalView';
import Colors from '../../constants/Colors';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';

const {height, width} = Dimensions.get('window');

const ReturnsScreen = props => {
  const [chosenCategoryIndex, setChosenCategoryIndex] = useState(0);
  const [IsModalVisible, setIsModalVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState(0);

  const [DataList, setDataList] = useState([
    {
      id: '1',
      img:
        'https://images.samsung.com/is/image/samsung/eg-uhdtv-nu8000-ua65nu8000sxeg-frontblack-105167255?$L2-Thumbnail$',
      name: 'Paint Comps',
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '2',
      img:
        'https://images.samsung.com/is/image/samsung/my-uhdtv-nu7400-ua50nu7400kxxm-frontblack-100281914?$L2-Thumbnail$',
      name: 'Paint Comps',
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '3',
      img:
        'https://images.samsung.com/is/image/samsung/my-uhdtv-nu7400-ua50nu7400kxxm-frontblack-100281914?$L2-Thumbnail$',
      name: 'Paint Comps',
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '4',
      img:
        'https://images.samsung.com/is/image/samsung/my-uhdtv-nu7400-ua50nu7400kxxm-frontblack-100281914?$L2-Thumbnail$',
      name: 'Paint Comps',
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '5',
      img:
        'https://images.samsung.com/is/image/samsung/my-uhd-ku6400-ua55ku6400kxxm-001-front-black?$L2-Thumbnail$',
      name: 'Paint Comps',
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '6',
      img:
        'https://images.samsung.com/is/image/samsung/my-uhd-ku6400-ua55ku6400kxxm-001-front-black?$L2-Thumbnail$',
      name: 'Paint Comps',
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
    {
      id: '7',
      img:
        'data:image/jpeg;base64,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',
      name: 'Paint Comps',
      rate: 3.5,
      price: '150 EG',
      IsFav: false,
      discount: '0%',
    },
  ]);

  const [colCount, setcolCount] = useState(2);

  //   const handlePressItem = item => {
  //     props.navigation.navigate('ProductStackNavigator');
  //   };

  const onSetISView = () => {
    if (colCount == 2) {
      setcolCount(1);
    } else {
      setcolCount(2);
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const onSelectSortingWay = index => {
    setSelectedSortBy(index);
    setIsModalVisible(false);
  };

  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        title="MyReturns"
        leftIcon="back"
        HandleBack={() => props.navigation.pop()}
      />

      <SafeAreaView style={Style.bodyContent}>
        <FlatList
          showsVerticalScrollIndicator={false}
          // refreshing={true}
          data={DataList}
          extraData={DataList}
          // horizontal={false}
          renderItem={({item, index}) => (
            <MainItem
              close
              key={item.id}
              IsLeft={index % 2 == 0}
              item={item}
              itemStyle={[Style.itemContainer, {width: width - 40}]}
              imgSytle={Style.itemImgStyle}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      {/* footer */}
      <View style={Style.footerStyle}>
        {/* button part */}
        <TouchableOpacity
          style={{width: '100%', marginVertical: 20, }}
          onPress={() => props.navigation.navigate('AddReturnScreen')}>
          <BlockButton
            fontStyle={{fontSize: FontSizes.subtitle, fontWeight: 'bold'}}
            iconSize={25}
            backColor={Colors.light}
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            value="NewReturn"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReturnsScreen;
