import React from 'react'
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Style from './style'
import BlockButton from '../../components/BlockButton'
import Colors from '../../constants/Colors'
import FontSizes from '../../constants/FontSizes'
import ImagesPaths from '../../constants/ImagesPaths'
import InputText from '../../components/InputText'

const LoginForm = props => {
    const [email, setEmail] = React.useState('');
    const [passowrd, setPassword] = React.useState('');
    // ---------------------------------------------------
    const changePasswod = event => {

        setPassword(event);
    };

    const changeEmail = event => {
        setEmail(event);
    };

    return (
        <View style={styles.container}>
            {/* Email Part */}
            <Text style={styles.title}>Email or User name</Text>
            <InputText inputType='TextInput'
                value={email} HandleChange={changeEmail}
                style={styles.inputTextStyle}
                secureTextEntry={false} autoCapitalize="none" autoCorrect={false}
            ></InputText>

            {/* Password Part */}
            <Text style={styles.title}>Password</Text>
            <InputText inputType='TextInput'
                value={passowrd} HandleChange={changePasswod}
                style={styles.inputTextStyle}
                secureTextEntry={true} autoCapitalize="none" autoCorrect={false}
            ></InputText>

            {/* forgot password */}
            <TouchableOpacity style={styles.forgotContainer}>
                <Text >Forgot your password?</Text>
            </TouchableOpacity>

            {/* Login button */}
            <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Login'></BlockButton>
            </TouchableOpacity>

            {/* Sign Up part */}
            <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:120,marginBottom:30 }}>
                <Text style={{ color: Colors.secondary }}>Don't Have An Account? </Text>
                <TouchableOpacity>
                    <Text >Register Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50
    },
    title: {
        color: Colors.textGray
    },
    inputTextStyle: {
        width: '100%',
        marginBottom: 20
    },
    forgotContainer: {
        width: '100%',
        alignItems: 'center'
    }
})
export default LoginForm