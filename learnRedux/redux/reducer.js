const initialState = {
  isDarkMode: false,
  isPrime: null,
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
    case 'PRIMALITY_CHECK':
      try {
        let number = Number(action.payload);
        if (number === 2) {
          stateCopy.isPrime = true;
        } else if (number % 2 === 0) {
          stateCopy.isPrime = false;
        } else {
          let nFactor = 0;
          for (
            let divisor = 3;
            divisor < Math.ceil(Math.sqrt(number));
            divisor++
          ) {
            number % divisor === 0 && nFactor++;
          }

          stateCopy.isPrime = !nFactor;
        }
      } catch (err) {
        stateCopy.isPrime = 'invalid';
      }

      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
