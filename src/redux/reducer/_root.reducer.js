import { combineReducers } from 'redux';
import iconList from './iconList.reducer';
import shieldCode from './shieldCode.reducer';
import textInput from './textInput.reducer';

const rootReducer = combineReducers({
  iconList,
  shieldCode,
  textInput,
});

export default rootReducer;