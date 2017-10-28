import * as types from '../actionTypes';

const initialState = {
  width: 800,
  height: 600,
  initiated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.APP_INITIATED:
      return Object.assign({}, state, {
        initiated: action.initiated
      });
      
    default:
      return Object.assign({}, state);
  }
}