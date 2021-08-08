const licenseCode = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_LICENSE':
      return action.payload;
    default:
      return state;
  }
};

export default licenseCode;