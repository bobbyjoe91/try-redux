import { all, takeEvery, put } from 'redux-saga/effects';
import { enableDarkMode } from './actions';

// worker sagas
function* sagaDarkMode() {
  console.log('>>> Dark Mode');
  // put works like useDispatch()
  yield put(enableDarkMode());
}

// watcher saga
function* rootSaga() {
  yield all([
    // takeEvery(action_name: String, worker_saga: generator function)
    takeEvery('SAGA_DARK_MODE', sagaDarkMode)
  ]);
}

export default rootSaga;