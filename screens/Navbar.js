// import React from 'react'
// import { NavigationContainer ,useNavigation} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './Login';
// import HomeScreen from './Homescreen';
// import { View,Button } from 'react-native';

// const Stack = createStackNavigator();

// function Navbar() {
//   const navigation = useNavigation();

//   const handleNavigateToLogin = () => {
//     navigation.navigate('Home');
//   };
//   const handleNavigateToLogin2 = () => {
//     navigation.navigate('Login');
//   };
//   return (
//   <View>
//     <View style={{marginBottom:10}}><Button title="Go to home" onPress={handleNavigateToLogin} style={{marginBottom:'10%'}} /></View>

//     <View style={{marginBottom:10}}><Button title="Go to Login" onPress={handleNavigateToLogin2} style={{marginBottom:'10%'}} /></View>
//   </View>
//   )
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import HomeScreen from './Homescreen';
import { View, Button, StyleSheet } from 'react-native'; // Import StyleSheet for styles
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks

const Stack = createStackNavigator();

function Navbar() {
  const navigation = useNavigation();
  const [activeRoute, setActiveRoute] = useState('Login'); // Initial
  const isDarkMode = useSelector(state => state.theme.isDarkMode); 

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
    setActiveRoute(screenName)
  };

  return (
    <View style={isDarkMode ?  styles.navbarContainer: styles.navbarContainer2}>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => handleNavigate('Home')}
          style={
            activeRoute === 'Home' ? styles.activeButton : styles.inactiveButton
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          onPress={() => handleNavigate('Login')}
          // style={
          //   activeRoute === 'Login' ? styles.activeButton : styles.inactiveButton
          // }
          style={{backgroundColor:'red'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f9fa',
    backgroundColor:'black' // Optional background color for the navbar
  },
  navbarContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f9fa',
     // Optional background color for the navbar
  },
  buttonContainer: {
    marginBottom: 10,
  },
  activeButton: {
    backgroundColor: '#007bff', // Active button background color
    padding: 10,
    borderRadius: 5,
  },
  inactiveButton: {
    backgroundColor: '#f8f9fa', // Inactive button background color
    padding: 10,
    borderRadius: 5,
  },
});

export default Navbar;
