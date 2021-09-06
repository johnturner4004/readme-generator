import { combineReducers } from 'redux';
import conclusionCode from './conclusionCode.reducer';
import gettingStartedCode from './gettingStartedCode.reducer';
import iconList from './iconList.reducer';
import licenseCode from './licenseCode.reducer';
import overviewCode from './overviewCode.reducer';
import shieldCode from './shieldCode.reducer';
import textInput from './textInput.reducer';
import technologieslist from './technologieslist.reducer'

const rootReducer = combineReducers({
  gettingStartedCode,
  iconList,
  overviewCode,
  shieldCode,
  textInput,
  licenseCode,
  conclusionCode,
  technologieslist
});

export default rootReducer;