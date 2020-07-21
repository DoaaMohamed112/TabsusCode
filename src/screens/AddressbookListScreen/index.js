import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Style from './style';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import AddressItem from '../../components/AddressItem';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {IconButton} from 'react-native-paper';
import ListItem from './ListItem';

const {height, width} = Dimensions.get('window');

const AddressbookListScreen = props => {
  let _menu = null;

  const setMenuRef = ref => {
    _menu = ref;
  };
  const hideMenu = (item, index) => {
    props.setSelectedItem(item, index);
    _menu.hide();
  };

  const showMenu = () => {
    _menu.show();
  };

  const [displayedList, setDisplayedList] = useState([
    {
      id: '001',
      Title: 'Shipping Address',
      Street: 'Elhosiny Reda',
      city: 'tanta',
      region: 'elbsaten city',
      phone: '0122222222222',
    },
    {
      id: '002',
      Title: 'Shipping Address',
      Street: 'Elhosiny Reda',
      city: 'tanta',
      region: 'elbsaten city',
      phone: '0122222222222',
    },
  ]);

  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        title="AddressBook"
        leftIcon="back"
        HandleBack={() => props.navigation.pop()}
      />

      <SafeAreaView style={[Style.bodyContent, {height: height - 70}]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={displayedList}
          extraData={displayedList}
          renderItem={({item, index}) => (
            <ListItem item={item}/>
          )}
          keyExtractor={item => item.id}
        />

        {/* button part */}
        <TouchableOpacity
          style={{width: '100%', marginTop: 'auto', marginBottom: 10}}
          onPress={() => props.navigation.navigate('AddressBookScreen')}>
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
            value="NewAddress"
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default AddressbookListScreen;
