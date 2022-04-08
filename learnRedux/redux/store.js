import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const reduxStore = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(saga);

export default reduxStore;
