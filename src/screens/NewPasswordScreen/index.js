import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
import *as Action from '../../store/Actions/Auth';
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import { validateForm , validate } from '../../Validation/Validation'; 
import { toast } from '../../constants/Toaster';
import LoadingModal from '../../components/LoadingModel';
import { useDispatch } from 'react-redux';

const { height, width } = Dimensions.get('window');

const NewPasswordScreen = props => {
  const [passowrd, setPassword] = useState({ value: "", IsValid: true, ErrorMsg: '' });
  const [confirmPassword, setConfirmPassword] = useState({ value: "", IsValid: true, ErrorMsg: '' });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  // useEffect(() => {

  //   //get screen dimensions
  //   const updateDimensions = () => {
  //     setScreenHeight(Dimensions.get('window').height);
  //     setScreenWidth(Dimensions.get('window').width);
  //   }
  //   //when orientation of screen changes, get updated width & height
  //   Dimensions.addEventListener('change', updateDimensions);
  //   return () => {
  //     Dimensions.removeEventListener('change', updateDimensions);
  //   }
  // });

  const changeNewPassword = (text) => {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (reg.test(text) === false) {
      setPassword({ value: text, IsValid: false, ErrorMsg: I18n.t('PasswordValidation') })
    }
    else {
      setPassword({ value: text, IsValid: true, ErrorMsg: '' });
    }
  }

  const changeConfirmPassword = (text) => {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (reg.test(text) === false) {
      setConfirmPassword({ value: text, IsValid: false, ErrorMsg: I18n.t('PasswordValidation') })
    }
    else {
      setConfirmPassword({ value: text, IsValid: true, ErrorMsg: '' });
    }
  }

  const checkValidation = () => {
    if (passowrd != "" && confirmPassword != "" && passowrd.IsValid && confirmPassword.IsValid)
      return true;
    else
      return false;
  }

  const onSend = () => {
    setIsLoading(true);
    dispatch(Action.ChangePassword({ currentPassword: passowrd.value, newPassword: confirmPassword.value }, (event1) => {
      console.log("change password response", event1);
      if (event1.ok) {
        setIsLoading(false);
        console.log("Done");
        toast("You have successfully change your passowrd");
        props.navigation.pop();
      }
      else
      {
        setIsLoading(false);
        toast(event1.data)
      }
    }));
  }

  return (
    <View style={Style.container}>
        <LoadingModal LoadingModalVisiblty={isLoading} />
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='ChangePassword' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
      <View style={Style.bodyContainer}>
        {/* New Password Part */}             
        <InputText inputType='TextInput'
          value={passowrd.value} HandleChange={(val)=>{changeNewPassword(val)}}
          style={Style.inputTextStyle}  Isvalid={passowrd.isValid}
          secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
          errorMsg={passowrd.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle}
          title={'NewPassword'}
        ></InputText>

  {/* Confirm Password Part */}
        <InputText inputType='TextInput'
          value={confirmPassword.value} HandleChange={(val)=>{changeConfirmPassword(val)}}
          style={Style.inputTextStyle} Isvalid={confirmPassword.isValid}
          secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
          errorMsg={confirmPassword.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle}
          title={'ConfirmPassword'}
        ></InputText>

        {/* button part */}
        <TouchableOpacity disabled={!checkValidation()} onPress={onSend} style={{ position:'absolute',bottom:100,width: '100%',alignSelf:'center', marginTop: 20, opacity : checkValidation() ? 1 : 0.5 }} >
                <BlockButton fontStyle={{fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%'}} value='Save'></BlockButton>
            </TouchableOpacity>
      </View>
    </View>
  );
}


export default NewPasswordScreen;



