import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Style from './style';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import BlockButton from '../../components/BlockButton';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
import {IconButton} from 'react-native-paper';
import InputText from '../../components/InputText';
import I18n from '../../i18n';
import Select from '../../components/Dropdown';

const {height, width} = Dimensions.get('window');

const SignupScreen = props => {

  const [firstName, setFirstName] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [lastName, setLastName] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [email, setEmail] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [mobile, setMobile] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [passowrd, setPassword] = useState({value: "", IsValid: true, ErrorMsg: 'Use upper and lower case letters'});
  const [confirmPassword, setConfirmPassword] = useState({value: "", IsValid: true, ErrorMsg: ''});

  const onChangeText = (label, text) => {
    switch (label) {
      case 'firstName': {
        let reg = /^(([A-Za-z]|[\u0621-\u064A])+[,.]?[ ]?|([A-Za-z]|[\u0621-\u064A])+['-]?)+$/; 
        if(reg.test(text) === false) 
        {
            setFirstName({value: text, IsValid: false, ErrorMsg: 'Invalid First Name'})
        }
        else{
            setFirstName({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'lastName': {
        let reg = /^(([A-Za-z]|[\u0621-\u064A])+[,.]?[ ]?|([A-Za-z]|[\u0621-\u064A])+['-]?)+$/; 
        if(reg.test(text) === false) 
        {
            setLastName({value: text, IsValid: false, ErrorMsg: 'Invalid Last Name'})
        }
        else{
          setLastName({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'email': {
        let reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(text) === false) 
        {
            setEmail({value: text, IsValid: false, ErrorMsg: 'Invalid Email'})
        }
        else{
            setEmail({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'mobile': {
        let reg =  /^(01\d{9})$/;
        if(reg.test(text) === false) 
        {
            setMobile({value: text, IsValid: false, ErrorMsg: 'Invalid Mobile Number'})
        }
        else{
          setMobile({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'password': {
        let reg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if(reg.test(text) === false) 
        {
            setPassword({value: text, IsValid: false, ErrorMsg: 'Please enter a password with minimum eight characters, at least one uppercase letter, one lowercase letter and one number'})
        }
        else{
          setPassword({value: text, IsValid: true, ErrorMsg: ''})
        }
        break;
      }
      case 'confirmPassword': {
        if(passowrd.value != text) 
        {
            setConfirmPassword({value: text, IsValid: false, ErrorMsg: 'password not match'})
        }
        else{
          setConfirmPassword({value: text, IsValid: true, ErrorMsg: ''})
        }

        break;
      }
      default:
        break;
    }
  };

  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        title="SignUP"
        leftIcon="back"
        HandleBack={() => props.navigation.pop()}
      />

      <ScrollView style={Style.socialContainer} >
        <Text style={Style.title}>{I18n.t('SignInWith')}</Text>
        <View style={Style.accountIconsContainer}>
          <TouchableOpacity>
            <IconButton
              icon={ImagesPaths.facebook}
              size={35}
              style={Style.IconStyle}
              color={Colors.light}
            />
          </TouchableOpacity>
          <TouchableOpacity style={Style.Icon2ContainerStyle}>
            <Image style={Style.Icon2Style} source={ImagesPaths.google} />
          </TouchableOpacity>
        </View>

        <View style={Style.lineStyle}>
          <Text style={Style.lineTextStyle}>{I18n.t('OR')}</Text>
        </View>

        <Text style={Style.title}>{I18n.t('SignUpWithEmail')}</Text>

        <View style={Style.form}>
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('firstName' , e)} value={firstName.value}  errorMsg={firstName.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'FirstName'} style={Style.inputStyle} />
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('lastName' , e)} value={lastName.value} errorMsg={lastName.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'LastName'} style={Style.inputStyle} />
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('email' , e)} value={email.value} errorMsg={email.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Email'} style={Style.inputStyle} />
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('mobile' , e)} value={mobile.value} errorMsg={mobile.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Mobile'} style={Style.inputStyle} />
        <View style={{flexDirection: 'row'}}>
          <Select style={{flex: 0.4}} title={'Dateofbirth'}>

          </Select>
          <Select style={{flex: 0.4}}>

          </Select>
          <Select style={{flex: 0.4}}>

          </Select>
          </View>
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('password' , e)} value={passowrd.value} secureTextEntry errorMsg={passowrd.ErrorMsg} errorStyle={[Style.errorStyle, {color: passowrd.IsValid ? Colors.lightblue : Colors.error}]} TextStyle={Style.textStyle} title={'Password'} style={Style.inputStyle} />
          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('confirmPassword' , e)} value={confirmPassword.value} secureTextEntry errorMsg={confirmPassword.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'ConfirmPassword'} style={Style.inputStyle} />

          <TouchableOpacity style={{ width: '100%', marginTop: 50 }} >
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%',height: 50, justifyContent: 'center' }} value='SignUP'></BlockButton>
          </TouchableOpacity>
            {/* Sign Up part */}
      <View
        style={{
          flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row',
          justifyContent: 'center',
          marginTop: 30,
          marginBottom: 30,
          marginHorizontal: 5,
          overflow: 'hidden',
          flexWrap: 'wrap',
        }}>
        <Text style={{color: Colors.secondary,fontSize: 12}}>
          {I18n.t('termsAndConditionsStatement')}{' '}
        </Text>
        <TouchableOpacity>
          <Text style={{textDecorationLine: 'underline', textDecorationStyle: 'solid',fontSize: 13}} onPress={() => props.nav.navigate('SigupScreen')}>
            {I18n.t('termsAndConditions')}
          </Text>
        </TouchableOpacity>
      </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
