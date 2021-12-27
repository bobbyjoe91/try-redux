const initialState = {
  isDarkMode: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'GET_INIT' || !action.type) {
    return initialState;
  }

  const stateCopy = {...state};
  switch (action.type) {
    case 'ENABLE_DARK_MODE':
      stateCopy.isDarkMode = !stateCopy.isDarkMode;
      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
