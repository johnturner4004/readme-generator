const overviewCode = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_OVERVIEW':
      return action.payload;
    default:
      return state;
  }
}

export default overviewCode;