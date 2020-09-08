import React, {useState} from 'react';
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
import LoadingModel from '../../components/LoadingModel';
import I18n from '../../i18n';
import { useDispatch } from 'react-redux';
import *as Action from '../../store/Actions/Auth';
import { toast } from '../../constants/Toaster';

const LoginForm = props => {
  const [email, setEmail] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [passowrd, setPassword] = useState({value: "", IsValid: true, ErrorMsg: ''});
  const [isLoading,setIsLoading] = useState(false);
  const [IsFormValid, setIsFormValid] = useState(false);
  // ---------------------------------------------------
  const dispatch = useDispatch();

  const changePasswod = event => {
    let reg =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              //  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
        // console.log(event);
        if(reg.test(event) === false) 
        {
            setPassword({value: event, IsValid: false, ErrorMsg: I18n.t('PasswordValidation')})
        }
        else{
          setPassword({value: event, IsValid: true, ErrorMsg: ''})
        }

        // if(passowrd.IsValid && email.IsValid)
        // {
        //   setIsFormValid(true);
        // }
        // else
        // {
        //   setIsFormValid(false);
        // }
  };

  const changeEmail = event => {
    let reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(event) === false) 
    {
        setEmail({value: event, IsValid: false, ErrorMsg: I18n.t('InvalidEmail')})
    }
    else{
        setEmail({value: event, IsValid: true, ErrorMsg: ''})
    }

    
    // if(passowrd.IsValid && passowrd.value != '' && email.IsValid && email.value != '')
    // {
    //   setIsFormValid(true);
    // }
    // else
    // {
    //   setIsFormValid(false);
    // }
  };

  const SignIn=()=>{
    setIsLoading(true);
   dispatch(Action.login({email:email.value,password:passowrd.value},(event)=>{
    console.log("Login",event);
    if(event.ok)
    {
      dispatch(Action.GetUserData((event2)=>{
        if(event2.ok)
        {
          setIsLoading(false);
          props.nav.navigate('HomeStackNavigator');
        }
        else
        {
          setIsLoading(false);
          toast(event2.data);
        }
       
      }))
    }
    else{
      setIsLoading(false);
      toast(event.data)
    }
   }))

  }
  return (
    <View style={styles.container}>
      <LoadingModel LoadingModalVisiblty={isLoading} />
      {/* Email Part */}
      {/* <Text style={styles.title}>{I18n.t('EmailOrUser')}</Text> */}
      <InputText
        inputType="TextInput"
        value={email.value}
        HandleChange={changeEmail}
        style={styles.inputTextStyle}
        secureTextEntry={false}
        autoCapitalize="none"
        autoCorrect={false}
        errorMsg={email.ErrorMsg} 
        errorStyle={styles.errorStyle}
        TextStyle={styles.textStyle}
        title="EmailOrUser"
      />

      {/* Password Part */}
      {/* <Text style={styles.title}>{I18n.t('Password')}</Text> */}
      <InputText
        title="Password"
        inputType="TextInput"
        value={passowrd.value}
        TextStyle={styles.textStyle}
        HandleChange={changePasswod}
        style={styles.inputTextStyle}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        errorMsg={passowrd.ErrorMsg} 
        errorStyle={styles.errorStyle}
      />

      {/* forgot password */}
      <TouchableOpacity
        style={styles.forgotContainer}
        onPress={() => props.nav.navigate('ForgotPasswordScreen')}>
        <Text>{I18n.t('ForgotYourPassword')}</Text>
      </TouchableOpacity>

      {/* Login button */}
      <TouchableOpacity
        disabled={!(passowrd.IsValid && passowrd.value != '' && email.IsValid && email.value != '')}
        style={{width: '100%', marginTop: 20, opacity: (passowrd.IsValid && passowrd.value != '' && email.IsValid && email.value != '') ? 1 : 0.5 }}
        onPress={() => SignIn()}>
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
        <TouchableOpacity >
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
    height:50
  },
  forgotContainer: {
    width: '100%',
    alignItems: 'center',
  },
  errorStyle: {
    fontSize: 12,
    color: Colors.error,
    marginTop: 10
},
textStyle:{
  marginTop: 20,
},
});
export default LoginForm;
