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
import ImagePicker from 'react-native-image-picker';

const { height, width } = Dimensions.get('window');

const AccountScreen = props => {
 const [newPassword, setNewPassword] = useState({value:'',isValid:''});
 const [confirmPassword, setConfirmPassword] = useState({value:'',isValid:''});

 const [img, setImg] = useState();
 const options = {
  title: '',
  
  takePhotoButtonTitle:'Take a Photo',
  chooseFromLibraryButtonTitle:'From Gallery',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

 // show Image Picker
 const showImagePicker = () => {


  ImagePicker.showImagePicker(options, (response) => {

    // Launch Camera:console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      console.log(source)

      setImg(source)
    }
  });
}

  return (
    <View style={Style.container}>
      <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Account' leftIcon='menu' HandleBack={() => props.navigation.openDrawer()}></Header>

        <ScrollView style={{}} >
            <View style={Style.headContainer}>
                  <View style={Style.profileContainer}>
                      {/* profile data */}
                      <Image style={Style.avatarImg} source={img==null?ImagesPaths.profile2:img} />
                      <View style={Style.avatarContent}>
                          <Text style={Style.title}>Jane Doe</Text>
                          <Text ellipsizeMode='tail' numberOfLines={1} style={Style.email}>janedoe@email.com</Text>
                      </View>
                  </View>
                <IconButton icon="camera-outline" onPress={()=>showImagePicker()} color={Colors.darkgray} size={25} style={Style.camIcon}/>
            </View>
            <View style={Style.Content}>
                <Text style={Style.listItem} onPress={()=> props.navigation.navigate('AccountInfoScreen')} >Account Information</Text>
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



