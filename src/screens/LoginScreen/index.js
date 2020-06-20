import React from 'react'
import { View, FlatList, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Style from './style'
import BlockButton from '../../components/BlockButton'
import Colors from '../../constants/Colors'
import FontSizes from '../../constants/FontSizes'
import ImagesPaths from '../../constants/ImagesPaths'
import LoginForm from './LoginForm'

const LoginScreen = props => {

    return (
        <ScrollView style={Style.container}>
            <Header style={{ height: 70 }} title='Login' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>

            {/* Social Account */}
            <View >
                <Text style={{ textAlign: 'center', paddingTop: 50 }}>Sign with your social account</Text>
                <View style={Style.SocialContainer}>
                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                        <TouchableOpacity style={[Style.SocialIconContainer]}>
                            <Image style={Style.socialIconStyle} source={ImagesPaths.facebook} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <TouchableOpacity style={Style.SocialIconContainer}>
                            <Image style={Style.socialIconStyle} source={ImagesPaths.google} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={Style.OrStyle}>
                    <Text>OR</Text>
                </View>
            </View>
        <LoginForm></LoginForm>

        </ScrollView>
    )
}

export default LoginScreen