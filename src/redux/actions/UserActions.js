import constants from './constants';

export const setUser = user => {
  return {
    type: constants.SET_USER,
    payload: user,
  };
};
