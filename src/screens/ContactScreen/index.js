import React, { useEffect, useState } from 'react';
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header';
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import I18n from '../../i18n'
import RadioButtonGroup from '../../components/RadioButtonGroup';
import Style from './style';
import { IconButton, Switch } from 'react-native-paper';


const { height, width } = Dimensions.get('window');

const ContactScreen = props => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);


    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    return (
        <View style={Style.container}>

            <Header style={{ height: 70 }} title='Contact' leftIcon='menu'
                HandleBack={() => props.navigation.openDrawer()}
            ></Header>

            <View style={Style.settingBox}>
                <View style={Style.boxAvatar}>
                    <View style={Style.avatarContainer}>
                        <Image source={ImagesPaths.whatsapp} style={Style.avatar} />
                    </View>
                    <View>
                        <Text style={Style.title}>Whats App</Text>
                        <Text style={Style.details}>Contact us on WhatsApp</Text>
                    </View>
                </View>

                <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
            </View>
            <View style={Style.settingBox}>
                <View style={Style.boxAvatar}>
                    <View style={Style.avatarContainer}>
                        <Image source={ImagesPaths.call} style={Style.avatar} />
                    </View>
                    <View>
                        <Text style={Style.title}>Call Us</Text>
                        <Text style={Style.details}>Contact us by calling</Text>
                    </View>
                </View>

                <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
            </View>
            <View style={Style.settingBox}>
                <View style={Style.boxAvatar}>
                    <View style={Style.avatarContainer}>
                        <Image source={ImagesPaths.facebook} style={Style.avatar} />
                    </View>
                    <View>
                        <Text style={Style.title}>Facebook</Text>
                        <Text style={Style.details}>Contact us on Facebook</Text>
                    </View>
                </View>

                <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
            </View>

         

        </View>
    );
}


export default ContactScreen;
