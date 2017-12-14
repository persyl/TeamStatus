var React = require('react');
var ReactDOM = require('react-dom');
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { allReducers } from './src/redux/reducers/';
import App from './src/app';

const middleware = applyMiddleware(thunk);
const store = createStore(allReducers, {}, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('output')
);