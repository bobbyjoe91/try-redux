import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import {connect} from 'react-redux';

import {enableDarkMode} from '../redux/actions';

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

const MainMenu = ({navigation, isDarkMode, setDarkMode}) => {
  return (
    <>
      <SafeAreaView style={style.display}>
        <View>
          <View style={style.switch}>
            <Text style={style.caption}>Dark Mode</Text>
            <Switch
              thumbColor={{false: 'white', true: 'white'}}
              trackColor={isDarkMode ? '#F5DD4B' : '#F4F3F4'}
              onValueChange={setDarkMode}
              value={isDarkMode}
            />
          </View>
        </View>
      </SafeAreaView>
      <Button
        title={'To Next Page'}
        onPress={() => navigation.navigate('Primality Check')}
      />
    </>
  );
};

const mapStateToProps = state => ({
  isDarkMode: state.isDarkMode,
});

const mapDispatchToProps = dispatch => ({
  setDarkMode: _ => dispatch(enableDarkMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
