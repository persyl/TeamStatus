import * as types from '../actionTypes';

const initialState = {
  fontSize: 22,
  fontWeight: 'bold',
  fontFill: '#a7100c',
  backgroundFill: '#f7eae4',
  teams:[],
};

export default (state = initialState, action) => {
  switch (action.type) {  
    case types.TEAMS_FETCHED:
    return Object.assign({}, state, {
      teams: action.teams,
    });

    default:
      return Object.assign({}, state);
  }
}