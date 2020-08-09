import React from "react";

import { StyleSheet, Modal, ActivityIndicator, View } from "react-native";

import Colors from "../constants/Colors";

const LoadingModal = React.memo(({ LoadingModalVisiblty }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={LoadingModalVisiblty}
    >
      <View style={styles.ModalLoadingView}>
        <View style={styles.centeredView}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  centeredView: {
    margin: 20,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },

  ModalLoadingView: {
    padding: 36,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});
export default LoadingModal ;
