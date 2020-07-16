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

const FAQScreen = props => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);


    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    return (
        <View style={Style.container}>

            <Header style={{ height: 70 }} title='Settings' leftIcon='menu'
                HandleBack={() => props.navigation.openDrawer()}
            ></Header>

            <ScrollView>
                <View style={Style.settingBox}>
                    <Text>{I18n.t('settingBox')}</Text>
                    <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
                </View>
                <View style={Style.settingBox}>
                    <Text>{I18n.t('settingBox')}</Text>
                    <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
                </View>
                <View style={Style.settingBox}>
                    <Text>{I18n.t('settingBox')}</Text>
                    <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
                </View>
                <View style={Style.settingBox}>
                    <Text>{I18n.t('settingBox')}</Text>
                    <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
                </View>
                <View style={Style.settingBox}>
                    <Text>{I18n.t('settingBox')}</Text>
                    <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
                </View>
                <View style={Style.settingBox}>
                    <Text>{I18n.t('settingBox')}</Text>
                    <IconButton icon={'chevron-right'} size={25} style={{ marginStart: 'auto' }}></IconButton>
                </View>
            </ScrollView>

        </View>
    );
}


export default FAQScreen;
