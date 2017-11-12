import * as types from '../actionTypes';

const initialState = {
  fontSize: 6,
  fontWeight: 'normal',
  fontFill: '#111111',
  backgroundFill: '#ffffff',
};

export default (state = initialState, action) => {
  switch (action.type) {  
    default:
      return Object.assign({}, state);
  }
}