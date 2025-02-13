import { ImageBackground, StyleSheet, Text, Image, View, TextInput, TouchableOpacity,Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'


const Temperature = () => {

  const [selectedUnit, setSelectedUnit] = useState('');
  const [convertUnit, setConvertUnit] = useState('');
  const [temperature, setTemperature] = useState('');
  const [convertedTemperature, setConvertedTemperature] = useState(null)
  const convertTemperature = () => {
    if (!selectedUnit || !convertUnit) {
      Alert.alert('Please select both units');
      return;
    }

    let tempValue = parseFloat(temperature);
    if (isNaN(tempValue)) {
      Alert.alert('Please enter a valid number for the temperature');
      return;
    }

    let convertedTemp = tempValue;

    if (selectedUnit === '°C' && convertUnit === '°F') {
      convertedTemp = (tempValue * 9/5) + 32; 
    } else if (selectedUnit === '°C' && convertUnit === 'K') {
      convertedTemp = tempValue + 273.15; 
    } else if (selectedUnit === '°F' && convertUnit === '°C') {
      convertedTemp = (tempValue - 32) * 5/9; 
    } else if (selectedUnit === '°F' && convertUnit === 'K') {
      convertedTemp = ((tempValue - 32) * 5/9) + 273.15; 
    } else if (selectedUnit === 'K' && convertUnit === '°C') {
      convertedTemp = tempValue - 273.15; 
    } else if (selectedUnit === 'K' && convertUnit === '°F') {
      convertedTemp = ((tempValue - 273.15) * 9/5) + 32; 
    }
    setConvertedTemperature(parseFloat(convertedTemp.toFixed(3)));
  };
  const resetFields = () => {
    setTemperature('');
    setSelectedUnit('');
    setConvertUnit('');
    setConvertedTemperature(null);
  };
   

  return (
    <ImageBackground source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={3.5}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/temperature.png')} style={styles.logo} />
      </View>
      <View style={styles.length}><Text style={styles.logotext}>Temperature</Text></View>
      <View style={styles.fromContainer}><Text style={styles.from}>From</Text></View>
      <View style={styles.container}>
        <Picker
          selectedValue={selectedUnit}
          onValueChange={(itemValue, itemIndex) => setSelectedUnit(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Fahrenheit" value="°F" style={styles.pickerstyle} />
          <Picker.Item label="Celcius" value="°C" style={styles.pickerstyle} />
          <Picker.Item label="Kelvin" value="K" style={styles.pickerstyle} />
        </Picker>
      </View>
      <View style={styles.to}>
        <Text style={styles.totext}>To</Text>
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={convertUnit}
          onValueChange={(itemValue, itemIndex) => setConvertUnit(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Fahrenheit" value="°F" style={styles.pickerstyle} />
          <Picker.Item label="Celcius" value="°C" style={styles.pickerstyle} />
          <Picker.Item label="Kelvin" value="K" style={styles.pickerstyle} />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={temperature}
          onChangeText={(text) => setTemperature(text)}
          placeholder='Enter value'
        />
      </View>
      <View style={styles.resetcontainer}>
        <TouchableOpacity style={styles.touchreset} onPress={resetFields}>
          <Text style={styles.resettext}>reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resetcontainer}>
        <TouchableOpacity style={styles.touchreset} onPress={convertTemperature}>
          <Text style={styles.converttext}>convert</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultcontainer}>
      <TextInput
          style={styles.resultstyle}
          placeholder='Result : 0'
          value={convertedTemperature !== null ? String(convertedTemperature)+(convertUnit) : ''}
          editable={false}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 130,
    marginBottom: 5,
  },
  length: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logotext: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  fromContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  from: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '600',
    color: '#5c5b5b',
    marginBottom: 25,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff146e',
    borderRadius: 10,
    overflow: 'hidden',
    width: 300,
    marginLeft: 60,
    backgroundColor: '#fae3ec',
    marginBottom: 30,
  },
  picker: {
    width: 210,
    height: 60,
  },
  pickerstyle: {
    fontSize: 20,
    color: '#333',
  },
  to: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  totext: {
    fontSize: 20,
    color: '#5c5b5b',
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fcedf5',
    borderRadius: 30,
    width: 380,
    height: 52,
    marginLeft: 20,
    marginTop: 15,
    borderWidth: 0.8,
    borderColor: '#fc0f82',
  },
  input: {
    height: 50,
    width: 250,
  },
  resetcontainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 36,
  },
  touchreset: {
    borderRadius: 15,
    width: 200,
    height: 44,
    backgroundColor: '#f7487c',
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 1,
  },
  resettext: {
    marginLeft: 62,
    fontSize: 25,
    marginTop: 3,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '700',
  },
  converttext: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
    marginLeft: 44,
    marginTop: 3,
  },
  resultcontainer:{
    justifyContent:'center',
    flexDirection:'row',
    color:'white',
    borderRadius:25,
    marginTop:35,
    backgroundColor:'#fff',
    width:340,
    height:55,
    marginLeft:40,

  },
  resultstyle:{
    fontSize:20,
    fontWeight:'400',
    color:'black',


  },







});
export default Temperature;