
// import { Provider } from 'react-redux';
// import store from './store/Configurestore';
// import HomeScreen from './screens/Homescreen';
// import Navbar from './screens/Navbar';
// import LoginScreen from './screens/Login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {

//   return (
//     <NavigationContainer>
//     <Provider store={store}>
//       {/* <Navbar/>
//       <HomeScreen /> */}
     
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
   
//     </Provider>
//     </NavigationContainer>
//   );
// }

import { Provider } from 'react-redux';
import store from './store/Configurestore';
import HomeScreen from './screens/Homescreen';
import LoginScreen from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './screens/Navbar';
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks

const Stack = createStackNavigator();

export default function App() {
  // const isDarkMode = useSelector(state => state.theme.isDarkMode); 
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // Hide the default navigation bar
        }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          
        </Stack.Navigator>
        <Navbar/>
      </NavigationContainer>
    </Provider>
  );
}
