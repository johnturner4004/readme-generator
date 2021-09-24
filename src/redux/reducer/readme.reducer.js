import { combineReducers } from 'redux';

const files = (state = [], action) => {
  switch (action.type) {
    case 'SET_MY_FILES':
      return action.payload;
    default:
      return state;
  }
}

const selected = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_FILE':
      return action.payload;
    default:
      return state;
  }
}

const readme = combineReducers({
  files,
});

export default readme;