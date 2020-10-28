import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* workerSaga(action) {
  try {
    const response = yield axios.get('http://json.ffwagency.md/tabs');
    yield put({ type: 'SET_TABS', payload: response.data });
  } catch (error) {
    console.log('Error getting tabs', error);
  }
}
function* getTabsSaga() {
  yield takeLatest('GET_TABS', workerSaga);
}
export default getTabsSaga;
