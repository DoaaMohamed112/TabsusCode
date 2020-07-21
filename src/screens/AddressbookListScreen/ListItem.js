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

const {height, width} = Dimensions.get('window');

const ListItem = props => {
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

  return (
    <View style={{marginBottom: 40}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          width: '100%',
        }}>
        <Text style={Style.title}>{props.item.Title}</Text>
        <IconButton
          style={{marginStart: 'auto'}}
          color={Colors.textGray}
          icon={'dots-horizontal'}
          onPress={showMenu}
          size={30}
        />
        <Menu ref={setMenuRef} style={Style.menuStyle}>
          <MenuItem onPress={() => hideMenu('edit')}>Edit</MenuItem>
          <MenuItem onPress={() => hideMenu('delete')}>Delete</MenuItem>
        </Menu>
      </View>
      <AddressItem
        hasNoIcon={true}
        name={props.item.Street}
        city={props.item.city}
        street={props.item.region}
        mobile={props.item.phone}
      />
    </View>
  );
};

export default ListItem;
