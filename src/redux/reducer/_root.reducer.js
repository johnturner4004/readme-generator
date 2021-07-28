import { combineReducers } from 'redux';
import textInput from './textInput.reducer'

const rootReducer = combineReducers({
  textInput,
});

export default rootReducer;