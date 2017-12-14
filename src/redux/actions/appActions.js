import * as types from '../actionTypes';

export function appInit() {
    return function (dispatch) {
        const mockedCompanies = [{ id:1, name: 'Bonnier News' }];
        return Promise.resolve(mockedCompanies).then(companies => {
            dispatch(initiated(companies));
        })
    }
}

function initiated(companies){
     return {
        type: types.APP_INITIATED,
        initiated: true,
        companies,
    };
}
