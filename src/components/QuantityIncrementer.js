import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Button, IconButton } from 'react-native-paper';
import Colors from '../constants/Colors';

const QuantityIncrementer = props => {
    const [counter,setCounter] = useState(1)
   const changeCounter =(value) =>{
        const temp = counter+value;
        if(temp>=1)
        setCounter(temp);
    }
    return (
        <View style={[styles.container,props.style]}>
             <TouchableOpacity style={styles.minusButton} onPress={()=>changeCounter(-1)}>
                 <IconButton icon='minus' size={15}  color={Colors.lightgray}  />
                 </TouchableOpacity>

             <Text style={styles.valueStyle}>{counter}</Text>
             
             <TouchableOpacity  style={styles.plusButton} onPress={()=>changeCounter(1)}>
                 <IconButton icon='plus' size={15}  color={Colors.lightgray} />
                 </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 20
        flexDirection: 'row',
        alignItems:'center' ,
        width:'30%',
        borderWidth:2,
        borderRadius:5,
        borderColor:Colors.lightgray
        // alignItems:'center',
        // justifyContent:'center',
    
    },
    
   
    minusButton:{
        flex:0.5,
        // justifyContent:'center'

                alignItems:'center'

    },
    plusButton:{
        flex:0.5,
        // justifyContent:'center'
        alignItems:'center',
        
    },
    valueStyle:{
        textAlign:'center',
        // flex:.33,


    }

});
export default QuantityIncrementer