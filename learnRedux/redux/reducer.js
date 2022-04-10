const initialState = {
  isDarkMode: false,
  isPrime: null,
  colors: [],
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
    case 'SET_COLORS':
      stateCopy.colors = action.payload;
      return stateCopy;
    case 'EXECUTE_TAKE_WORKER':
      console.log('take worker');
    case 'PRIMALITY_CHECK':
      if (action.payload) {
        let number = parseInt(action.payload, 10);
        if (!isNaN(number)) {
          if (number === 2) {
            stateCopy.isPrime = `${number} is prime.`;
          } else if (number % 2 === 0 || number < 2) {
            stateCopy.isPrime = `${number} is not prime.`;
          } else {
            let nFactor = 0;
            let limit = Math.ceil(Math.sqrt(number));
            for (let divisor = 3; divisor <= limit; divisor++) {
              number % divisor === 0 && nFactor++;
            }

            stateCopy.isPrime = nFactor
              ? `${number} is not prime.`
              : `${number} is prime.`;
          }
        } else {
          stateCopy.isPrime = 'Invalid input';
        }
      } else {
        stateCopy.isPrime = '';
      }

      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
