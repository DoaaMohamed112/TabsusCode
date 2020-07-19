import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Style from './style'
import ImagesPaths from '../../constants/ImagesPaths';
import Header from '../../components/Header'
import BlockButton from '../../components/BlockButton';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import StarRating from 'react-native-star-rating';
import InputText from '../../components/InputText';
import I18n from '../../i18n';

const { height, width } = Dimensions.get('window');

const ReviewOrderScreen = props => {
    const [quality, setQuality] = useState(0)
    const [price, setPrice] = useState(0)
    const [value, setValue] = useState(0)
    const [comment, setComment] = useState('')
    return (
        <View style={Style.container}>
            <Header style={{ height: 70 }} bodyStyle={{ width: '80%' }} title='OrderDetails' leftIcon='close' HandleBack={() => props.navigation.pop()}></Header>
            <KeyboardAvoidingView behavior={'padding'} style={{width: '100%', height: height - 100}}>
                <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* quality */}

                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={Style.rateTitle}>{I18n.t('Quality').toUpperCase()}</Text>
                        <StarRating
                            disabled={false}
                            emptyStar={'star'}
                            fullStar={'star'}
                            halfStar={'star'}
                            maxStars={5}
                            rating={quality}
                            fullStarColor={Colors.primary}
                            emptyStarColor={Colors.lightgray}
                            starSize={20}
                            starStyle={{ paddingHorizontal: 1 }}
                            selectedStar={(val) => { setQuality(val) }}
                        />
                    </View>
                    {/* Price */}
                    <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={Style.rateTitle}>{I18n.t('Price').toUpperCase()}</Text>
                        <StarRating
                            disabled={false}
                            emptyStar={'star'}
                            fullStar={'star'}
                            halfStar={'star'}
                            maxStars={5}
                            rating={price}
                            fullStarColor={Colors.primary}
                            emptyStarColor={Colors.lightgray}
                            starSize={20}
                            starStyle={{ paddingHorizontal: 1 }}
                            selectedStar={(val) => { setPrice(val) }}
                        />
                    </View>
                    {/* Value */}
                    <View style={{ flexDirection: 'row', }}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={Style.rateTitle}>{I18n.t('Value').toUpperCase()}</Text>
                        <StarRating
                            disabled={false}
                            emptyStar={'star'}
                            fullStar={'star'}
                            halfStar={'star'}
                            maxStars={5}
                            rating={value}
                            fullStarColor={Colors.primary}
                            emptyStarColor={Colors.lightgray}
                            starSize={20}
                            starStyle={{ paddingHorizontal: 1 }}
                            selectedStar={(val) => { setValue(val) }}
                        />
                    </View>

                    {/* comment part */}
                    <View style={Style.CommentContainer}>
                        <InputText alignVerticalTop inputType="TextInput" HandleChange={(e) => setComment(e)} value={comment} multiline={true} alignVerticalTop="top" title={'Comment'} style={Style.InputContainer} />

                    </View>
                </ScrollView>

                <View style={Style.footerStyle}>
                    <TouchableOpacity style={{ width: '100%', marginTop: 20 }} >
                        <BlockButton fontStyle={{ fontSize: FontSizes.subtitle, fontWeight: 'bold' }} backColor={Colors.primary} style={{ width: '100%' }} value='Submit'></BlockButton>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default ReviewOrderScreen;
