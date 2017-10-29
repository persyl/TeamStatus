import * as types from '../actionTypes';

const initialState = {
  name: 'Team',
  width: 120,
  height: 30,
  fontSize: 14,
  fontWeight: 'bold',
  fontFill: '#111111',
  backgroundFill: '#f7eae4',
};

export default (state = initialState, action) => {
  switch (action.type) {  
    default:
      return Object.assign({}, state);
  }
}