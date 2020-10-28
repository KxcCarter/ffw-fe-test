import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* workerSaga(action) {
  try {
    const response = yield axios.get(
      `http://json.ffwagency.md${action.payload}`
    );
    yield put({ type: 'SET_MY_FONTS', payload: response.data });
  } catch (error) {
    console.log('Error getting my fonts', error);
  }
}
function* getMyFontsSaga() {
  yield takeLatest('GET_MY_FONTS', workerSaga);
}
export default getMyFontsSaga;
