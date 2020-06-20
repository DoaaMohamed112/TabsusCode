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
const { height, width } = Dimensions.get('window');

const ForgotPasswordScreen = props => {
  const [email, setEmail] = React.useState('');
  const changeEmail = event => {
    setEmail(event);
  };

  useEffect(() => {

    //get screen dimensions
    const updateDimensions = () => {
      setScreenHeight(Dimensions.get('window').height);
      setScreenWidth(Dimensions.get('window').width);
    }
    //when orientation of screen changes, get updated width & height
    Dimensions.addEventListener('change', updateDimensions);
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    }
  });
  return (
    <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='ForgotPassword' leftIcon='close' HandleBack={() => props.navigation.pop()}></Header>
      <View style={Style.bodyContainer}>
        {/* Email Part */}
        <Text style={Style.title}>Email</Text>
        <InputText inputType='TextInput'
          value={email} HandleChange={changeEmail}
          style={Style.inputTextStyle}
          secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
        ></InputText>

        {/* button part */}
        <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Send'></BlockButton>
            </TouchableOpacity>
      </View>
    </View>
  );
}


export default ForgotPasswordScreen;



