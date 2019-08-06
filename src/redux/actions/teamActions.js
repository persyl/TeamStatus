import * as types from '../actionTypes';

export function getMembers() {
    return function (dispatch) {
        const mockedMembers = [
            { id:1, name: 'Emil' },
            { id:2, name: 'Per' },
            { id:3, name: 'Johan' },
            { id:4, name: 'Anders' },
            { id:5, name: 'David' }
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