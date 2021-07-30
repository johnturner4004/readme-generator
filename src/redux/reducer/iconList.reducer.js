const iconList = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ICONS':
      return action.payload;
    default:
      return state;
  }
}

export default iconList;