import { combineReducers } from 'redux';

const list = (state = [], action) => {
  switch (action.type) {
    case 'SET_LICENSE_LIST':
      return action.payload;
    default:
      return state;
  }
}

const licensesReducer = combineReducers({
  list
});

export default licensesReducer;