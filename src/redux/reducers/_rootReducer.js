import { combineReducers } from 'redux';
import selectedFont from './selectedFont.reducer';
import buyFonts from './buyFontsResponse.reducer';
import myFonts from './myFontsResponse.reducer';
import tabs from './tabs.reducer';

const rootReducer = combineReducers({
  tabs,
  selectedFont,
  buyFonts,
  myFonts,
});

export default rootReducer;
