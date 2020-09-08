import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import Style from '../screens/SplashScreen/style';
import I18n from '../i18n';
import ModalView from './ModalView';
import LoadingModal from './LoadingModel';
const { width, height } = Dimensions.get('window');


const SideBar = (props) => {
    const [menuItems, setMenuItems] = useState([
        {
            active: true,
            TitleBtn: I18n.t("Home"),
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: I18n.t("Gifts"),
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: I18n.t("Settings"),
            ScreenName: "SettingsScreen",
        },
        {
            active: false,
            TitleBtn: I18n.t("MarketPlace"),
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: I18n.t("AboutUs"),
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: I18n.t("RateUs"),
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: I18n.t("ContactUs"),
            ScreenName: "ContactScreen",
        },
        {
            active: false,
            TitleBtn: I18n.t("FAQ"),
            ScreenName: "FAQScreen",
        },
        {
            active: false,
            TitleBtn: I18n.t("ReturnsRefund"),
            ScreenName: "ReturnsConditionsScreen",
        },
        {
            active: false,
            TitleBtn: I18n.t("FeedbackImprove"),
            ScreenName: "FeedbackScreen",
        },
        {
            active: false,
            TitleBtn: I18n.t("termsAndConditions"),
            ScreenName: "TermsConditionsScreen",
        },
        {
            active: false,
            TitleBtn: I18n.t("Logout"),
            ScreenName: "Logout",
        },


    ]);

    const [IsModalVisible, setIsModalVisible] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    const onPressOk = async () => {
        setIsModalVisible(false);
        setIsLoading(true);
        await AsyncStorage.clear();
        setIsLoading(false);
    }


    const selectItem = (item) => {
        if (item.ScreenName == "Logout") {
            setIsModalVisible(true);
            console.log("Logout");
            // AsyncStorage.setItem('Lang', JSON.stringify({ lang: "en" }));
        }
        else {
            let index = menuItems.findIndex(i => i.TitleBtn == item.TitleBtn);
            let index2 = menuItems.findIndex(i => i.active == true);
            let list = [...menuItems];
            console.log('index', index);
            if (index != index2) {
                list[index].active = true;
                list[index2].active = false;
                setMenuItems([...list]);
                props.navigation.navigate(item.ScreenName);
            }
        }
    };

    return (
        <>
            <LoadingModal LoadingModalVisiblty={isLoading} />

            <View style={Styles.container}>

                <View style={Styles.upperPart}>
                    <View style={Styles.blackBox} />
                    <View style={Styles.grayBox} />
                    {/* content of header */}
                    <View style={Styles.upperContent}>
                        <Image style={Styles.headerImg} source={require('../assets/images/whitelogo.png')} />
                        {/* profile data */}
                        <View style={Styles.avatarContainer}>
                            <Image style={Styles.avatarImg} source={require('../assets/images/Profile.png')} />
                            <View style={Styles.avatarContent}>
                                <Text style={Styles.title}>Jane Doe</Text>
                                <Text ellipsizeMode='tail' numberOfLines={1} style={Styles.email}>janedoe@email.comksdkjkljaskljdkl</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* menu items */}
                <ScrollView style={Styles.lowerPart}>
                    {menuItems.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => selectItem(item)} style={[Styles.itemStyle, { borderBottomWidth: index != menuItems.length - 1 ? 1 : 0 }]}>
                                <Text style={[Styles.itemTextStyle, { color: item.active ? Colors.darkgray : Colors.lightgray }]}>{item.TitleBtn}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

                <ModalView Isvisible={IsModalVisible} message={I18n.t("LogoutWarningMessage")} OkTitle={I18n.t("Yes")} CancelTitle={I18n.t("No")} setModalVisible={() => { setIsModalVisible(false) }} warningMessage onPressOkBtn={onPressOk} onPressCancelBtn={() => setIsModalVisible(false)}></ModalView>
            </View>
        </>
    );
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: Colors.light,
    },
    upperPart: {
        flex: 0.4
        // height: height * 0.4
    },
    lowerPart: {
        flex: 0.6

        // height: height * 0.6,
    },
    blackBox: {
        width: '125%',
        height: '100%',
        backgroundColor: Colors.dark,
        transform: [{ rotate: '-10deg' }],
        marginLeft: '-15%',
        marginTop: '-10%',
        position: 'absolute',
        top: 0,
        zIndex: 2,
    },
    grayBox: {
        width: '125%',
        height: '100%',
        backgroundColor: Colors.lightgray,
        transform: [{ rotate: '10deg' }],
        marginLeft: '-15%',
        marginTop: '-10%',
        position: 'absolute',
        top: '-5%',
        zIndex: 1
    },
    upperContent: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        zIndex: 3,
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        paddingVertical: '10%',
        paddingHorizontal: '20%'
    },
    headerImg: {
        width: '100%',
        resizeMode: 'contain',
        height: '40%'
    },
    avatarContainer: {
        width: '120%',
        marginTop: '-5%',
        flexDirection: 'row',
    },
    avatarImg: {
        width: '20%',
        resizeMode: 'contain',
    },
    avatarContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: '80%',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.light
    },
    email: {
        fontSize: 13,
        color: Colors.light
    },
    itemStyle: {
        width: '100%',
        borderColor: Colors.lightgray,

        paddingVertical: 20
    },
    itemTextStyle: {
        fontSize: 15,
        color: Colors.textGray,
        textAlign: 'center',
        fontWeight: 'bold',

    }

});

export default SideBar;