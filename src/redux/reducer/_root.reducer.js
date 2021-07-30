import { combineReducers } from 'redux';
import iconList from './iconList.reducer';
import overviewCode from './overviewCode.reducer';
import shieldCode from './shieldCode.reducer';
import textInput from './textInput.reducer';

const rootReducer = combineReducers({
  iconList,
  overviewCode,
  shieldCode,
  textInput,
});

export default rootReducer;