import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#FFFCDC'}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#84DFFF' : props.color},
        styles.button,
        {...props.style},
        ,
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#84DFFF',
  },
});

export default CustomButton;
