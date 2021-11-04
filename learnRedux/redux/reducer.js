const initialState = {
  x: 0,
  y: 0,
  alpha: 0.0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'GET_INIT' || !action.type) {
    return initialState;
  }

  const stateCopy = {...state};
  switch (action.type) {
    case 'SET_X':
      stateCopy.x = action.payload;
      return stateCopy;
    case 'SET_Y':
      stateCopy.y = action.payload;
      return stateCopy;
    case 'SET_ALPHA':
      stateCopy.alpha = action.payload;
      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
