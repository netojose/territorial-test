import axios from 'axios';
import constants from '../constants';

export function setSearchValue(value){
    return {
        type: constants.SET_SEARCH_TERM, 
        value: value
    }
}

export function setLoaderVisibility(visibility){
    return {
        type: constants.SET_LOADER_VISIBILITY, 
        visibility
    }
}

export function setSearchResults(term, page = 1){
    return dispatch => {
        let searchTerm = term.trim();

        if(!searchTerm){
            return;
        }

        dispatch(setLoaderVisibility(true));

        return axios.get('https://swapi.co/api/people/', {
            params: {
                format: 'json',
                search: searchTerm,
                page
            }
        }).then(results => {
            dispatch(setLoaderVisibility(false));
            dispatch({
                type: constants.SET_SEARCH_RESULTS,
                data: results.data,
                page
            })
        }).catch(error => {
            dispatch({
                type: constants.SET_SEARCH_ERROR,
                message: error.message
            })
        });

    }
}