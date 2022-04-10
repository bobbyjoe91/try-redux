import {
  all,
  call,
  take,
  takeEvery,
  takeLatest,
  put
} from 'redux-saga/effects';
import { enableDarkMode, setColors } from './actions';
import { fetchColor } from './api';

// worker sagas
function* sagaDarkMode() {
  console.log('>>> Dark Mode');
  // put works like useDispatch()
  yield put(enableDarkMode());
}

function* handleFetchColor(action) {
  console.log('>>> color is fetched');
  let size = action.payload ?? 10;

  // get data by calling API
  let fetchedColors = yield call(fetchColor, size);

  // store data in state (triggering reducer)
  yield put(setColors(fetchedColors));
}

// watcher saga (listening to action trigger)
function* rootSaga() {
  yield all([
    // takeEvery(action_name: String, worker_saga: generator function)
    takeEvery('SAGA_DARK_MODE', sagaDarkMode),

    // trigger reducer directly
    take('EXECUTE_TAKE_WORKER'),

    takeLatest('LOAD_COLORS', handleFetchColor),
  ]);
}

export default rootSaga;