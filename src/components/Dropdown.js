import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import ImagesPaths from '../constants/ImagesPaths';
import Colors from '../constants/Colors';
import FontSizes from '../constants/FontSizes';
import {IconButton} from 'react-native-paper';
import I18n from '../i18n';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


const {height, width} = Dimensions.get('window');

const DropdownMenu = props => {
  // const [_menu, setRef]  =  useState(null);
  let _menu = null;
 
 const setMenuRef = ref => {
    _menu = ref;
  };
 const hideMenu = () => {
    _menu.hide();
  };

 const showMenu = () => {
    console.log(_menu)
    _menu.show();
  };
      return(
        // <View style={[props.style,{marginTop: 20, justifyContent: 'flex-end',position: 'relative'}]}>
        //     { props.title && <Text style={[Styles.title ,props.TextStyle]}>{I18n.t(props.title)}</Text>}

        //      <View style={Styles.container}>
        //        <Text style={Styles.textStyle}>DD</Text>
        //        <IconButton icon="chevron-down"  size={25}/>
        //      </View>
        //      <ScrollView style={Styles.menuStyle}>
        //         <Text style={Styles.itemStyle}>1</Text>
        //         <Text style={Styles.itemStyle}>2</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //         <Text style={Styles.itemStyle}>23</Text>
        //      </ScrollView>
        // </View>

        <View style={[props.style,{marginTop: 20, justifyContent: 'flex-end',position: 'relative'}]}>
        <Menu
          ref={setMenuRef}
          button={
            <TouchableOpacity activeOpacity={1} onPress={showMenu} style={Styles.container}>
                <Text style={Styles.textStyle}>DD</Text>
                <IconButton icon="chevron-down"  size={25}/>
            </TouchableOpacity>
          }
          style={Styles.menuStyle}
        >
          <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        </Menu>
      </View>
       
      );
}

export default DropdownMenu;

const Styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    alignItems: 'center',
    shadowColor: '#f0f0f0',
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 5,
    height: 50,
    borderWidth:1,
    borderColor: Colors.textGray,
    overflow: 'hidden',
    paddingHorizontal: 20,
    marginEnd: 15,
    
  },
  textStyle: {
    width: '70%',
  },
  title: {
    color: Colors.textGray,
    fontSize: 15,
    marginBottom: 10
  },
  menuStyle:{
    // borderWidth:1,
    // borderColor: Colors.textGray,
    // borderRadius: 5,
    // marginEnd: 15,
    // padding: 10,
    // paddingBottom:5,
    height: 200,
    // position: 'absolute',
    // width: '100%',
    // top: '100%',
    bottom: '100%',
    // backgroundColor: Colors.light,
    // zIndex: 9,
    // overflow: 'scroll'
  },
  itemStyle: {
    paddingBottom:5,
    backgroundColor: Colors.light
  }

});

