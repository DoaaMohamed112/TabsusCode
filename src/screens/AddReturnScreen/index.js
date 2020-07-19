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
import ImagePicker from 'react-native-image-picker';

const { height, width } = Dimensions.get('window');

const AddReturnScreen = props => {
    const [firstName, setFirstName] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [message, setMessage] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [address, setAddress] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [mobile, setMobile] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [email, setEmail] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [reason, setReason] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [orderNum, setOrderNum] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [orderDate, setOrderDate] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [quantity, setQuantity] = useState({value: "", IsValid: true, ErrorMsg: ''});
    const [itemNum, setItemNum] = useState({value: "", IsValid: true, ErrorMsg: ''});

  

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
        case 'address':{
            if(text != '')
            {
                setAddress({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setAddress({value: text, IsValid: false, ErrorMsg: 'Please enter your address!'})
            }
        }
        case 'reason':{
            if(text != '')
            {
                setReason({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setReason({value: text, IsValid: false, ErrorMsg: 'Please enter reason of return!'})
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
        case 'itemNum':{
            if(text != '')
            {
                setItemNum({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setItemNum({value: text, IsValid: false, ErrorMsg: 'Please enter your message!'})
            }
        }
        case 'quantity':{
            if(text != '')
            {
                setQuantity({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setQuantity({value: text, IsValid: false, ErrorMsg: 'Please enter your message!'})
            }
        }
        case 'orderDate':{
            if(text != '')
            {
                setOrderDate({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setOrderDate({value: text, IsValid: false, ErrorMsg: 'Please enter your message!'})
            }
        }
        case 'ordernum':{
            if(text != '')
            {
                setOrderNum({value: text, IsValid: true, ErrorMsg: ''})
            }
            else 
            {
                setOrderNum({value: text, IsValid: false, ErrorMsg: 'Please enter your message!'})
            }
        }
        default:
          break;
      }
    };
  


    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='MyReturns' leftIcon='close' HandleBack={() => props.navigation.pop()}></Header>

            <ScrollView style={Style.socialContainer} >


                <View style={Style.form}>
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('firstName', e)} value={firstName.value} errorMsg={firstName.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Name'} style={Style.inputStyle} />
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('mobile', e)} value={mobile.value} errorMsg={mobile.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Mobile'} style={Style.inputStyle} />
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('email' , e)} value={email.value} errorMsg={email.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'EmailAddress'} style={Style.inputStyle} />
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('address', e)} value={address.value} errorMsg={address.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'Address'} style={Style.inputStyle} />
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{flex: 0.5,paddingEnd: 10}}>  
                          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('ordernum', e)} value={orderNum.value} errorMsg={orderNum.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'OrderNum'} style={Style.inputStyle} />
                      </View>
                      <View style={{flex: 0.5,paddingStart: 10}}>  
                          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('orderDate', e)} value={orderDate.value} errorMsg={orderDate.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'OrderDate'} style={Style.inputStyle} />
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{flex: 0.5,paddingEnd: 10}}>  
                          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('quantity', e)} value={quantity.value} errorMsg={quantity.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'quantity'} style={Style.inputStyle} />
                      </View>
                      <View style={{flex: 0.5,paddingStart: 10}}>  
                          <InputText inputType="TextInput" HandleChange={(e) => onChangeText('itemNum', e)} value={itemNum.value} errorMsg={itemNum.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'itemNum'} style={Style.inputStyle} />
                      </View>
                    </View>

                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('reason', e)} value={reason.value} errorMsg={reason.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'ReasonForReturn'} style={Style.inputStyle} />
                    <InputText inputType="TextInput" HandleChange={(e) => onChangeText('message', e)} value={message.value} alignVerticalTop={true} errorMsg={message.ErrorMsg} errorStyle={Style.errorStyle} TextStyle={Style.textStyle} title={'ReasonForReturn'} style={Style.TextEreaStyle} />
                 

                    <TouchableOpacity style={{ width: '100%', justifyContent: 'flex-end' ,marginVertical: 50 }} >
                        <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%', height: 50, justifyContent: 'center' }} value='Send'></BlockButton>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </View>
    );
}


export default AddReturnScreen;



