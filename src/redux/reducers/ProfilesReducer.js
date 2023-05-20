const {constants} = require('../actions');

// jai Ganesh
const initialState = {
  allProfiles: [],
  filteredProfiles: [],
  savedProfiles: [],
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_ALL: {
      return {
        ...state,
        allProfiles: [...action.payload],
      };
    }
    case constants.GET_BY_CATEGORY: {
      return {
        ...state,
        filteredProfiles: [...action.payload],
      };
    }

    case constants.SAVE_PROFILE: {
      return {
        ...state,
        savedProfiles: [...state.savedProfiles, action.payload],
      };
    }

    case constants.REMOVE_SAVE: {
      return {
        ...state,
        savedProfiles: [...state.savedProfiles.filter(
          profile =>  action.payload._id !== profile._id,
        )],
      };
    }

    default:
      return state;
  }
};

export default profilesReducer;
