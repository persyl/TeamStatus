import { combineReducers } from 'redux';
import AppReducer from './appReducer';

export const allReducers = combineReducers({
    app: AppReducer,
});