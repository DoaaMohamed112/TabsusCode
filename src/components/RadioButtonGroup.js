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
       <View style={[Styles.container,props.style]}>
           {props.labels.map((item, index) => {
               return(
                   <View style={[Styles.rowContainer, {backgroundColor: selectedItem == item ? Colors.tabsBack: Colors.light,  borderEndWidth: selectedItem == item ? 8 : 0}]}>
                       <TouchableOpacity onPress={() => onSelect(item)} style={[Styles.iconContainer,{ borderWidth : selectedItem == item ? 2 : 0 , backgroundColor: selectedItem == item ? Colors.greenSuccess : Colors.lightgray, borderColor: selectedItem == item ? Colors.greenSuccess : Colors.primary }]}>
                          {selectedItem == item ?  <IconButton icon={"check"} color={Colors.light} size={18} style={Styles.active} /> : null}
                       </TouchableOpacity>
                       <View style={{width: '100%', paddingEnd: 20, flexDirection: 'row'}}>
                           <Text style={Styles.title}>{item}</Text>
                           {props.RightText && props.itemIndex ==  index ? <Text style={Styles.rightText}>{props.RightText}</Text> : null}
                       </View>
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
        paddingVertical:20,
        paddingHorizontal: 40,
        borderColor: Colors.greenSuccess,
        justifyContent:'center',
        
    },
    iconContainer: {
        width: 23,
        height: 23,
        borderRadius: 20,
        marginHorizontal: 10,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    active:{
        backgroundColor: Colors.greenSuccess,
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'center',
        width: '70%',
    },
    rightText: {
        marginLeft: 'auto',
        textAlign: 'right',
        color: Colors.lightblue,
        fontSize: 15,
        fontWeight: 'bold',
        width: '30%',
        textAlignVertical: 'center'
    }
});

export default RadioButtonGroup;