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

const {height, width} = Dimensions.get('window');

const SignupScreen = props => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={Style.container}>
      <Header
        style={{height: 70}}
        title="SignUP"
        leftIcon="back"
        HandleBack={() => props.navigation.pop()}
      />

      <ScrollView style={Style.socialContainer} >
        <Text style={Style.title}>Sign with your social account</Text>
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
          <Text style={Style.lineTextStyle}>OR</Text>
        </View>

        <Text style={Style.title}>Sign up with your email address</Text>

        <View style={Style.form}>
          <InputText inputType="TextInput" value={firstName}  TextStyle={Style.textStyle} title={'First Name'} style={Style.inputStyle} />
          <InputText inputType="TextInput" value={lastName} TextStyle={Style.textStyle} title={'Last Name'} style={Style.inputStyle} />
          <InputText inputType="TextInput" value={email} TextStyle={Style.textStyle} title={'Email'} style={Style.inputStyle} />
          <InputText inputType="TextInput" value={mobile} TextStyle={Style.textStyle} title={'Mobile'} style={Style.inputStyle} />
          <InputText inputType="TextInput" value={passowrd} TextStyle={Style.textStyle} title={'Password'} style={Style.inputStyle} />
          <InputText inputType="TextInput" value={confirmPassword} TextStyle={Style.textStyle} title={'Confirm Password'} style={Style.inputStyle} />
      
          <TouchableOpacity style={{ width: '100%', marginTop: 50 }} >
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%',height: 50, justifyContent: 'center' }} value='SignUP'></BlockButton>
          </TouchableOpacity>
            {/* Sign Up part */}
      <View
        style={{
          flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}>
        <Text style={{color: Colors.secondary}}>
          {/* {I18n.t('termsAndConditions')}{' '} */}
          By completing this sign up i agree to 
        </Text>
        <TouchableOpacity>
          <Text onPress={() => props.nav.navigate('SigupScreen')}>
            {/* {I18n.t('RegisterNow')} */}
            Terms and condition
          </Text>
        </TouchableOpacity>
      </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
