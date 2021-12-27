import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

const LoremIpsumPage = () => {
  const {isDarkMode} = useSelector(state => ({
    isDarkMode: state.isDarkMode,
  }));

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
  });

  return (
    <SafeAreaView style={style.display}>
      <Text style={style.text}>Lorem ipsum</Text>
    </SafeAreaView>
  );
};

export default LoremIpsumPage;
