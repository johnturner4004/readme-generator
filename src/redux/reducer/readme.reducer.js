import { combineReducers } from 'redux';

const files = (state = [], action) => {
  switch (action.type) {
    case 'SET_MY_FILES':
      return action.payload;
    default:
      return state;
  }
}

const selected = (state = '', action) => {
  switch (action.type) {
    case 'SET_SELECTED_FILE':
      let file = action.payload[0];
      if (localStorage.time_stamp) {
        if (localStorage.github_user) {file.github_user = localStorage.github_user}
        if (localStorage.github_repository_name) {file.github_repository_name = localStorage.github_repository_name}
      }
      return file;
    case 'UPDATE_GITHUB':
      return {...state, github_user: action.payload.github_user};
    case 'UPDATE_LINKEDIN':
      return {...state, linkedin: action.payload.linkedin};
    case 'UPDATE_EMAIL':
      return {...state, email: action.payload.email};
    default:
      return state;
  }
}

const readme = combineReducers({
  files,
  selected,
});

export default readme;