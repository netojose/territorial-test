export default function mapStateToProps(state) {
  let {searchTerm, searchResults, showLoader, error, currentPage, totalPages} = state;
  return {
    searchTerm,
    searchResults,
    showLoader,
    error,
    currentPage,
    totalPages
  }
}