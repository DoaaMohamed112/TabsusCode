import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import { IconButton } from 'react-native-paper';

const { height, width } = Dimensions.get('window');

const FeedbackScreen = props => {
    const [firstName, setFirstName] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [message, setMessage] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [title, setTitle] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [mobile, setMobile] = useState({value: "", IsValid: true, ErrorMsg: ''});

  

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
        case 'title':{
            if(text != '')
            {
                setTitle({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setTitle({value: text, IsValid: false, ErrorMsg: 'Please enter a title!'})
            }
        }
        case 'message':{
            if(text != '')
            {
                setMessage({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setMessage({value: text, IsValid: false, ErrorMsg: 'Please enter your message!'})
            }
        }
        default:
          break;
      }
    };
  


    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Feedback' leftIcon='menu' HandleBack={() => props.navigation.openDrawer()}></Header>

            <ScrollView style={Style.socialContainer} >


                <View style={Style.form}>
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('firstName', e)} value={firstName.value} errorMsg={firstName.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Name'} style={Style.inputStyle} />
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('mobile', e)} value={mobile.value} errorMsg={mobile.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Mobile'} style={Style.inputStyle} />
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('title', e)} value={title.value} errorMsg={title.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Title'} style={Style.inputStyle} />
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('message', e)} value={message.value} alignVerticalTop={true} errorMsg={message.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'TheMessage'} style={Style.TextEreaStyle} />
                 

                    <TouchableOpacity style={{ width: '100%', justifyContent: 'flex-end' ,marginVertical: 50 }} >
                        <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%', height: 50, justifyContent: 'center' }} value='Send'></BlockButton>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </View>
    );
}


export default FeedbackScreen;



