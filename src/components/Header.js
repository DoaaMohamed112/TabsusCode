import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Color from '../constants/Colors';
import i18n from '../i18n'
import {
  Header,
  Left,
  Body,
  Right,
  Subtitle,

  Icon,
  Title,
  Text,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPaths from '../constants/ImagesPaths';
import { Button, IconButton } from 'react-native-paper';
import Colors from '../constants/Colors';

const Styles = StyleSheet.create({
  Container: {
    flex: 0,
    width: '100%',
  },
  title: {
    fontFamily: 'barmeno-regular',
    fontSize: 18,
    letterSpacing: 1,
    color: Color.light,


  },
  iconInverse: {
    transform: [{ scaleX: -1 }],
    marginLeft: 'auto'
  },
  rightIcon: {
    alignItems: 'flex-end'
  },
  iconStyle: {
    width: 25
  }
});

const MainHeader = props => {

  return (
    <Header
      style={{ ...{ backgroundColor: Color.dark, flexDirection: i18n.locale == 'ar' ? 'row-reverse' : 'row' }, ...props.style }}
      androidStatusBarColor={Color.dark}
      noShadow={props.noshadow}
      transparent={props.transparent}>
      {/* left */}
      <Left style={{ flex: 0.15, alignItems: i18n.locale == 'ar' ? 'flex-start' : 'flex-start' }}>
        {
          props.leftIcon == 'back' ? (
            <IconButton icon="chevron-left" size={25} color={Colors.light} onPress={props.HandleBack} style={[i18n.locale == 'ar' ? Styles.iconInverse : null]} >
            </IconButton>

          )
            : props.leftIcon == 'close' ? (
              <IconButton icon="close" size={25} color={Colors.light} onPress={props.HandleBack} style={[i18n.locale == 'ar' ? Styles.iconInverse : null]} >
              </IconButton>

            ) :
              null
        }
      </Left>
      {/* content */}
      <Body style={[{ flex: 0.85, flexDirection: i18n.locale == 'ar' ? 'row-reverse' : 'row' }, i18n.locale == 'ar' ? Styles.rightIcon : null]}>
        <View style={[{ width: '50%', justifyContent: 'center', alignSelf: 'center', alignItems: i18n.locale == 'ar' ? 'flex-end' : 'flex-start' }, props.bodyStyle]}>
          {props.title && <Text style={Styles.title}>{i18n.t(props.title)}</Text>}
          {props.Subtitle ? <Subtitle>{props.Subtitle}</Subtitle> : null}
        </View>
        {/* Right */}
        {props.rightIcon && <View style={{ alignSelf: 'center', width: '50%', alignItems: i18n.locale == 'ar' ? 'flex-start' : 'flex-end' }}>
          {props.rightIcon == 'general' ? (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={props.onPressNotification}><IconButton icon='bell-outline' color={Colors.light} style={Styles.iconStyle} /></TouchableOpacity>
              <TouchableOpacity onPress={props.onPressSearch}><IconButton icon='magnify' color={Colors.light} style={Styles.iconStyle} /></TouchableOpacity>
              <TouchableOpacity onPress={props.onPressCart}><IconButton icon='cart-outline' color={Colors.light} style={Styles.iconStyle} /></TouchableOpacity>
            </View>
          ) :
            props.children
          }
        </View>}

      </Body>

    </Header>
  );
};

export default MainHeader;
