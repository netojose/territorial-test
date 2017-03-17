import {setSearchResults} from '../actionCreators/Search';

export default function(dispatch) {
  return {
    paginateResults: (term, page) => {
        dispatch(setSearchResults(term, page))
    }
  }
}