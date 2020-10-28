import { all } from 'redux-saga/effects';
import getBuyFonts from './getBuyFonts.saga';
import getMyFonts from './getMyFonts.saga';
import getTabs from './getTabs.saga';

export default function* rootSaga() {
  yield all([getBuyFonts(), getMyFonts(), getTabs()]);
}
