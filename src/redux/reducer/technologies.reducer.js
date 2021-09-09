import { combineReducers } from "redux";

const list = (state = [], action) => {
  switch (action.type) {
    case 'SET_TECHNOLOGIES_LIST':
      return action.payload;
    default:
      return state;
  }
}

const technologiesReducer = combineReducers({
  list
})

export default technologiesReducer;