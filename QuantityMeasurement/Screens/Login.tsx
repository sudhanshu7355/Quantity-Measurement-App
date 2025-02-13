import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation}) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleLogin = ()=>{
    if(email === 'abc@gmail.com' && password === '123'){
      navigation.navigate('Home')
    }
    else{
      Alert.alert('Invalid Details');
    }
  }

  return (
    <ImageBackground source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={3.5}
    >
      <Text style={styles.login}>Login</Text>
      <View style={styles.whitecontainer}>
        <Text style={styles.welcomeback}>Welcome Back !</Text>
        <Text style={styles.toyour}>Login to your Account</Text>
        <TextInput
          style={styles.email}
          placeholder='enter your email'
          value={email}
          onChangeText={(data)=>setemail(data)}
        />
        <TextInput
          style={styles.email}
          placeholder='enter your password'
          secureTextEntry={true}
          value={password}
          onChangeText={(data)=>setpassword(data)}
        />
        <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
          <Text style={styles.loginbuttontext}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.signup}>Don't have an account?</Text>
        <TouchableOpacity>
        <Text style={styles.signuptext}>Signup</Text>
          </TouchableOpacity>
      </View>

    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',

  },
  whitecontainer: {
    width: 370,
    height: 500,
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderWidth: 1,
    borderColor: '#17f5fc',
    alignItems: 'center',

  },
  login: {
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 13,


  },
  welcomeback: {
    fontSize: 30,
    marginTop: 14,
  },
  toyour: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7d7d7d',
    marginTop: 5,

  },
  email: {
    backgroundColor: '#fcffff',
    width: 320,
    height: 50,
    marginTop: 35,
    borderRadius: 25,
    paddingHorizontal: 25,
    fontSize: 17,
    borderWidth: 0.8,
    borderColor: '#1bf7ec',
    elevation: 20,


  },
  loginbutton: {
    marginTop: 60,
    width: 140,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ecdc4',



  },
  loginbuttontext: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',


  },
  signup: {
    marginTop: 15,
  },
  signuptext: {
    color:'blue',

  },

});
export default Login;