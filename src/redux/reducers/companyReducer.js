import * as types from '../actionTypes';

const initialState = {
  width: 400,
  height: 200,
  fontSize: 30,
  fontWeight: 'bold',
  fill: '#ffffff',
};

export default (state = initialState, action) => {
  switch (action.type) {  
    default:
      return Object.assign({}, state);
  }
}