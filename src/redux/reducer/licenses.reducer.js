import { combineReducers } from 'redux';

const list = (state = [], action) => {
  switch (action.type) {
    case 'SET_LICENSE_LIST':
      return action.payload;
    default:
      return state;
  }
}

const htmlTag = (state = '', action) => {
  switch (action.type) {
    case 'SET_LICENSE_TAG':
      return action.payload;
    default:
      return state;
  }
}

const licensesReducer = combineReducers({
  list,
  htmlTag
});

export default licensesReducer;