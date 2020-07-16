import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import BlockButton from './BlockButton';
import Modal from 'react-native-modal';


const ModalView = (props) => {
  //   const [isModalVisible, setModalVisible] = useState(true);
  
  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

    return (
      <Modal isVisible={props.Isvisible}
        onBackdropPress={props.setModalVisible}
        style={{ margin: 0,   justifyContent: 'flex-end'}}
        backdropOpacity={0}
      >
        {props.children}
      </Modal>
    );
}

const Styles = StyleSheet.create({

  title: {
    fontSize: 20,
    color: Colors.textGray,
    fontWeight: 'bold',
    paddingBottom: 20
  }
});

export default ModalView;