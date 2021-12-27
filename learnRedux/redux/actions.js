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
