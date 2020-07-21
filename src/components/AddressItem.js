import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Colors from '../constants/Colors';
import {IconButton} from 'react-native-paper';

const AddressItem = props => {
  return (
    <View style={[Styles.container, props.style]}>
      <View style={{padding: 10, flex: 0.8}}>
        <Text style={Styles.data}>{props.name}</Text>
        <Text style={Styles.data}>{props.city}</Text>
        <Text style={Styles.data}>{props.street}</Text>
        <Text style={Styles.data}>{props.mobile}</Text>
      </View>
     {!props.hasNoIcon && <View style={{flex: 0.2}}>
        <IconButton
          icon="check"
          style={{backgroundColor: Colors.greenSuccess, alignSelf: 'flex-end'}}
          size={20}
          color={Colors.light}
        />
      </View>}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.textGray,
    borderRadius: 5,
    flexDirection: 'row',
  },
  data: {
    paddingVertical: 2.5,
    fontWeight: 'bold',
  },
});

export default AddressItem;
