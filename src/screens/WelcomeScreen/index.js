import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, Dimensions, Text, AsyncStorage, TouchableOpacity, ScrollView } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
import BlockButton from '../../components/BlockButton';
import Colors from '../../constants/Colors';
import CountryCurrencyPicker from '../../CountryCurrencyPicker';
import I18n from '../../i18n';
import * as RNLocalize from "react-native-localize";

import *as Action from '../../store/Actions/Nationality';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import DropdownMenu from '../../components/Dropdown';
import LoadingModel from '../../components/LoadingModel';
import { toast } from '../../constants/Toaster';
// import Globals from '../../constants/Globals';
// import Globals from '../../constants/Globals';

const { height, width } = Dimensions.get('window');

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
  let Globals = require('../../constants/Globals');

  handleLocales();
  const currentLanguage = I18n.locale;
  console.log('currentLanguage', currentLanguage)

  const [language, setLanguage] = useState(currentLanguage);
  const [selectedCurrency, setSelectedCurrency] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [Currencies, setCurrencies] = useState([]);
  const [Countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // const currencies = useSelector(state => state.Nationality.Currencies);
  const changeLang = event => {
    setLanguage(event)
    I18n.locale = event
  }

  useEffect(() => {
    GetData();

  }, []);


  const GetData = () => {
    // get all currencies
    dispatch(Action.GetCurrencies((event) => {
      console.log("result of currency", event)
      if (event.ok) {
        // props.navigate( "HomeStackNavigator");
        console.log('currencies', event.data.available_currency_codes);
        setCurrencies(event.data.available_currency_codes);
        if (event.data.available_currency_codes.length > 0) {
          setSelectedCurrency(event.data.available_currency_codes[0]);
        }

        //------------------------------------------------------------------
        // get all countries
        dispatch(Action.GetCountries((event1) => {
          console.log("result of country", event1)
          if (event1.ok) {
            console.log('countries', event1.data.map(country => country.full_name_english));
            setCountries(event1.data.map(country => country.full_name_english))
            if (event1.data.length > 0) {
              setSelectedCountry(event1.data[0].full_name_english)
            }
            setIsLoading(false);
            // setCountries(event.data.)
            // props.navigate( "HomeStackNavigator");
          }
          else {
            // Alert("Error")
            setIsLoading(false);
            toast(event1.data);

          }
        }));
        //------------------------------------------------------------------
        // setIsLoading(false);
      }
      else {
        // Alert("Error")
        setIsLoading(false);
        toast(event.data);
      }
    }));

  }

  const save = () => {
    AsyncStorage.setItem('Nationality', JSON.stringify({ country: selectedCountry, currency: selectedCurrency }))
    AsyncStorage.setItem('Lang', JSON.stringify({ lang: language }));
    // Globals.Language.setState(language);
    Globals.Language = language;
    // console.log("This language setted",Globals.Language);
    props.navigation.navigate("HomeStackNavigator");

  }
  return (
    <>
      <LoadingModel LoadingModalVisiblty={isLoading} />
      <ScrollView style={{ backgroundColor: Colors.light }}>
        <View style={Style.Container}>

          {/* Logo part */}
          <Image source={ImagesPaths.Logo} style={Style.LogoStyle} />

          {/* Language Part */}
          <Text style={Style.TitleStyle}>{I18n.t("chooseLanguage")}</Text>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <TouchableOpacity style={Style.LangButton} onPress={() => changeLang('en')}>
              <BlockButton backColor={language.includes('en') ? Colors.primary : Colors.light} style={{ width: '100%' }} value='English'></BlockButton>
            </TouchableOpacity>
            <TouchableOpacity style={Style.LangButton} onPress={() => changeLang('ar')}>
              <BlockButton backColor={language.includes('en') ? Colors.light : Colors.primary} style={{ width: '100%' }} value='Arabic'></BlockButton>
            </TouchableOpacity>
          </View>
          {/* Country Part */}
          <Text style={Style.TitleStyle}>{I18n.t("chooseCountry")}</Text>
          <View style={{ width: '100%', marginTop: 20, paddingHorizontal: 10 }}>

            <DropdownMenu textStyle={{ width: '90%' }} menuStyle={{ width: width - 40 }} arrowStyle={{ width: '10%' }} selectedItem={selectedCountry} setSelectedItem={(item, index) => setSelectedCountry(item)} data={Countries}></DropdownMenu>
            {/* Currency Part */}
          </View>

          <Text style={Style.TitleStyle}>{I18n.t("chooseCurrency")}</Text>
          <View style={{ width: '100%', marginTop: 20, paddingHorizontal: 10 }}>

            {/* <CountryCurrencyPicker type='currency'></CountryCurrencyPicker> */}
            <DropdownMenu textStyle={{ width: '90%' }} menuStyle={{ width: width - 40 }} arrowStyle={{ width: '10%' }} selectedItem={selectedCurrency} setSelectedItem={(item, index) => setSelectedCurrency(item)} data={Currencies}></DropdownMenu>
          </View>
          <TouchableOpacity style={{ width: '100%', paddingHorizontal: 10, marginTop: 60 }} onPress={() => save()}>
            <BlockButton backColor={Colors.primary} style={{ width: '100%' }} value='Save'></BlockButton>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </>
  );
}


export default WelcomeScreen;



