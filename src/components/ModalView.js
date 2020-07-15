import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import BlockButton from './BlockButton';
import Modal from 'react-native-modal';


const ModalView = (props) => {
    const [isModalVisible, setModalVisible] = useState(true);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

    return (
      <Modal isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{ margin: 0,   justifyContent: 'flex-end'}}

      >
        <View style={{ flex: 0.3, backgroundColor: Colors.light, alignItems:'center' }}>
          <TouchableOpacity > 
            <Text style={Styles.title}>Popularity</Text>
           </TouchableOpacity>
        </View>
      </Modal>
    );
}

const Styles = StyleSheet.create({
  
  title: {
    fontSize: 20,
    color: Colors.textGray,
    fontWeight: 'bold'
  }
});

export default ModalView;