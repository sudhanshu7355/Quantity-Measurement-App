import {ImageBackground, StyleSheet,Text,Image,View,TextInput,TouchableOpacity,Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

const Weight = () => {
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [weight, setWeight] = useState('');
  const [convertedWeight, setConvertedWeight] = useState(null);

  const convertWeight = () => {
    if (!fromUnit || !toUnit) {
      Alert.alert('Please select both units');
      return;
    }

    let weightValue = parseFloat(weight);
    if (isNaN(weightValue)) {
      Alert.alert('Please enter a valid number for the weight');
      return;
    }

    let result = weightValue;
    
    if (fromUnit === 'Kilograms' && toUnit === 'Grams') {
      result = weightValue * 1000;
    } else if (fromUnit === 'Kilograms' && toUnit === 'Miligrams') {
      result = weightValue * 1000000;
    } else if (fromUnit === 'Grams' && toUnit === 'Kilograms') {
      result = weightValue / 1000;
    } else if (fromUnit === 'Grams' && toUnit === 'Miligrams') {
      result = weightValue * 1000;
    } else if (fromUnit === 'Miligrams' && toUnit === 'Kilograms') {
      result = weightValue / 1000000;
    } else if (fromUnit === 'Miligrams' && toUnit === 'Grams') {
      result = weightValue / 1000;
    } else if (fromUnit === toUnit) {
      result = weightValue;
    }

    setConvertedWeight(parseFloat(result.toFixed(3)));
  };

  const resetFields = () => {
    setWeight('');
    setFromUnit('');
    setToUnit('');
    setConvertedWeight(null);
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={3.5}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/bicep.png')} style={styles.logo} />
      </View>
      <View style={styles.length}>
        <Text style={styles.logotext}>Weight</Text>
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
          <Picker.Item label="Kilograms" value="Kilograms" style={styles.pickerstyle} />
          <Picker.Item label="Grams" value="Grams" style={styles.pickerstyle} />
          <Picker.Item label="Miligrams" value="Miligrams" style={styles.pickerstyle} />
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
          <Picker.Item label="Kilograms" value="Kilograms" style={styles.pickerstyle} />
          <Picker.Item label="Grams" value="Grams" style={styles.pickerstyle} />
          <Picker.Item label="Miligrams" value="Miligrams" style={styles.pickerstyle} />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
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
        <TouchableOpacity style={styles.touchreset} onPress={convertWeight}>
          <Text style={styles.converttext}>Convert</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultcontainer}>
        <TextInput
          style={styles.resultstyle}
          placeholder="Result : 0"
          value={convertedWeight !== null ? String(convertedWeight) + (toUnit) : ''}
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
    borderColor: '#ffad3b',
    borderRadius: 10,
    overflow: 'hidden',
    width: 300,
    marginLeft: 60,
    backgroundColor: '#fceacf',
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
    backgroundColor: '#fff8ed',
    borderRadius: 30,
    width: 380,
    height: 52,
    marginLeft: 20,
    marginTop: 15,
    borderWidth: 0.8,
    borderColor: '#ff9603',
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
    backgroundColor: '#ffa526',
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

export default Weight;
