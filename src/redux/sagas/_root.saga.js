import { all } from 'redux-saga/effects';
import getBuyFonts from './getBuyFonts.saga';
import getMyFonts from './getMyFonts.saga';

export default function* rootSaga() {
  yield all([getBuyFonts(), getMyFonts()]);
}
