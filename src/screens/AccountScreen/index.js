import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity , ScrollView, Image} from 'react-native';
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

const AccountScreen = props => {
 const [newPassword, setNewPassword] = useState({value:'',isValid:''});
 const [confirmPassword, setConfirmPassword] = useState({value:'',isValid:''});


  return (
    <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Account' leftIcon='menu' HandleBack={() => props.navigation.pop()}></Header>

        <ScrollView>
            <View style={Style.headContainer}>
                  <View style={Style.profileContainer}>
                      {/* profile data */}
                      <Image style={Style.avatarImg} source={ImagesPaths.profile2} />
                      <View style={Style.avatarContent}>
                          <Text style={Style.title}>Jane Doe</Text>
                          <Text ellipsizeMode='tail' numberOfLines={1} style={Style.email}>janedoe@email.com</Text>
                      </View>
                  </View>
                <IconButton icon="camera-outline" color={Colors.darkgray} size={25} style={Style.camIcon}/>
            </View>
            <View style={Style.Content}>
                <Text style={Style.listItem} >Account Information</Text>
                <Text style={Style.listItem} >My Orders</Text>
                <Text style={Style.listItem} onPress={()=> props.navigation.navigate('AddressBookScreen')}>Address Book</Text>
                <Text style={Style.listItem} >My Returns</Text>
                <Text style={Style.listItem} onPress={()=> props.navigation.navigate('WalletScreen')}>My Wallet</Text>
                <Text style={Style.listItem} >Points & Vouchers</Text>
                <Text style={Style.listItem} onPress={()=> props.navigation.navigate('NewPasswordScreen')}>Change Password</Text>
                <Text style={Style.listItem} >Logout</Text>
            </View>
        </ScrollView>
    </View>
  );
}


export default AccountScreen;



