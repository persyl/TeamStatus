import * as types from '../actionTypes';

export function appInit(){
    return {
        type: types.APP_INITIATED,
        initiated: true,
    };
}
