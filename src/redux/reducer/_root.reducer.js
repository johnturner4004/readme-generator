import { combineReducers } from 'redux';
import licensesReducer from './licenses.reducer';
import readme from './readme.reducer';
import technologiesReducer from './technologies.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
  licensesReducer,
  readme,
  technologiesReducer,
  user,
});

export default rootReducer;