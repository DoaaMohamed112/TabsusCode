import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
// import *as AuthAction from '../../store/Actions/Auth'
import Header from '../../components/Header'
import InputText from '../../components/InputText';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import { validateForm, validate } from '../../Validation/Validation';

const { height, width } = Dimensions.get('window');

const PaymentScreen = props => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState();
  const [expireDate, setExpireDate] = useState();
  const [ccv, setCCV] = useState();

  return (
    <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Payment' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
      <View style={Style.bodyContainer}>
        <ScrollView>
        {/* Name Part */}
        <Text style={Style.title}>{I18n.t('Name')}</Text>
        <InputText inputType='TextInput'
          value={name} HandleChange={(val) => { setName(val) }}
          style={Style.inputTextStyle}
          secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
        ></InputText>


        {/* card number Part */}
        <Text style={Style.title}>{I18n.t('CardNumber')}</Text>
        <InputText inputType='TextInput'
          value={cardNumber} HandleChange={(val) => { setCardNumber(val) }}
          style={Style.inputTextStyle} autoCapitalize="none" autoCorrect={false}
        ></InputText>

        <View style={{ flexDirection: 'row' }}>

          {/* expire date Part */}
          <View style={{flex:0.5,marginRight:10}}>
            <Text style={Style.title}>{I18n.t('ExpireDate')}</Text>
            <InputText inputType='TextInput'
              value={cardNumber} HandleChange={(val) => { setExpireDate(val) }}
              style={Style.inputTextStyle} autoCapitalize="none" autoCorrect={false}
            ></InputText>
          </View>
          {/* CCV Part */}
          <View style={{flex:0.5,marginLeft:10}}>
            <Text style={Style.title}>{I18n.t('CCV')}</Text>
            <InputText inputType='TextInput'
              value={ccv} HandleChange={(val) => { setCCV(val) }}
              style={Style.inputTextStyle} autoCapitalize="none" autoCorrect={false}
            ></InputText>
          </View>
        </View>
        {/* button part */}
        <TouchableOpacity style={{ width: '100%', marginTop:'60%'}} >
          <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Payment'></BlockButton>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}


export default PaymentScreen;



