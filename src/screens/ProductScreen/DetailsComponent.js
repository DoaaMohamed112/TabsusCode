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
import I18n from '../../i18n';
import Colors from '../../constants/Colors';
import StarRating from 'react-native-star-rating';
import {IconButton} from 'react-native-paper';
import ImagesPaths from '../../constants/ImagesPaths';
import CategoryBar from '../../components/CategoryBar';
import MainItem from '../../components/MainItem';
import { color } from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');

const DetailsComponent = props => {
 

  return (
    <View style={Styles.container}>
      {/* description */}
      <View style={Styles.content}>
  <Text style={Styles.maintitle}>{I18n.t('Description').toUpperCase()}</Text>
        <Text style={Styles.pargText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.{' '}
        </Text>
      </View>
      {/* information */}
      <View style={Styles.content}> 
  <Text style={Styles.title}>{I18n.t('MoreInformation').toUpperCase()}</Text>
      <View style={Styles.moreInfoContent}>
          <View style={Styles.InfoContainer}>
            <Text style={Styles.infoTitle}>PATTERN</Text>
            <Text style={Styles.infoText}>SOLID</Text>
          </View>
          <View style={Styles.InfoContainer}>
            <Text style={Styles.infoTitle}>STYLE</Text>
            <Text style={Styles.infoText}>CLASSIC</Text>
          </View>

      </View>
      </View>
    </View>
  );
};

export default DetailsComponent;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  maintitle: {
    color: Colors.textGray,
    fontSize: 15,
    marginBottom: 15
  },
  pargText: {
    color: Colors.textGray,
    fontSize: 15,
    lineHeight: 23
  },
  content:{
    borderColor: Colors.tabsBackground,
    borderBottomWidth: 1,
    padding: 15,
  },
  title: {
    color: Colors.darkgray,
    fontSize: 15,
    marginBottom: 15
  },
  moreInfoContent:{
    paddingVertical: 10,
  },
  InfoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%'
  },
  infoTitle: {
    backgroundColor: Colors.tabsBack,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 15,
    marginEnd: 20,
    width: '30%',
    textAlign: 'center'
  },
  infoText: {
    backgroundColor: Colors.light,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontSize: 15,
    borderColor: Colors.tabsBack,
    borderWidth: 1,
    width: '30%',
    textAlign: 'center'
  }
  
});
