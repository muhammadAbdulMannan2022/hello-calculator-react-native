import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = button => {
    if (button === '=') {
      if (input !== '') {
        setResult(eval(input).toString());
      } else {
        result !== '' ? setInput(result) : '';
      }
    } else if (button === 'C') {
      setInput('');
      setResult('');
    } else if (button === 'del') {
      if (input !== '') {
        let arr = input.split('');
        arr.pop();
        setInput(arr.join(''));
      }
    } else {
      setInput(input + button);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.outContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.input}>{input}</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>{result}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {[
            'C',
            '00',
            'del',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0',
            '+',
            '-',
            '*',
            '/',
            '=',
          ].map(button => (
            <TouchableOpacity
              key={button}
              style={styles.button}
              onPress={() => handleButtonPress(button)}>
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: '5',
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-between',
  },
  outContainer: {
    height: height * 0.4,
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'space-between',
  },
  inputContainer: {
    padding: 10,
    alignItems: 'flex-end',
    // backgroundColor: 'rgba(0,0,0,0.6)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  input: {
    fontSize: 24,
    color: '#fff',
  },
  resultContainer: {
    padding: 10,
    alignItems: 'flex-end',
    // backgroundColor: 'rgba(0,0,0,0.6)',
  },
  result: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    height: height * 0.6,
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Calculator;
