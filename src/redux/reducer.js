import constants from './constants';

export var initialState = {
   searchTerm: '',
   searchResults: null,
   showLoader: false,
   currentPage: 1,
   totalPages: 1,
   error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.SET_SEARCH_TERM:
      return {...state, searchTerm: action.value};

    case constants.SET_SEARCH_RESULTS:
      let totalPages = Math.ceil(action.data.count / 10);
      let searchResults = action.data.results;
      let currentPage = action.page;
      let error = null;
      return {...state, searchResults, totalPages, currentPage, error};

    case constants.SET_LOADER_VISIBILITY:
      return {...state, showLoader: action.visibility};
    
    case constants.SET_SEARCH_ERROR:
      return {...state, error: action.message, showLoader: false};

    default:
      return state;
  }
}