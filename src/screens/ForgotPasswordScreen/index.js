import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import { useDispatch } from 'react-redux';
import { toast } from '../../constants/Toaster';
import LoadingModal from '../../components/LoadingModel';
import *as Action from '../../store/Actions/Auth';

const { height, width } = Dimensions.get('window');

const ForgotPasswordScreen = props => {
  const [email, setEmail] = React.useState({ value: "", IsValid: false, ErrorMsg: '' });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const changeEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      setEmail({ value: text, IsValid: false, ErrorMsg: I18n.t('InvalidEmail') })
    }
    else {
      setEmail({ value: text, IsValid: true, ErrorMsg: '' });
    }
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

  let Globals = require('../../constants/Globals');


  const onPressSend = () => {
    console.log("Entered Send")
    setIsLoading(true);
    // get Language
    // AsyncStorage.getItem('Lang')
    //   .then((item) => {
    //     if (item != undefined) {
    //       item = JSON.parse(item);
    //       console.log("Lang", item.lang)

          dispatch(Action.ForgetPassword({ email: email.value,template: 'default', websiteId: Globals.Language ? 0 : 1 }, (event1) => {
            console.log("ValidateEmail", event1);
            if (event1.ok) {
             setIsLoading(false);
              props.navigation.pop();
            }
            else {
             setIsLoading(false);
              toast(event1.data);
            }
          }));

      //   }

      // })
      // .done();
  }
  return (
    <View style={Style.container}>
      <LoadingModal LoadingModalVisiblty={isLoading} />

      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='ForgotPassword' leftIcon='close' HandleBack={() => props.navigation.pop()}></Header>
      <View style={Style.bodyContainer}>
        {/* Email Part */}
        <Text style={Style.title}>{I18n.t('Email')}</Text>
        <InputText inputType='TextInput'
          value={email.value} HandleChange={changeEmail}
          style={Style.inputTextStyle}
          errorMsg={email.ErrorMsg}
           errorStyle={Style.errorStyle}
           TextStyle={Style.textStyle}
          secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
        ></InputText>

        {/* button part */}
        <TouchableOpacity style={{ width: '100%', marginTop: 50, opacity: email.IsValid ? 1 : 0.5 }} onPress={onPressSend} disabled={!email.IsValid}>
          <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Send'></BlockButton>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default ForgotPasswordScreen;



