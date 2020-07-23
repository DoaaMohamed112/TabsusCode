import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
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
import I18n from '../../i18n';
import AdressItem from '../../components/AddressItem';
import OrderStatus from '../../components/OrderStatus';
import OrderProductItem from '../../components/OrderProductItem';
import Tabs from './tabscomponent';
const {height, width} = Dimensions.get('window');

const OrdersScreen = props => {
  const [deliveryMethod, setDeliveryMethod] = useState('Free');
  const [Voucher, setVoucher] = useState('');
  const [coupon, setCoupon] = useState('');
  const [selectedTab, setSelectedTab] = useState(1);

  const onChange = item => {
    console.log(item);
  };

  const onSelectedTab = index => {
    console.log(index);
    setSelectedTab(index);
  };
  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        bodyStyle={{width: '80%'}}
        title="Orders"
        leftIcon="back"
        HandleBack={() => props.navigation.pop()}
      />
      <Tabs selectedTab={selectedTab} setSelectedTab={onSelectedTab} />
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={Style.bodyContainer}>
          {/* productItem */}
          <SafeAreaView style={{height: '100%'}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              refreshing={true}
              data={[0, 1]}
              renderItem={({item, index}) => (
                <TouchableOpacity activeOpacity={1} onPress={() => props.navigation.navigate("OrderDetailsScreen")}>
                  <OrderStatus
                    orderNumber="1234567"
                    status="pending"
                    date="4/1/2020 6:20 pm"
                  />
                </TouchableOpacity>
              )}
              keyExtractor={item => item._id}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;
