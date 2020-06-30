import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import StarRating from 'react-native-star-rating';
import {IconButton, ProgressBar} from 'react-native-paper';
import ReviewItem from '../../components/ReviewItem';
const {height, width} = Dimensions.get('window');

const ReviewsComponent = props => {
 

  return (
    <View style={Styles.container}>

      <View style={Styles.mainReview}>
        <View style={Styles.review}>
          <Text style={Styles.reviewTitle}>
            4.5<Text style={Styles.reviewText}>(650)</Text>
          </Text>
          <View style={Styles.reviewStars}>
            <StarRating
              disabled={true}
              emptyStar={'star'}
              fullStar={'star'}
              halfStar={'star'}
              maxStars={5}
              rating={3}
              fullStarColor={Colors.primary}
              emptyStarColor={Colors.lightgray}
              starSize={15}
              starStyle={{paddingHorizontal: 1}}
            />
          </View>
        </View>
        <View style={Styles.progressContainer}>
            <View style={Styles.progress}>
                <Text style={Styles.progressTitle}>Small</Text>
                <View style={Styles.progressBar}>
                <ProgressBar style={Styles.bar} progress={0.8} color={Colors.primary} />
                </View>
            </View>
            <View style={Styles.progress}>
                <Text style={Styles.progressTitle}>True to size</Text>
                <View style={Styles.progressBar}>
                <ProgressBar style={Styles.bar} progress={0.8} color={Colors.primary} />
                </View>
            </View>
            <View style={Styles.progress}>
                <Text style={Styles.progressTitle}>Large</Text>
                <View style={Styles.progressBar}>
                <ProgressBar style={Styles.bar} progress={0.8} color={Colors.primary} />
                </View>
            </View>
        </View>
      </View>

      {/* Reviews */}
      <ReviewItem />
    </View>
  );
};

export default ReviewsComponent;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  mainReview: {
      flexDirection: 'row',
      width: '100%',
      padding: 20,
  },
  review: {
      flex: 0.4
  },
  reviewTitle: {
      fontSize: 35
  },
  reviewText: {
      color: Colors.textGray,
      fontSize: 15
  },
  reviewStars: {
      width: '50%',
      marginTop: 10
  },
  progress: {
      flexDirection: 'row',
      width: '100%',
      paddingTop: 10,
  },
  bar: {
    width: '100%',
    height: 10,
  },
  progressTitle: {
      flex: 0.5,
  },
  progressBar: {
    flex: 0.5,
    justifyContent: 'center'
  },
  progressContainer: {
      flex: 0.7,
  }
  
});
