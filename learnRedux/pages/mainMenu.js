import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { enableDarkMode, sagaDarkMode } from '../redux/actions';

const style = StyleSheet.create({
  display: {
    flex: 0.93,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  caption: {
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
});

const MainMenu = ({ navigation }) => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();

  return (
    <>
      <SafeAreaView style={style.display}>
        <View>
          <View style={style.switch}>
            <Text style={style.caption}>Dark Mode</Text>
            <Switch
              thumbColor={{false: 'white', true: 'white'}}
              trackColor={isDarkMode ? '#F5DD4B' : '#F4F3F4'}
              onValueChange={() => dispatch(enableDarkMode())}
              value={isDarkMode}
            />
          </View>
        </View>
      </SafeAreaView>
      <Button
        title='Say Hello'
        onPress={() => dispatch(sagaDarkMode())}
      />
      <Button
        title='To Colors Page'
        onPress={() => navigation.navigate('Random Color')}
      />
      <Button
        title='To Next Page'
        onPress={() => navigation.navigate('Primality Check')}
      />
    </>
  );
};

export default MainMenu;
