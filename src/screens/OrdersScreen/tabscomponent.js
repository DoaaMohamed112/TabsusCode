import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet, Text,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';



const Tabs = props => {
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
        <TouchableOpacity onPress={() => props.setSelectedTab(1)} style={[Styles.tabStyle, {borderBottomColor: props.selectedTab == 1 ? Colors.primary : Colors.tabsBack }]}>
          <Text style={{color: 'black',textAlign: 'center'}}>Current Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => props.setSelectedTab(2)} style={[Styles.tabStyle, {borderBottomColor: props.selectedTab == 2 ? Colors.primary : Colors.tabsBack }]}>
          <Text style={{color: 'black',textAlign: 'center'}}>Last Orders</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Tabs;

const Styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.tabsBack,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabStyle: {
      paddingHorizontal: 20,
      paddingVertical: 20 - 5,
      width: '50%',
      borderBottomWidth: 5,
    }
});
