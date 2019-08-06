import * as types from '../actionTypes';

export function getTeams() {
    return function (dispatch) {
        const mockedTeams = [{ id:1, name: 'CAPQ Development' }];
        return Promise.resolve(mockedTeams).then(teams => {
            dispatch(teamsFetched(teams));
        })
    }
}

function teamsFetched(teams){
     return {
        type: types.TEAMS_FETCHED,
        teams,
    };
}