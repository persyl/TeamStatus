import * as types from '../actionTypes';

const initialState = {
  name: 'Per L.',
  width: 60,
  height: 20,
  fontSize: 6,
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