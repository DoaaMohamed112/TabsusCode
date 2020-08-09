import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Style from '../screens/CheckoutScreen/style';
import StarRating from 'react-native-star-rating';


const RadioButtonGroup = props => {

    // const [props.selectedItem, setSelected] = useState(props.labels[0]);

    const onSelect = (item) => {
        // setSelected(item);
        props.handleChange(item);
    }
    // console.log(props.selectedItem)

    return (
        <View style={[Styles.container, props.style]}>
            {props.reverse ?
                props.labels.map((item, index) => {
                    return (
                        <View style={[Styles.rowReverseContainer, {flexDirection: 'row-reverse', backgroundColor: props.selectedItem == item ? Colors.radioBtnback : Colors.light, borderEndWidth: props.selectedItem == item ? 10 : 0 , marginEnd: props.selectedItem != item ? 10 : 0}]}>
                            <TouchableOpacity onPress={() => onSelect(item)} style={[Styles.iconContainer, { borderWidth: props.selectedItem == item ? 2 : 0, backgroundColor: props.selectedItem == item ? Colors.greenSuccess : Colors.lightgray, borderColor: props.selectedItem == item ? Colors.greenSuccess : Colors.primary }]}>
                                {props.selectedItem == item ? <IconButton icon={"check"} color={Colors.light} size={18} style={Styles.active} /> : null}
                            </TouchableOpacity>
                            <View style={{width: props.rating ? '30%' : '80%', marginStart: 'auto'}}>
                                {props.rating ? 
                                  <StarRating
                                  disabled={true}
                                  emptyStar={'star'}
                                  fullStar={'star'}
                                  halfStar={'star'}
                                  maxStars={5}
                                  rating={item}
                                  fullStarColor={Colors.primary}
                                  emptyStarColor={Colors.lightgray}
                                  starSize={15}
                                  starStyle={{paddingHorizontal: 1}}
                                />
                                : <Text style={[Styles.title, {color: Colors.lightgray }]}>{item}</Text>}
                            </View>
                        </View>
                    );
                }) :
                props.labels.map((item, index) => {
                    return (
                        <View style={[Styles.rowContainer, { backgroundColor: props.selectedItem == item ? Colors.tabsBack : Colors.light, borderEndWidth: props.selectedItem == item ? 8 : 0 }]}>
                            <TouchableOpacity onPress={() => onSelect(item)} style={[Styles.iconContainer, { borderWidth: props.selectedItem == item ? 2 : 0, backgroundColor: props.selectedItem == item ? Colors.greenSuccess : Colors.lightgray, borderColor: props.selectedItem == item ? Colors.greenSuccess : Colors.primary }]}>
                                {props.selectedItem == item ? <IconButton icon={"check"} color={Colors.light} size={18} style={Styles.active} /> : null}
                            </TouchableOpacity>
                            <View style={{ width: '100%', paddingEnd: 20, flexDirection: 'row' }}>
                                <Text style={Styles.title}>{item}</Text>
                                {props.RightText && props.itemIndex == index ? <Text style={Styles.rightText}>{props.RightText}</Text> : null}
                            </View>
                        </View>
                    );
                })}
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        // marginTop: 20,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderColor: Colors.greenSuccess,
        justifyContent: 'center',
    },
    rowReverseContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: Colors.greenSuccess,
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
    active: {
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