const gettingStartedCode = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_GETTING_STARTED':
      return action.payload;
    default:
      return state;
  }
}

export default gettingStartedCode;