import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {setX, setY, setAlpha} from '../redux/actions';

const MainMenu = ({
  xValue,
  yValue,
  alphaValue,
  xSetter,
  ySetter,
  alphaSetter,
}) => {
  const isDarkMode = false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="X Value">
            <Text>{xValue}</Text>
          </Section>
          <Section title="Y Value">
            <Text>{yValue}</Text>
          </Section>
          <Section title="Alpha Value">
            <Text>{alphaValue}</Text>
          </Section>
          <View style={styles.buttonWrapper}>
            <Button title="X + 10" onPress={() => xSetter(xValue + 10)} />
            <Button title="Y + 10" onPress={() => ySetter(yValue + 10)} />
            <Button
              title="Alpha + 10"
              onPress={() => alphaSetter(alphaValue + 10)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Section = ({children, title}) => {
  const isDarkMode = false;

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const mapStateToProps = state => ({
  xValue: state.x,
  yValue: state.y,
  alphaValue: state.alpha,
});

const mapDispatchToProps = dispatch => ({
  xSetter: data => dispatch(setX(data)),
  ySetter: data => dispatch(setY(data)),
  alphaSetter: data => dispatch(setAlpha(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
