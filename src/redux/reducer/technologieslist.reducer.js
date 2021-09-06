const technologieslist = (state = [], action) => {
  switch (action.type) {
    case 'SET_TECHNOLOGIESLIST':
      return action.payload;
    default:
      return state;
  }
}

export default technologieslist;