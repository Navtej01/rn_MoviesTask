import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import navigationStrings from '../../Navigation/NavigationStrings';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressHandler = () => {
    console.log('Hello world');
    navigation.replace(navigationStrings.MovieList, {
      // screen: navigationStrings.MovieList,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        onChangeText={value => setPassword(value)}
      />

      <CustomButton
        onPressFunction={onPressHandler}
        // title={submitted ? 'Clear' : 'Submit'}
        title="Next"
        color={'#AABBCC'}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 50,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    paddingLeft: 8,
    // textAlign: 'center',
    fontSize: 24,
    marginBottom: 15,
  },
});
