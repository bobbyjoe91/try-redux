import React, { useState } from 'react';
import {
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { primalityCheck } from '../redux/actions';

const LoremIpsumPage = () => {
  const [input, setInput] = useState('');
  const {isDarkMode, isPrime} = useSelector(state => ({
    isDarkMode: state.isDarkMode,
    isPrime: state.isPrime,
  }));

  const dispatcher = useDispatch();

  const style = StyleSheet.create({
    display: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? 'black' : 'white',
    },
    button: {
      color: 'black',
      backgroundColor: 'white',
    },
    text: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 20,
      fontWeight: '700',
    },
    input: {
      height: 50,
      width: '50%',
      borderWidth: isDarkMode ? 3 : 1,
      borderColor: isDarkMode ? 'white' : '#ababab',
      textAlign: 'center',
      fontSize: 25,
      borderRadius: 10,
      color: isDarkMode ? 'white' : 'black',
    },
    inputView: {
      flexDirection: 'row',
      paddingTop: 20,
      width: '100%',
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView style={style.display}>
      <Text style={style.text}>Primality Check</Text>
      <View style={style.inputView}>
        <TextInput
          placeholder='Insert integer'
          style={style.input}
          value={input}
          onChangeText={text => setInput(text)}
          onEndEditing={e => dispatcher(primalityCheck(e.nativeEvent.text))}
        />
      </View>
      <Button
        title='Check!'
        color={isDarkMode ? 'cyan' : 'blue'}
        onPress={Keyboard.dismiss}
      />
      <Text style={style.text}>{isPrime}</Text>
    </SafeAreaView>
  );
};

export default LoremIpsumPage;
