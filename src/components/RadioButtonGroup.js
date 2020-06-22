import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Picker } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Style from '../screens/CheckoutScreen/style';


const RadioButtonGroup = props => {

    const [selectedItem, setSelected] = useState(props.labels[0]);

    const onSelect = (item) => {
        setSelected(item);
        props.handleChange(item);
    }
   
    return (
       <View style={Styles.container}>
           {props.labels.map(item => {
               return(
                   <View style={Styles.rowContainer}>
                       <TouchableOpacity onPress={() => onSelect(item)} style={[Styles.iconContainer,{ borderWidth : selectedItem == item ? 2 : 0 , backgroundColor: selectedItem == item ? Colors.light : Colors.lightgray}]}>
                          {selectedItem == item ?  <View style={Styles.active}></View> : null}
                       </TouchableOpacity>
                       <View><Text style={Styles.title}>{item}</Text></View>
                   </View>
               );
           })}
       </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        paddingVertical:10
    },
    rowContainer: {
        flexDirection: 'row',
        // marginTop: 20,
        alignItems: 'center',
        paddingVertical:20
    },
    iconContainer: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginHorizontal: 10,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    active:{
        backgroundColor: Colors.primary,
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default RadioButtonGroup;