import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, ScrollView } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
import BlockButton from '../../components/BlockButton';
import Colors from '../../constants/Colors';
import CountryCurrencyPicker from '../../CountryCurrencyPicker';
import I18n from '../../i18n';
import * as RNLocalize from "react-native-localize";

let locales;
const handleLocales = async () => {
  locales = RNLocalize.getLocales();
}

getLocale = () => {
  if (locales) {
    if (Array.isArray(locales)) {
      // console.log(locales[0].languageCode)
      return locales[0];
    }
  }
  return null;
}
const WelcomeScreen = props => {
  handleLocales();
  const currentLanguage = getLocale().languageCode;
  const [language, setLanguage] = useState(currentLanguage);

  const changeLang = event => {
    setLanguage(event)
    I18n.locale = event

  }

  return (
    <ScrollView style={{ backgroundColor: Colors.light }}>
      <View style={Style.Container}>

        {/* Logo part */}
        <Image source={ImagesPaths.Logo} style={Style.LogoStyle} />

        {/* Language Part */}
        <Text style={Style.TitleStyle}>{I18n.t("chooseLanguage")}</Text>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <TouchableOpacity style={Style.LangButton} onPress={() => changeLang('en')}>
            <BlockButton backColor={language == 'en' ? Colors.primary : Colors.light} style={{ width: '100%' }} value='English'></BlockButton>
          </TouchableOpacity>
          <TouchableOpacity style={Style.LangButton} onPress={() => changeLang('ar')}>
            <BlockButton backColor={language == 'en' ? Colors.light : Colors.primary} style={{ width: '100%' }} value='Arabic'></BlockButton>
          </TouchableOpacity>
        </View>
        {/* Country Part */}
        <Text style={Style.TitleStyle}>{I18n.t("chooseCountry")}</Text>
        <View style={{ width: '100%', marginTop: 20, paddingHorizontal: 10 }}>

          <CountryCurrencyPicker type='country'></CountryCurrencyPicker>
          {/* Currency Part */}
        </View>

        <Text style={Style.TitleStyle}>{I18n.t("chooseCurrency")}</Text>
        <View style={{ width: '100%', marginTop: 20, paddingHorizontal: 10 }}>

          <CountryCurrencyPicker type='currency'></CountryCurrencyPicker>
        </View>
        <TouchableOpacity style={{ width: '100%', paddingHorizontal: 10, marginTop: 60 }} onPress={() => props.navigation.navigate("LoginScreen")}>
          <BlockButton backColor={Colors.primary} style={{ width: '100%' }} value='Save'></BlockButton>
        </TouchableOpacity>
      </View>

    
    </ScrollView>
  );
}


export default WelcomeScreen;



