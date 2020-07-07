import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput, Picker, Dimensions} from 'react-native';
import Colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import StarRating from 'react-native-star-rating';
const {height, width} = Dimensions.get('window');

const MainItem = props => {
  const {item} = props;

  const [itemData, setItem] = useState(item);

  const updateItem = () => {
    let temp = {...itemData};
    temp.IsFav = !itemData.IsFav;
    setItem({...temp});
  };

  return (
    <TouchableOpacity
      style={[
        Styles.container,
        props.itemStyle,
        props.IsLeft ? Styles.margRight : null,
      ]}
      activeOpacity={1}
      onPress={props.onPress}>
      <View style={Styles.imgContainer}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          {itemData.IsFav != undefined && (
            <View style={{flex: 0.5, alignItems: 'flex-start'}}>
              <IconButton
                icon="heart"
                size={25}
                color={!itemData.IsFav ? Colors.light : Colors.primary}
                onPress={updateItem}
                style={Styles.iconContainer}
              />
            </View>
          )}
          {itemData.discount != undefined && (
            <View style={{flex: 0.5, alignItems: 'flex-end'}}>
              {itemData.discount !== '0%' && (
                <Text style={Styles.discountStyle}>{itemData.discount}</Text>
              )}
            </View>
          )}
        </View>
        <Image source={{uri: itemData.img}} style={Styles.imgStyle} />
      </View>

      <View style={Styles.itemDetailsContainer}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={Styles.title}>
          {itemData.name}
        </Text>
        {itemData.rate != undefined && (
          <StarRating
            disabled={true}
            emptyStar={'star'}
            fullStar={'star'}
            halfStar={'star'}
            maxStars={5}
            rating={itemData.rate}
            fullStarColor={Colors.primary}
            emptyStarColor={Colors.lightgray}
            starSize={20}
            starStyle={{paddingHorizontal: 1}}
          />
        )}
       { itemData.price!=undefined &&
       <Text ellipsizeMode="tail" numberOfLines={1} style={Styles.price}>
          {itemData.price}
        </Text>
        }
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
},
  imgStyle: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  imgContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: Colors.backGray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '10%',
  },
  iconContainer: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: Colors.lightgray,
    marginHorizontal: '10%',
  },
  discountStyle: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: Colors.error,
    // marginHorizontal: '10%',
    elevation: 5,
    borderRadius: 3,
    color: Colors.light,
  },
  itemDetailsContainer: {
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '5%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {
    fontSize: 14,
    color: Colors.lightblue,
    fontWeight: 'bold',
  },
  margLeft: {
    marginLeft: 10,
  },
  margRight: {
    marginRight: 20,
  },
});

export default MainItem;
