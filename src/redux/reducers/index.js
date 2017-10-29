import { combineReducers } from 'redux';
import AppReducer from './appReducer';
import CompanyReducer from './companyReducer';
import TeamReducer from './teamReducer';

export const allReducers = combineReducers({
    app: AppReducer,
    company: CompanyReducer,
    team: TeamReducer,
});