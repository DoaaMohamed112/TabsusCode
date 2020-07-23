import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet, Text,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import I18n from '../i18n';


const ProductTabs = props => {
  const [width, setWidth] =  useState(Dimensions.get('window').width);
  const [height, setHeight] =  useState(Dimensions.get('window').height);

  useEffect(() => {
    // event listener for landscape or portrait detection 
    const updatLayout = () => {
      const { width, height } = Dimensions.get('window');
      setWidth(width);
      setHeight(height);
    };

    Dimensions.addEventListener('change', updatLayout);
    return () => {
      Dimensions.removeEventListener('change', updatLayout);
    };
  })

  return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={() => props.setSelectedTab(1)} style={[Styles.tabStyle, {backgroundColor: props.selectedTab == 1 ? Colors.light : Colors.tabsBackground }]}>
          <Text style={{color: 'black'}}>{I18n.t('Product')}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => props.setSelectedTab(2)} style={[Styles.tabStyle, {backgroundColor: props.selectedTab == 2 ? Colors.light : Colors.tabsBackground }]}>
          <Text style={{color: 'black'}}>{I18n.t('Details')}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => props.setSelectedTab(3)} style={[Styles.tabStyle, {backgroundColor: props.selectedTab == 3 ? Colors.light : Colors.tabsBackground }]}>
          <Text style={{color: 'black'}}>{I18n.t('Reviews')}</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ProductTabs;

const Styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.tabsBackground,
      width: '100%',
      flexDirection: 'row',
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5
    },
    tabStyle: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      marginHorizontal: 5
    }
});
