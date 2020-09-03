import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import FlightList from './src/screens/FlightList';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    FlightList: FlightList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Stack Navigator Demo"
    }
  }
);

export default createAppContainer(navigator);
