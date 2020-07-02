import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import Style from './style';
import BlockButton from '../../components/BlockButton';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
import ImagesPaths from '../../constants/ImagesPaths';
import InputText from '../../components/InputText';
import I18n from '../../i18n';
const LoginForm = props => {
  const [email, setEmail] = React.useState('');
  const [passowrd, setPassword] = React.useState('');
  // ---------------------------------------------------
  const changePasswod = event => {
    setPassword(event);
  };

  const changeEmail = event => {
    setEmail(event);
  };

  return (
    <View style={styles.container}>
      {/* Email Part */}
      <Text style={styles.title}>{I18n.t('EmailOrUser')}</Text>
      <InputText
        inputType="TextInput"
        value={email}
        HandleChange={changeEmail}
        style={styles.inputTextStyle}
        secureTextEntry={false}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* Password Part */}
      <Text style={styles.title}>{I18n.t('Password')}</Text>
      <InputText
        inputType="TextInput"
        value={passowrd}
        HandleChange={changePasswod}
        style={styles.inputTextStyle}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {/* forgot password */}
      <TouchableOpacity
        style={styles.forgotContainer}
        onPress={() => props.nav.navigate('ForgotPasswordScreen')}>
        <Text>{I18n.t('ForgotYourPassword')}</Text>
      </TouchableOpacity>

      {/* Login button */}
      <TouchableOpacity
        style={{width: '100%', marginTop: 20}}
        onPress={() => props.nav.navigate('VerificationCodeScreen')}>
        <BlockButton
          fontStyle={{fontSize: FontSizes.subtitle, fontWeight: 'bold'}}
          backColor={Colors.primary}
          style={{width: '100%'}}
          value="Login"
        />
      </TouchableOpacity>

      {/* Sign Up part */}
      <View
        style={{
          flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row',
          justifyContent: 'center',
          marginTop: 120,
          marginBottom: 30,
        }}>
        <Text style={{color: Colors.secondary}}>
          {I18n.t('DontHaveAccount')}{' '}
        </Text>
        <TouchableOpacity>
          <Text onPress={() => props.nav.navigate('SigupScreen')}>
            {I18n.t('RegisterNow')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    color: Colors.textGray,
    marginBottom: 10,
  },
  inputTextStyle: {
    width: '100%',
    marginBottom: 20,
  },
  forgotContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
export default LoginForm;
