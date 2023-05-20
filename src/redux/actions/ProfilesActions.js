// jai Ganesh

import constants from './constants';

// get all profiles
export const getAll = allProfiles => {
  return {
    type: constants.GET_ALL,
    payload: allProfiles,
  };
};

// get profiles of specified category
export const getByCategory = filteredProfiles => {
  return {
    type: constants.GET_BY_CATEGORY,
    payload: filteredProfiles,
  };
};

// save profile
// get profiles of specified category
export const saveProfile = profile => {
  return {
    type: constants.SAVE_PROFILE,
    payload: profile,
  };
};

export const removeSave = profile => {
  return {
    type: constants.REMOVE_SAVE,
    payload: profile,
  };
};
