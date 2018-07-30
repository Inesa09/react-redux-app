import * as constants from './constants'

const { CHANGE_SEARCH_FIELD, REQUEST_BURGERS_PENDING, REQUEST_BURGERS_SUCCESS, REQUEST_BURGERS_FAILED } = constants;

const initialStateSearch = {
    searchField: '',
}

export const searchBurgers = (state=initialStateSearch, action={}) => {
    switch (action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
            // return {...state, searchField: action.payload}
        default:
            return state;
    }
}

const initialStateRequest = {
    isPending: false,
    burgers: [],
    error: ''
}

export const requestBurgers = (state=initialStateRequest, action={}) => {
    switch(action.type) {
        case REQUEST_BURGERS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_BURGERS_SUCCESS:
            return Object.assign({}, state, {isPending: false, burgers: action.payload});
        case REQUEST_BURGERS_FAILED:
            return Object.assign({}, state, {isPending: false, error: action.payload});
        default:
            return state;
    }
}