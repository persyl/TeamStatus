import * as types from '../actionTypes';

const initialState = {
  name: 'Member',
  width: 100,
  height: 20,
  fontSize: 12,
  fontWeight: 'bold',
  fontFill: '#111111',
  backgroundFill: '#dddddd',
};

export default (state = initialState, action) => {
  switch (action.type) {  
    default:
      return Object.assign({}, state);
  }
}