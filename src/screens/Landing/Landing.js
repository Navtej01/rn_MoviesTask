import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import navigationStrings from '../../Navigation/NavigationStrings';

const LandingScreen = ({navigation}) => {
  const onPressHandler = () => {
    console.log('Hello world');
    navigation.replace(navigationStrings.Login, {
      screen: navigationStrings.Login,
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/splash.png')}
      />
      <Text style={styles.text}> Welcome </Text>
      <CustomButton
        onPressFunction={onPressHandler}
        title="Lets Start"
        // color={'#84DFFF'}
      />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
