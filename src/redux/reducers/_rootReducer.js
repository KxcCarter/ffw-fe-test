import { combineReducers } from 'redux';
import selectedFont from './selectedFont.reducer';
import buyFontsResponse from './buyFontsResponse.reducer';
import myFontsResponse from './myFontsResponse.reducer';

const rootReducer = combineReducers({
  selectedFont,
  buyFontsResponse,
  myFontsResponse,
});

export default rootReducer;
