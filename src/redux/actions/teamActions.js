import * as types from '../actionTypes';

export function getMembers() {
    return function (dispatch) {
        const mockedMembers = [{ id:1, name: 'Per L.' }];
        return Promise.resolve(mockedMembers).then(members => {
            dispatch(membersFetched(members));
        })
    }
}

function membersFetched(members){
     return {
        type: types.MEMBERS_FETCHED,
        members,
    };
}