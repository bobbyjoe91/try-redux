import React from 'react';
import {Provider} from 'react-redux';

import reduxStore from './redux/store';

import MainMenu from './pages/mainMenu';

const App = () => {
  return (
    <Provider store={reduxStore}>
      <MainMenu />
    </Provider>
  );
};

export default App;
