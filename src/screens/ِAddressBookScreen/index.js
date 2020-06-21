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

const AddressBookScreen = props => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [city, setCity] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [zip, setZip] = React.useState('');

    useEffect(() => {

        // //get screen dimensions
        // const updateDimensions = () => {
        //     setScreenHeight(Dimensions.get('window').height);
        //     setScreenWidth(Dimensions.get('window').width);
        // }
        // //when orientation of screen changes, get updated width & height
        // Dimensions.addEventListener('change', updateDimensions);
        // return () => {
        //     Dimensions.removeEventListener('change', updateDimensions);
        // }
    });
    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='AddressBook' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
            <ScrollView style={Style.bodyContainer}>
                {/* Name Part */}
                <Text style={Style.title}>{I18n.t('FirstName')}</Text>
                <InputText inputType='TextInput'
                    value={firstName} HandleChange={(e) => { setFirstName(e) }}
                    style={Style.inputTextStyle}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText>
                {/* Last Name Part */}
                <Text style={Style.title}>{I18n.t('LastName')}</Text>
                <InputText inputType='TextInput'
                    value={lastName} HandleChange={(e) => { setLastName(e) }}
                    style={Style.inputTextStyle}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText>
                {/* Mobile Part */}
                <Text style={Style.title}>{I18n.t('Mobile')}</Text>
                <InputText inputType='TextInput'
                    value={mobile} HandleChange={(e) => { setMobile(e) }}
                    style={Style.inputTextStyle}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText>
                {/* Company Part */}
                <Text style={Style.title}>{I18n.t('Company')}</Text>
                <InputText inputType='TextInput'
                    value={company} HandleChange={(e) => { setCompany(e) }}
                    style={Style.inputTextStyle}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText>
                {/* City Part */}
                <Text style={Style.title}>{I18n.t('City')}</Text>
                <InputText inputType='TextInput'
                    value={city} HandleChange={(e) => { setCity(e) }}
                    style={Style.inputTextStyle}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText>
                {/*Street Part */}
                <Text style={Style.title}>{I18n.t('StreetAddress')}</Text>
                <InputText inputType='TextInput'
                    value={street} HandleChange={(e) => { setStreet(e) }}
                    style={Style.inputTextStyle}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText>
                {/* Zip Part */}
                <Text style={Style.title}>{I18n.t('Zip')}</Text>
                <InputText inputType='TextInput'
                    value={zip} HandleChange={(e) => { setZip(e) }}
                    style={Style.inputTextStyle}
                    secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
                ></InputText>

                {/* button part */}
                <TouchableOpacity style={{ width: '100%', marginTop: 20,marginBottom:'20%' }} >
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='SaveAddress'></BlockButton>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}


export default AddressBookScreen;



