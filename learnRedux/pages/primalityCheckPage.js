import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

const LoremIpsumPage = () => {
  const [input, setInput] = useState('');
  const {isDarkMode} = useSelector(state => ({
    isDarkMode: state.isDarkMode,
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
    text: {
      color: isDarkMode ? 'white' : 'black',
      fontSize: 20,
      fontWeight: '700',
    },
    input: {
      height: 50,
      width: '50%',
      borderWidth: 1,
      borderColor: '#ababab',
      textAlign: 'center',
      fontSize: 25,
      borderRadius: 10,
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
          style={style.input}
          value={input}
          onChangeText={text => setInput(text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoremIpsumPage;
