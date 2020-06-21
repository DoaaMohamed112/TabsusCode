import React from 'react'
import { View, FlatList, TouchableOpacity, Text , SafeAreaView} from 'react-native'
import Header from '../../components/Header'
import Style from './style'
import CartItem from './CartItem'
import BlockButton from '../../components/BlockButton'
import Colors from '../../constants/Colors'
import FontSizes from '../../constants/FontSizes'
import I18n from '../../i18n'

const CartScreen = props => {
    const dummyList = [1, 2, 4, 1, 2, 6,8];

    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} title='Cart' leftIcon='back' HandleBack={() => props.navigation.pop()}></Header>
           <SafeAreaView style={{paddingBottom: '25%'}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                refreshing={true}
                data={dummyList}
                renderItem={({ item, index }) => (
                    <CartItem price={20} size='XL' color='red' productName="Product Name" currency='EG' itemImage={require('../../assets/dummyImages/DummyTshirt.png')}></CartItem>
                )}
                keyExtractor={item => item._id}
            />

</SafeAreaView>
            {/* footer */}
            <View style={Style.footerStyle}>
                <View style={{ flexDirection: I18n.locale=='ar'?'row-reverse': 'row' }}>
                <Text style={{ fontWeight: 'bold', flex: 0.5 }}>{I18n.t('TotalSummation')}</Text>
                    {/* price */}

                    <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                        <Text style={Style.priceStyle}>EG 20</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                    <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Checkout'></BlockButton>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen