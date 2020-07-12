import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import { validateForm , validate } from '../../Validation/Validation'; 

const { height, width } = Dimensions.get('window');

const NewPasswordScreen = props => {
  const [currentPassword, setCurrentPassword] = useState({value:'',isValid:''});
  const [newPassword, setNewPassword] = useState({value:'',isValid:''});
  const [confirmPassword, setConfirmPassword] = useState({value:'',isValid:''});

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
  return (
    <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='ChangePassword' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
      <View style={Style.bodyContainer}>
        {/* New Password Part */}
  <Text style={Style.title}>{I18n.t('CurrentPassword')}</Text>
        <InputText inputType='TextInput'
          value={currentPassword.value} HandleChange={(val)=>{let result = validate('password',val);setCurrentPassword({value:val,isValid:result.IsValid})}}
          style={Style.inputTextStyle}  Isvalid={currentPassword.isValid}
          secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
        ></InputText>
        {/* New Password Part */}
  <Text style={Style.title}>{I18n.t('NewPassword')}</Text>
        <InputText inputType='TextInput'
          value={newPassword.value} HandleChange={(val)=>{let result = validate('password',val);setNewPassword({value:val,isValid:result.IsValid})}}
          style={Style.inputTextStyle}  Isvalid={newPassword.isValid}
          secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
        ></InputText>

  {/* Confirm Password Part */}
  <Text style={Style.title}>{I18n.t('ConfirmPassword')}</Text>
        <InputText inputType='TextInput'
          value={confirmPassword.value} HandleChange={(val)=>{let result = validate('password',val);setConfirmPassword({value:val,isValid:result.IsValid})}}
          style={Style.inputTextStyle} Isvalid={confirmPassword.isValid}
          secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
        ></InputText>

        {/* button part */}
        <TouchableOpacity disabled={confirmPassword.value!=newPassword.value && newPassword.IsValid!='success'} style={{ position:'absolute',bottom:100,width: '100%',alignSelf:'center', marginTop: 20 }} >
                <BlockButton fontStyle={{fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%',opacity:(confirmPassword.value!=newPassword.value && newPassword.IsValid!='success')?0.5:1 }} value='Save'></BlockButton>
            </TouchableOpacity>
      </View>
    </View>
  );
}


export default NewPasswordScreen;



