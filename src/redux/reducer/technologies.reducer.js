import { combineReducers } from "redux";

const list = (state = [], action) => {
  switch (action.type) {
    case 'SET_TECHNOLOGIES_LIST':
      return action.payload;
    default:
      return state;
  }
}

const htmlTagList = (state = [], action) => {
  switch (action.type) {
    case 'SET_TECHNOLOGIES_HTML_TAG_LIST':
      return action.payload;
    default:
      return state;
  }
}

const technologiesReducer = combineReducers({
  list,
  htmlTagList
})

export default technologiesReducer;