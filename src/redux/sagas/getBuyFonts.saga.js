import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* workerSaga(action) {
  try {
    const response = yield axios.get(
      `http://json.ffwagency.md${action.payload}`
    );
    yield put({ type: 'SET_BUY_FONTS', payload: response.data });
  } catch (error) {
    console.log('Error getting buy fonts', error);
  }
}
function* getBuyFontsSaga() {
  yield takeLatest('GET_BUY_FONTS', workerSaga);
}
export default getBuyFontsSaga;
