import React, { useEffect } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
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
 const { height, width } = Dimensions.get('window');

const VerificationCodeScreen = props => {
  const [email, setEmail] = React.useState('');
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
  return (
    <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='VerificationCode' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
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
        <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Send'></BlockButton>
            </TouchableOpacity>
      </View>
    </View>
  );
}


export default VerificationCodeScreen;



