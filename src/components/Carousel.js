import React, {useState, useEffect} from 'react';
import {View, Dimensions,} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Colors from '../constants/Colors';

/* Image Slider component:
   Props: images urls, height of image
*/
const Carousel = props => {
  const [width, setWidth] =  useState(Dimensions.get('window').width);
  const [height, setHeight] =  useState(Dimensions.get('window').height);

  useEffect(() => {
    // event listener for landscape or portrait detection 
    const updatLayout = () => {
      const { width, height } = Dimensions.get('window');
      setWidth(width);
      setHeight(height);
    };

    Dimensions.addEventListener('change', updatLayout);
    return () => {
      Dimensions.removeEventListener('change', updatLayout);
    };
  })

  return (
    <View style={{alignItems:'center',backgroundColor:Colors.backGray}}>
      <SliderBox
        images={props.images}
        sliderBoxHeight={props.height}
        ImageComponentStyle={{borderRadius: 0, resizeMode: 'contain',backgroundColor:Colors.backGray}}
        circleLoop
        resizeMode='contain'
        parentWidth={width*0.7}
        dotColor={Colors.darkgray}
        inactiveDotColor={Colors.lightgray}
        dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 12,
            marginHorizontal: 0
          }}
          disableOnPress={true}
          imageLoadingColor={Colors.primary}
      />
      </View>
  );
};

export default Carousel;
