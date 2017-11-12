import * as types from '../actionTypes';

const initialState = {  
  fontSize: 12,
  fontWeight: 'bold',
  fontFill: '#111111',
  backgroundFill: '#f7eae4',
  members: [],
};

export default (state = initialState, action) => {
  switch (action.type) {  
    case types.MEMBERS_FETCHED:
    return Object.assign({}, state, {
      members: action.members,
    });

    default:
      return Object.assign({}, state);
  }
}