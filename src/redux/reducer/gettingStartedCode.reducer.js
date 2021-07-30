const gettingStartedCode = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATING_GETTING_STARTED_CODE':
      return action.payload;
    default:
      return state;
  }
}

export default gettingStartedCode;