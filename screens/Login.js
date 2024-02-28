import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks

const LoginScreen = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode); 
    const navigation = useNavigation();

    const handleNavigateToLogin = () => {
      navigation.navigate('Home');
    };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Construct the data object to be sent to the API
    const formData = {
      email: email,
      password: password
    };

    // Make a POST request to the API
    axios.post('http://localhost:5000/api/submitForm', formData)
      .then(response => {
        console.log('Login successful:', response.data);
        navigation.navigate('Home');
        // Handle successful login (e.g., navigation to another screen)
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login failure (e.g., display error message)
      });
  };

  return (
    <View style={ isDarkMode ? styles.container: styles.container2}>
      <Text style={styles.label}>Email 1</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter your email"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter your password"
      />

<View style={{marginBottom:10}}><Button title="Go to Login" onPress={handleNavigateToLogin} style={{marginBottom:'10%'}} /></View>

      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'black',
    color:'white'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white',
    color:'black'
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  }
});

export default LoginScreen;
