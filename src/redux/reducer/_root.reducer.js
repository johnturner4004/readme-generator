import { combineReducers } from 'redux';
import conclusionCode from './conclusionCode.reducer';
import gettingStartedCode from './gettingStartedCode.reducer';
import licensesReducer from './licenses.reducer';
import overviewCode from './overviewCode.reducer';
import shieldCode from './shieldCode.reducer';
import technologiesReducer from './technologies.reducer';
import textInput from './textInput.reducer';
import user from './user.reducer'
import reademe from './reademe.reducer'

const rootReducer = combineReducers({
  // gettingStartedCode,
  // overviewCode,
  // shieldCode,
  // textInput,
  // conclusionCode,
  technologiesReducer,
  licensesReducer,
  reademe,
  user,
});

export default rootReducer;