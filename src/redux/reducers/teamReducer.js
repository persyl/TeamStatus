import * as types from '../actionTypes';

const initialState = {  
  fontSize: 12,
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