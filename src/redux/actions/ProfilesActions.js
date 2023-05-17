// jai Ganesh

import constants from './constants';

// get all profiles
export const getAll = () => {
  return {
    type: constants.GET_ALL,
  };
};

// get profiles of specified category
export const getByCategory = category => {
  return {
    type: constants.GET_BY_CATEGORY,
    payload: category,
  };
};

// set profiles
