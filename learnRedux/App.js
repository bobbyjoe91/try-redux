import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import reduxStore from './redux/store';

import pages from './navigation';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          {pages.map((page, index) => (
            <Stack.Screen
              key={page.name + index}
              name={page.name}
              component={page.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
