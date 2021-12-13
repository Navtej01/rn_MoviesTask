import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const StarRating = ({rating}) => {
  let stars = [];
  // Loop 5 times
  for (var i = 1; i <= 5; i++) {
    // Set the path to filled stars
    let path = require('../../assets/images/fullStar.png');
    // If ratings is lower, set the path to unfilled stars
    if (i > rating) {
      path = require('../../assets/images/star.png');
    }
    // Push the Image tag in the stars array
    stars.push(<Image style={styles.image} source={path} />);
  }

  return <View style={styles.container}>{stars}</View>;
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 18,
    height: 18,
  },
});
