import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import StarRating from 'react-native-star-rating';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Data from '../../../data';
import {getMovies} from '../../utils/api';
import useFetch from '../../utils/CustomFetchHook';
import StarRating from '../../Components/StarRating/StarRating';

// api = 'https://yts.mx/api/v2/list_movies.json'

const ListItem = ({item}) => (
  <View style={styles.item}>
    <TouchableOpacity style={styles.touchable}>
      <Image style={styles.image} source={{uri: item.medium_cover_image}} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <StarRating rating={Math.floor(Number(item.rating) / 2)} />
        <View style={styles.genresView}>
          {item.genres &&
            item.genres.map((item, index) => (
              <Text key={item + index.toString}>{item} | </Text>
            ))}
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const MovieListScreen = () => {
  const renderItem = ({item}) => <ListItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={Data.data.movies}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index.toString}
      />
    </View>
  );
};

export default MovieListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#FFF',
  },
  item: {
    backgroundColor: '#FFFCDC',
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    marginLeft: 0,

    // justifyContent: 'start',
    // alignItems: 'start',
  },
  details: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    resizeMode: 'stretch',
    overflow: 'hidden',
  },
  genresView: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
