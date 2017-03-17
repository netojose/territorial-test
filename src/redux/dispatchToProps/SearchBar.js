import {setSearchValue, setSearchResults} from '../actionCreators/Search';

export default function(dispatch) {
  return {
    doSearch: term => {
      dispatch(setSearchResults(term))
    },
    setSearchValue: value => {
      dispatch(setSearchValue(value));
    }
  }
}