import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import LoadingModal from '../../components/LoadingModel';
import { toast } from '../../constants/Toaster';

import *as Action from '../../store/Actions/Auth';

import { useDispatch } from 'react-redux';
 const { height, width } = Dimensions.get('window');

const VerificationCodeScreen = props => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changeEmail = event => {
    setEmail(event);
  };

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const CELL_COUNT = 4;
  const [value, setValue] = React.useState('');
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const dispatch = useDispatch();

  useEffect(() => {

    //get screen dimensions
    // const updateDimensions = () => {
    //   setScreenHeight(Dimensions.get('window').height);
    //   setScreenWidth(Dimensions.get('window').width);
    // }
    // //when orientation of screen changes, get updated width & height
    // Dimensions.addEventListener('change', updateDimensions);
    // return () => {
    //   Dimensions.removeEventListener('change', updateDimensions);
    // }
  });

  const send =() =>{
    setIsLoading(true);
    dispatch(Action.ActivateAccount(
      {
        "confirmationKey":value
      },
      (event) => {
        setIsLoading(false);

        if (event.ok)
        props.navigation.navigate('HomeStackNavigator');
        else
          toast(event.data);
      }))
  }
  return (
    <View style={Style.container}>
            <LoadingModal LoadingModalVisiblty={isLoading} />

      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='VerificationCode' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
      <ScrollView contentContainerStyle={{height:'100%',flexGrow:1}}>

      <View style={Style.bodyContainer}>
      <CodeField
        ref={ref}
        {...prop}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={Style.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[Style.cell, isFocused && Style.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

           {/* Resend part */}
        <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                <BlockButton fontStyle={{ fontSize: FontSizes.pragraph, fontWeight: 'bold' }} backColor={Colors.light} style={{borderWidth:0}} value='Resend'></BlockButton>
            </TouchableOpacity>
        {/* button part */}
        <TouchableOpacity onPress={send} style={{ width: '100%', marginTop: 20 }} >
                <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Send'></BlockButton>
            </TouchableOpacity>
      </View>
      </ScrollView>

    </View>
  );
}


export default VerificationCodeScreen;



