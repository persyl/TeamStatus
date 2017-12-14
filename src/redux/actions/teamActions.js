import * as types from '../actionTypes';

export function getMembers() {
    return function (dispatch) {
        const mockedMembers = [
            { id:1, name: 'Per' },
            { id:2, name: 'Petter' },
            { id:3, name: 'Sanna' }
        ];
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