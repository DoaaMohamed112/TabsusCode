import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header'
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import Carousel from '../../components/Carousel';

const { height, width } = Dimensions.get('window');

const ProductScreen = props => {
    const [item, setItem] = useState({
        imgs: ['https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png', 'https://pngimg.com/uploads/tshirt/tshirt_PNG5427.png', 'https://purepng.com/public/uploads/large/purepng.com-red-t-shirtclothingred-t-shirtfashion-dress-shirt-cloth-tshirt-631522326799mcfdo.png'],
        name: 'SKU',
        rate: 3,
        price: 'EG 50'
    })

    return (
        <View style={Style.container}>
            <Header style={Style.headerStyle} leftIcon='back' rightIcon='notification cart' 
            HandleBack={() => props.navigation.openDrawer()}
            onPressNotification={()=> props.navigation.navigate('Notifications')}
            onPressCart={()=> props.navigation.navigate('CartScreen')}
            transparent
            noshadow={true}
            />

            <Carousel images={item.imgs} height={height*0.6}/>
        </View>
    );
};

export default ProductScreen;