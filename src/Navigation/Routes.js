import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LandingScreen,
  LoginScreen,
  MovieListScreen,
  MovieDetailScreen,
} from '../screens';
import navigationStrings from './NavigationStrings';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initionalRouteName={navigationStrings.MovieList}>
        <Stack.Screen
          name={navigationStrings.Landing}
          component={LandingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.Login}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.MovieList}
          component={MovieListScreen}
          options={{
            headerStyle: {
              headerTintColor: '#FFFCDC',
              backgroundColor: '#84DFFF',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
              color: '#FFF',
            },
          }}
        />
        <Stack.Screen
          name={navigationStrings.MovieDetail}
          component={MovieDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
