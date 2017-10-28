import { combineReducers } from 'redux';
import AppReducer from './appReducer';
import CompanyReducer from './companyReducer';

export const allReducers = combineReducers({
    app: AppReducer,
    company: CompanyReducer,
});