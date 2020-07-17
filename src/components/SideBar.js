import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from 'react-native-paper';
import Style from '../screens/SplashScreen/style';

const { width, height } = Dimensions.get('window');


const SideBar = (props) => {
    const [menuItems, setMenuItems] = useState([
        {
            active: true,
            TitleBtn: "Home",
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: "Gifts",
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: "Settings",
            ScreenName: "SettingsScreen",
        },
        {
            active: false,
            TitleBtn: "Market Place",
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: "About Us",
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: "Rate Us",
            ScreenName: "Home",
        },
        {
            active: false,
            TitleBtn: "Contact Us",
            ScreenName: "ContactScreen",
        },
        {
            active: false,
            TitleBtn: "FAQ",
            ScreenName: "FAQScreen",
        },
        {
            active: false,
            TitleBtn: "Returns and Refund",
            ScreenName: "ReturnsConditionsScreen",
        },
        {
            active: false,
            TitleBtn: "Feedback to improve us",
            ScreenName: "FeedbackScreen",
        },
        {
            active: false,
            TitleBtn: "Terms & Conditions",
            ScreenName: "TermsConditionsScreen",
        },
        {
            active: false,
            TitleBtn: "Logout",
            ScreenName: "Home",
        },


    ]);

    const selectItem = (item) => {
        let index = menuItems.findIndex(i => i.TitleBtn == item.TitleBtn);
        let index2 = menuItems.findIndex(i => i.active == true);
        let list = [...menuItems];
        console.log('index',index);
        if(index != index2)
        {
            list[index].active = true;
            list[index2].active = false;
            setMenuItems([...list]);
            props.navigation.navigate(item.ScreenName);
        }

    };

    return (
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
                            <TouchableOpacity onPress={() => selectItem(item)} style={[Styles.itemStyle, { borderBottomWidth: index != menuItems.length - 1 ? 1 : 0}]}>
                                <Text style={[Styles.itemTextStyle, {color: item.active ? Colors.darkgray : Colors.lightgray }]}>{item.TitleBtn}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
        </View>

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