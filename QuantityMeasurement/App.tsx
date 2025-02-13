import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from './Screens/Screen';
import Length from './Screens/Length';
import Temperature from './Screens/Temperature';
import Weight from './Screens/Weight';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Signup from './Screens/Signup';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Quantity Mesurement' component={Welcome}/>
        <Stack.Screen name = 'Home' component={Screen}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name = 'Length' component={Length}/>
        <Stack.Screen name = 'Temperature' component={Temperature}/>
        <Stack.Screen name = 'Weight' component={Weight}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};


const styles = StyleSheet.create({

});
export default App;