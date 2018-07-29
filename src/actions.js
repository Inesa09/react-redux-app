import * as constants from './constants'

const { CHANGE_SEARCH_FIELD, REQUEST_BURGERS_PENDING, REQUEST_BURGERS_SUCCESS, REQUEST_BURGERS_FAILED } = constants;

export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestBurgers = () => dispatch => {
    dispatch({type: REQUEST_BURGERS_PENDING});
    fetch('http://localhost:3004/burgers')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_BURGERS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_BURGERS_FAILED, payload: error }))
}