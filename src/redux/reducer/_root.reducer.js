import { combineReducers } from 'redux';
import gettingStartedCode from './gettingStartedCode.reducer';
import iconList from './iconList.reducer';
import overviewCode from './overviewCode.reducer';
import shieldCode from './shieldCode.reducer';
import textInput from './textInput.reducer';
import licenseCode from './licenseCode.reducer';

const rootReducer = combineReducers({
  gettingStartedCode,
  iconList,
  overviewCode,
  shieldCode,
  textInput,
  licenseCode,
});

export default rootReducer;