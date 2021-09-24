const shieldCode = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SHIELD':
      return action.payload;
    default:
      return state;
  }
}

export default shieldCode;