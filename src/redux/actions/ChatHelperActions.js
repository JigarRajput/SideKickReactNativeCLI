const {default: constants} = require('./constants');

export const setReceiver = receiver => {
  return {
    type: constants.SET_RECEIVER,
    payload: receiver,
  };
};
