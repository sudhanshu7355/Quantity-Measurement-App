import { ImageBackground,StyleSheet,Text,Image,View,TextInput,TouchableOpacity,Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

const Length = () => {
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [length, setLength] = useState('');
  const [convertedLength, setConvertedLength] = useState(null);

  const convertLength = () => {
    if (!fromUnit || !toUnit) {
      Alert.alert('Please select both units');
      return;
    }

    let lengthValue = parseFloat(length);
    if (isNaN(lengthValue)) {
      Alert.alert('Please enter a valid number for the length');
      return;
    }

    let result = lengthValue;

    if (fromUnit === 'Centimeters' && toUnit === 'Meters') {
      result = lengthValue / 100;
    } else if (fromUnit === 'Centimeters' && toUnit === 'Kilometers') {
      result = lengthValue / 100000;
    } else if (fromUnit === 'Meters' && toUnit === 'Centimeters') {
      result = lengthValue * 100;
    } else if (fromUnit === 'Meters' && toUnit === 'Kilometers') {
      result = lengthValue / 1000;
    } else if (fromUnit === 'Kilometers' && toUnit === 'Centimeters') {
      result = lengthValue * 100000;
    } else if (fromUnit === 'Kilometers' && toUnit === 'Meters') {
      result = lengthValue * 1000;
    } else if (fromUnit === toUnit) {
      result = lengthValue;
    }

    setConvertedLength(parseFloat(result.toFixed(3)));
  };

  const resetFields = () => {
    setLength('');
    setFromUnit('');
    setToUnit('');
    setConvertedLength(null);
  };

  return (
    <ImageBackground 
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={3.5}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/length.png')} style={styles.logo} />
      </View>
      <View style={styles.length}>
        <Text style={styles.logotext}>Length</Text>
      </View>
      <View style={styles.fromContainer}>
        <Text style={styles.from}>From</Text>
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={fromUnit}
          onValueChange={(itemValue, itemIndex) => setFromUnit(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Centimeters" value="Centimeters" style={styles.pickerstyle} />
          <Picker.Item label="Meters" value="Meters" style={styles.pickerstyle} />
          <Picker.Item label="Kilometers" value="Kilometers" style={styles.pickerstyle} />
        </Picker>
      </View>
      <View style={styles.to}>
        <Text style={styles.totext}>To</Text>
      </View>
      <View style={styles.container}>
        <Picker
          selectedValue={toUnit}
          onValueChange={(itemValue, itemIndex) => setToUnit(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Centimeters" value="Centimeters" style={styles.pickerstyle} />
          <Picker.Item label="Meters" value="Meters" style={styles.pickerstyle} />
          <Picker.Item label="Kilometers" value="Kilometers" style={styles.pickerstyle} />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={length}
          onChangeText={(text) => setLength(text)}
          placeholder="Enter value"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.resetcontainer}>
        <TouchableOpacity style={styles.touchreset} onPress={resetFields}>
          <Text style={styles.resettext}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resetcontainer}>
        <TouchableOpacity style={styles.touchreset} onPress={convertLength}>
          <Text style={styles.converttext}>Convert</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultcontainer}>
        <TextInput
          style={styles.resultstyle}
          placeholder="Result : 0"
          value={convertedLength !== null ? String(convertedLength) + " " + toUnit : ''}
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
    width: 150,
    height: 120,
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
    borderColor: '#04d4aa',
    borderRadius: 10,
    overflow: 'hidden',
    width: 300,
    marginLeft: 60,
    backgroundColor: '#ebfcfa',
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
    backgroundColor: '#ebfcfa',
    borderRadius: 30,
    width: 380,
    height: 52,
    marginLeft: 20,
    marginTop: 15,
    borderWidth: 0.8,
    borderColor: '#32fc91',
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
    backgroundColor: '#4ecdc4',
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
  resultcontainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'white',
    borderRadius: 25,
    marginTop: 35,
    backgroundColor: '#fff',
    width: 340,
    height: 55,
    marginLeft: 40,
  },
  resultstyle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
});

export default Length;
