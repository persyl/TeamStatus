import * as types from '../actionTypes';

const initialState = {
    initiated: false,
};

export default (state = {users: []}, action) => {
  switch (action.type) {
    case types.APP_INITIATED:
      return Object.assign({}, state, {
        initiated: action.initiated
      });
      
    default:
      return Object.assign({}, state);
  }
}