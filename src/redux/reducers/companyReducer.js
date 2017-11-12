import * as types from '../actionTypes';

const initialState = {
  width: 120,
  height: 50,
  fontSize: 22,
  fontWeight: 'bold',
  fontFill: '#a7100c',
  backgroundFill: '#f7eae4',
};

export default (state = initialState, action) => {
  switch (action.type) {  
    default:
      return Object.assign({}, state);
  }
}