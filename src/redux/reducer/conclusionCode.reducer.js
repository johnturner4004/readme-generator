const conclusionCode = (state = '', action) => {
  switch (action.type) {
    case 'SET_CONCLUSION':
      return action.payload;
    default:
      return state;
  }
}

export default conclusionCode;