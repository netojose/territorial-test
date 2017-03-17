import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SearchResults.css';

import Tooltip from './Tooltip';
import Paginator from './Paginator';

import mapStateToProps from '../redux/stateToProps/SearchResults';
import mapDispatchToProps from '../redux/dispatchToProps/SearchResults';

/**
 * SearchResults.
 */
class SearchResults extends Component {

  /**
   * Class constructor.
   * @param {object} props - Component props.
   */
  constructor(props){
    super(props);
    this.setTooltipIndexDisplay = this.setTooltipIndexDisplay.bind(this)
    this.unsetTooltipIndexDisplay = this.unsetTooltipIndexDisplay.bind(this)
    this.paginate = this.paginate.bind(this)

    this.state = {
      indexTooltiptoShow: null
    }
  }

  /**
   * Flag current tooltip to display.
   * @return void.
   */
  setTooltipIndexDisplay(index){
    this.setState({indexTooltiptoShow: index});
  }

  /**
   * Unflag current tooltip to display.
   * @return void.
   */
  unsetTooltipIndexDisplay(){
    this.setState({indexTooltiptoShow: null});
  }

  /**
   * Perform a paginated search.
   * @return void.
   */
  paginate(page){
    this.props.paginateResults(this.props.searchTerm, page);
  }

  /**
   * Get loader markup.
   * @return {ReactElement|null} markup.
   */
  renderLoader(){
    return this.props.showLoader ? <p className="loader">Loading...</p> : null;
  }

  /**
   * Get error message markup.
   * @return {ReactElement|null} markup.
   */
  renderError(){
    return this.props.error ? <p className="box error">{this.props.error}</p> : null;
  }

  /**
   * Render search result items.
   * @return {ReactElement} markup.
   */
  renderItems(){
    return (
      <ul className="SearchResults">
        {this.props.searchResults.map((item, i) => {
          return (
            <li key={i} onMouseOver={this.setTooltipIndexDisplay.bind(this, i)} onMouseOut={this.unsetTooltipIndexDisplay}>
              <span>{item.name}</span>
              {' '}
              <a href={item.url} target="_blank">go to item</a>
              <Tooltip data={item} display={this.state.indexTooltiptoShow === i} />
            </li>
          )
        })}
      </ul>
    );
  }

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <div className="SearchResults">
        {this.renderLoader()}
        {this.renderError()}
        
        {(() => {
          if(Array.isArray(this.props.searchResults)){
            if(this.props.searchResults.length){
              return this.renderItems();
            } else {
              return <p className="box warning">No items found with this search terms</p>
            }
          } else {
            return <p className="box info">Please search above</p>
          }
        })()}

        <Paginator 
          currentPage={this.props.currentPage} 
          totalPages={this.props.totalPages} 
          onClickHandler={this.paginate}
        />
      </div>
    );
  }
}

SearchResults.propTypes = {
    /**
     * Paginate results handler.
     * @type {function}
     */
    paginateResults: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
