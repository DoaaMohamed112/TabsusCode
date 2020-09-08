import React, {useState} from 'react';
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
import BlockButton from './BlockButton';
import Modal from 'react-native-modal';
import Style from '../screens/CategoryItemsScreen/style';

const ModalView = props => {

  return (
    <Modal
      isVisible={props.Isvisible}
      onBackdropPress={props.setModalVisible}
      style={{
        margin: props.menu ? 0 : '10%',
        justifyContent: props.menu ? 'flex-end' : 'center',
      }}
      backdropOpacity={props.menu ? 0 : 0.7}>
      {props.successMessage != undefined ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.light,
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}>
          <IconButton
            icon="check"
            size={25}
            style={{backgroundColor: Colors.greenSuccess, marginBottom: 20}}
            color={Colors.light}
          />
          <Text style={{fontSize: 15, marginBottom: 10, textAlign: 'center'}}>{props.message}</Text>
        </View>
      ) : props.confirmationMessage != undefined ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.light,
            paddingHorizontal: 20,
            paddingVertical: 60,
          }}>
          <Text style={{fontSize: 15, textAlign: 'center'}}>{props.message}</Text>
        </View>
      ) : props.warningMessage != undefined ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.light,
            paddingHorizontal: 20,
            paddingVertical: 40,
          }}>
          <Text style={{fontSize: 15, textAlign: 'center'}}>{props.message}</Text>
          <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center',marginTop: 20}}>
            <TouchableOpacity onPress={props.onPressOkBtn}><Text style={{fontSize: 15,color:Colors.lightblue,paddingHorizontal:20}}>{props.OkTitle}</Text></TouchableOpacity>
        <TouchableOpacity onPress={props.onPressCancelBtn}><Text style={{fontSize: 15,color:Colors.lightblue,paddingHorizontal:20}}>{props.CancelTitle}</Text></TouchableOpacity>
          </View>
        </View>
      ) : props.children}
    </Modal>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.textGray,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default ModalView;
