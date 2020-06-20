import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, FlatList } from 'react-native';
import Color from '../constants/Colors';
import FontSizes from '../constants/FontSizes';
import getOptions from './util'
import ImagesPaths from '../constants/ImagesPaths';
import Colors from '../constants/Colors';
const Styles = StyleSheet.create({
 
  containerButton:
    { 
     flexDirection: 'row', 
     alignItems: 'center',
     borderColor: Colors.dark, 
     borderWidth: 1 ,
     paddingVertical:5
    },
    flagStyle:{ width: '100%', height: '100%', flex: 0.2 },
    arrowStyle:{ width: 15, height: 15, flex: 0.1, resizeMode: 'contain' }
});

const CountryCurrencyPicker = props => {
  // get all countries stored
  const options = getOptions();
  const [chosen, setChosen] = useState(options[0])
  const [visibleList, setVisibleLIst] = useState(false)

  const showList = () => {
    setVisibleLIst(!visibleList)
  }

  const hideList = (item) => {
    setChosen(item)
    setVisibleLIst(!visibleList)

  }
  return (
    <View>
      <TouchableOpacity onPress={() => showList()}>
        {/* container button */}
        <View style={Styles.containerButton}>
          <View style={Styles.flagStyle}>
            {/* flag icon */}
            <Image
              source={chosen.icon}
              mode="stretch"
              style={{ alignSelf: 'center' }}
            /></View>
            {/* country name */}
            <Text style={{ flex: 0.7 }}>{props.type=='country'?chosen.name:chosen.currency}</Text>
          {/* arrow */}
          <Image source={ImagesPaths.arrowDown} style={Styles.arrowStyle}

          />
        </View>
      </TouchableOpacity>
    {/* List of countries */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshing={true}
          data={options}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => hideList(item)} style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'center', backgroundColor: Colors.light }}>
              <View style={{ width: '100%', height: '100%', flex: 0.2 }}>
                <Image
                  source={item.icon}
                  mode="stretch"
                  style={{ alignSelf: 'center' }}
                /></View>
              <Text style={{ flex: 0.7 }}>{props.type=='country'?item.name:item.currency}</Text>
            </TouchableOpacity>

          )}
          keyExtractor={item => item._id}
        />
      </Modal>
    </View>
  );
};

export default CountryCurrencyPicker;

