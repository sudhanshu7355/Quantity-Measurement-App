import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <ImageBackground source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={3.5}
    >
      <Text style={styles.login}>REGISTER</Text>
      <View style={styles.whitecontainer}>
        <Text style={styles.toyour}>Create a new account</Text>
        <TextInput
          style={styles.email}
          placeholder='First Name'
        />
        <TextInput
          style={styles.email}
          placeholder='Last Name'
        />
        <TextInput
          style={styles.email}
          placeholder='Contact Number'
        />
        <TextInput
          style={styles.email}
          placeholder='enter your email'
        />
        <TextInput
          style={styles.email}
          placeholder='enter your password'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.email}
          placeholder='confirm password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginbutton}>
          <Text style={styles.loginbuttontext}>Signup</Text>
        </TouchableOpacity>
        <Text style={styles.signup}>Already Have an account?</Text>
        <TouchableOpacity>
        <Text style={styles.signuptext}>Login</Text>
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
    height: 720,
    backgroundColor: '#fff',
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
    borderWidth: 1,
    borderColor: '#17f5fc',
    alignItems: 'center',

  },
  login: {
    fontSize: 32,
    fontWeight: '500',
    marginBottom: 7,


  },

  toyour: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7d7d7d',
    marginTop: 25,

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
    marginTop: 30,
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
    marginTop: 10,
  },
  signuptext: {
    color:'blue',

  },

});
export default Login;