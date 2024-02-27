// // import { StatusBar } from 'expo-status-bar';
// // import { TextInput,StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
// // import React, { useState } from 'react';
// // import { useSelector, useDispatch } from 'react-redux'; // Importing hooks
// // import { toggleTheme } from '../action/ExampleActions'; // Importing the toggleTheme action

// // const HomeScreen = () => {
// //   const isDarkMode = useSelector(state => state.theme.isDarkMode); // Accessing isDarkMode state from theme reducer
// //   const dispatch = useDispatch(); // Getting dispatch function

// //   const handleToggleTheme = () => {
// //     dispatch(toggleTheme()); // Dispatching toggleTheme action
// //   };
// //   const [inputValue, setInputValue] = useState('input text');

// //   const onPress = (text)=>{
// //     setInputValue(text);
// //   }

// //   const onPress2 = ()=>{
// //     alert ("this works")
// //   }
// //   return (

       
// //     <View style={styles.container} >
// //      {/* <View style={{ color: isDarkMode ? '#fff' : '#333' }} > */}
     
// //       <Text style={styles2.container2}>Open up App.js fgfdgfdg to start working on your hehehehe app!</Text>
// //      <Text>this is new text {inputValue}</Text>
// //       <StatusBar style="auto" />
// //       <TouchableOpacity onPress={onPress2} style={style2.button}>
// //       <Text style={style2.buttonText}>click me</Text>
// //     </TouchableOpacity>
// //     <TextInput
  
// //   // value={inputValue} // Bind the state variable to the value prop
// //   onChangeText={onPress} // Call the function on text change
// //   placeholder="Enter your text here"
// //   style={input1.input}
// // />

// // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#333' : '#fff' }}>
// //       <Text style={{ color: isDarkMode ? '#fff' : '#333' }}>Home Screen</Text>
// //       <TouchableOpacity onPress={handleToggleTheme} style={{ marginTop: 20, backgroundColor: isDarkMode ? '#555' : '#ddd', padding: 10 }}>
// //         <Text style={{ color: isDarkMode ? '#fff' : '#333' }}>Toggle Theme</Text>
// //       </TouchableOpacity>
// //     </View>
 
// //     </View>

// // );
// // };

// // export default HomeScreen;


// // const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       backgroundColor: '#fff',
// //       alignItems: 'center',
// //       // justifyContent: 'center',
// //     },
// //   });
  
  
// //   const input1 = StyleSheet.create({
// //     container: {
// //       // Styles for the container (optional)
// //     },
// //     input: {
// //       backgroundColor: '#f8f8f8',
// //       padding: 10,
// //       borderRadius: 5,
// //       fontSize: 16,
// //     },
// //   });
  
// //   const style2 = StyleSheet.create({
// //     button: {
// //       backgroundColor: 'blue',
// //       padding: 15,
// //       borderRadius: 5,
// //       alignItems: 'center',
// //       borderWidth: 2, // Add border width here
// //       borderColor: 'red', // Add border color here
// //       justifyContent: 'center',
// //     },
// //     buttonText: {
// //       color: 'white',
// //       fontSize: 18,
// //       fontWeight: 'bold',
// //     },
// //   });
  
  
  
// //   const styles2 = StyleSheet.create({
// //     container2: {
// //       backgroundColor: 'red',
// //       // paddingTop: 20,
// //       // paddingLeft: 19,
// //       padding: 10,
// //       width: '100%',
// //       // padding: 10,
// //       alignItems: 'center',
// //       fontSize: 20,
// //       fontWeight: '600',
// //       justifyContent: 'center',
// //     },
// //   });
// import { StatusBar } from 'expo-status-bar';
// import { TextInput, StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'; // Importing hooks
// import { toggleTheme } from '../action/ExampleActions'; // Importing the toggleTheme action

// const HomeScreen = () => {
//   const isDarkMode = useSelector(state => state.theme.isDarkMode); // Accessing isDarkMode state from theme reducer
//   const dispatch = useDispatch(); // Getting dispatch function

//   const handleToggleTheme = () => {
//     dispatch(toggleTheme()); // Dispatching toggleTheme action
//   };

//   const [inputValue, setInputValue] = useState('write a story to check your typing speed');

//   const onPress = (text) => {
//     setInputValue(text);
//   }

//   const onPress2 = () => {
//     alert("this works")
//   }

//   // Define styles for light mode
//   const lightStyles = StyleSheet.create({
//     container: {
//       backgroundColor: '#fff',
//     },
//     text: {
//       color: '#333',
//     },
//     button: {
//       backgroundColor: 'blue',
//     },
//   });

//   // Define styles for dark mode
//   const darkStyles = StyleSheet.create({
//     container: {
//       backgroundColor: '#333',
//     },
//     text: {
//       color: '#fff',
//     },
//     button: {
//       backgroundColor: 'blue',
//     },
//   });

//   // Choose styles based on the theme
//   const styles = isDarkMode ? darkStyles : lightStyles;

//   return (
//     <View style={[styles.container, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
//       <Text style={[styles.text, { padding: 10 }]}>Open up App.js to start working on your hehehehe app!</Text>
//       <Text style={[styles.text,{width:'90%'}]}>This is new text {'\n'}
//       {inputValue}</Text>
//       <StatusBar style="auto" />
//       <TouchableOpacity onPress={onPress2} style={[styles.button, { padding: 15, borderRadius: 5, marginTop: 20 }]}>
//         <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Click me</Text>
//       </TouchableOpacity>
//       <TextInput
//       value={inputValue}
//         onChangeText={onPress}
//         placeholder="Enter your text here"
//         style={{ backgroundColor: '#f8f8f8', padding: 10, borderRadius: 5, fontSize: 16, marginTop: 20,width:'90%' }}
//       />
//       <View style={{ marginTop: 20 }}>
//         <TouchableOpacity onPress={handleToggleTheme} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
//           <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{isDarkMode ? <>change white mode</>:<>change Darkmode</>}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;

import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text,Image, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react'; // Import useRef hook
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks
import { toggleTheme } from '../action/ExampleActions'; // Importing the toggleTheme action

const HomeScreen = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode); // Accessing isDarkMode state from theme reducer
  const dispatch = useDispatch(); // Getting dispatch function

  const handleToggleTheme = () => {
    dispatch(toggleTheme()); // Dispatching toggleTheme action
  };

  const [inputValue, setInputValue] = useState(''); // Empty default value
  const [typingSpeed, setTypingSpeed] = useState(0); // State to hold typing speed
  const [typingIndicator, setTypingIndicator] = useState('stop'); // State to hold typing indicator
  const typingStartTime = useRef(null); // Ref to hold typing start time

  const onPress = (text) => {
    setInputValue(text);
    // Update typing speed
    const timeElapsed = (Date.now() - typingStartTime.current) / 1000; // Time elapsed in seconds
    const speed = text.length / timeElapsed; // Characters per second
    setTypingSpeed(speed);
  }

  const onPress2 = () => {
    alert(`Your typing speed is: ${typingSpeed.toFixed(2)} characters per second`);
  }

  const handleTextInputFocus = () => {
    // Update typing start time when input field is focused
    typingStartTime.current = Date.now();
    setTypingIndicator('Start');
  };

  const handleTextInputBlur = () => {
    setTypingIndicator('Stop');
  };

  const handleStopTyping = () => {
    setTypingIndicator('Stop');
  };

  const handleStartTyping = () => {
    setTypingIndicator('Start');
  };

  const clearinput = ()=>{
    setInputValue("");
  }

  // Define styles for light mode
  const lightStyles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    text: {
      color: '#333',
    },
    button: {
      backgroundColor: 'blue',
    },
  });

  // Define styles for dark mode
  const darkStyles = StyleSheet.create({
    container: {
      backgroundColor: '#333',
    },
    text: {
      color: '#fff',
    },
    button: {
      backgroundColor: 'blue',
    },
  });

  const image = require('../assets/adaptive-icon.png');
  // Choose styles based on the theme
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, { flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
      {/* <ScrollView> */}
       <Image source={image} style={{width:'50%', height:'20%'}} />
      <Text style={[styles.text, { padding: 10 }]}>Open up App.js to start working on your hehehehe app!</Text>
      <Text style={[styles.text, { width: '90%' }]}>This is new text {'\n'} {inputValue || 'Start typing here...'}</Text>
      <Text style={[styles.text, { width: '90%' }]}>Typing: {typingIndicator}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={onPress2} style={[styles.button, { padding: 15, borderRadius: 5, marginTop: 20 }]}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Click me</Text>
      </TouchableOpacity>
      <TextInput
        value={inputValue} // Set the value to the state value
        onChangeText={onPress} // Update the state when text changes
        onFocus={handleTextInputFocus} // Handle input field focus
        onBlur={handleTextInputBlur} // Handle input field blur
        placeholder="Enter your text here"
        style={{ backgroundColor: '#f8f8f8', padding: 10, borderRadius: 5, fontSize: 16, marginTop: 20, width: '90%' }}
      />
      <TouchableOpacity onPress={handleStopTyping} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Stop Typing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearinput} style={{ backgroundColor: 'yellow', padding: 10, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>clear input</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStartTyping} style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Start Typing</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={handleToggleTheme} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{isDarkMode ? 'Change to White Mode' : 'Change to Dark Mode'}</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default HomeScreen;
