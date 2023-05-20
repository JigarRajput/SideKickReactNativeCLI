const {constants} = require('../actions');

const initialState = {
  receiver: {},
};

const chatHelperReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_RECEIVER: {
      return {
        ...state,
        receiver: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default chatHelperReducer;
