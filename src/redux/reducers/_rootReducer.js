import { combineReducers } from 'redux';
import selectedFont from './selectedFont.reducer';
import buyFontsResponse from './buyFontsResponse.reducer';
import myFontsResponse from './myFontsResponse.reducer';
import tabs from './tabs.reducer';

const rootReducer = combineReducers({
  tabs,
  selectedFont,
  buyFontsResponse,
  myFontsResponse,
});

export default rootReducer;
