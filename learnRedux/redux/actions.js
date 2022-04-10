export const toggleHeader = value => {
  return {
    type: 'TOGGLE_HEADER',
    payload: value,
  };
};

export const enableDarkMode = () => {
  return {
    type: 'ENABLE_DARK_MODE',
  };
};

export const primalityCheck = value => {
  return {
    type: 'PRIMALITY_CHECK',
    payload: value,
  };
};

// learn redux-saga
export const sagaDarkMode = () => {
  return {
    type: 'SAGA_DARK_MODE',
  };
};

export const executeTakeWorker = () => {
  return {
    type: 'EXECUTE_TAKE_WORKER',
  };
};

// action for triggering saga
export const loadColors = (value) => {
  return {
    type: 'LOAD_COLORS',
    payload: value
  };
}

// action for triggering reducer (saving data to state)
export const setColors = (value) => {
  return {
    type: 'SET_COLORS',
    payload: value,
  }
}