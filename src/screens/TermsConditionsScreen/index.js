import React, { useEffect } from 'react';
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
const { height, width } = Dimensions.get('window');

const TermsConditionsScreen = props => {
 
  const terms='Lorem ipsum dolor sit amet, consectetur adiLorem ipsum dolor sit amet,dunt u piscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt us'
  return (
    <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='termsAndConditions' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
      <ScrollView style={{padding:30}}>
      <Text style={{color:Colors.textGray,letterSpacing:1}}>{terms}</Text>
      </ScrollView>
    </View>
  );
}


export default TermsConditionsScreen;



