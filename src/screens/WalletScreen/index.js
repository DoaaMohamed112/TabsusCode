import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Styles from './style'
import I18n from '../../i18n'
import OrderStatus from '../../components/OrderStatus'
import BlockButton from '../../components/BlockButton'
import FontSizes from '../../constants/FontSizes'
import Colors from '../../constants/Colors'
import Header from '../../components/Header'


const WalletScreen = (props) => {

    return (
        <View style={Styles.container}>
         <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='Wallet' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>

            <Text style={Styles.haveText}>{I18n.t('YouHave')}</Text>
            <Text style={Styles.amount}>EG 1500</Text>

            <Text style={Styles.title}>{I18n.t('Payments')}</Text>
            <FlatList

                showsVerticalScrollIndicator={false}
                refreshing={true}
                data={[0, 1, 3,5,6,8, 7]}
                renderItem={({ item, index }) => (
                    <OrderStatus style={{ borderRadius: 0, borderBottomWidth: 0, elevation: 0 }} orderNumber='1234567' status='Done' date='4/1/2020 6:20 pm'></OrderStatus>
                )}
                keyExtractor={item => item._id}
            />

                    {/* footer */}
            <View style={Styles.footerStyle}>
                <TouchableOpacity style={{ width: '100%'}} >
                    {/* <BlockButton fontStyle={{ fontSize: FontSizes.pragraph, fontWeight: 'bold' }} backColor={Colors.light} style={{ width: '100%' }} value='ViewOrderDetails'></BlockButton> */}
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} iconSize={25} backColor={Colors.light} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} value='WalletShipping'></BlockButton>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WalletScreen