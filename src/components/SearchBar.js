import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';

import mapStateToProps from '../redux/stateToProps/SearchBar';
import mapDispatchToProps from '../redux/dispatchToProps/SearchBar';

/**
 * SearchBar.
 */
class SearchBar extends Component {

  /**
   * Class constructor.
   * @param {object} props - Component props.
   */
  constructor(props){
    super(props)
    this.updateInputValue = this.updateInputValue.bind(this)
    this.isEnterKey = this.isEnterKey.bind(this)
  }

  /**
   * Run on componentDidMount lifecycle.
   * @return void.
   */
  componentDidMount(){
    this.textInput.focus();
  }

  /**
   * Update search input value handler.
   * @return void.
   */
  updateInputValue(e){
    this.props.setSearchValue(e.target.value);
  }

  /**
   * Check if is enter key was pressed to perform search.
   * @return void.
   */
  isEnterKey(e){
    if(e.keyCode === 13) {
      this.props.doSearch(this.props.searchTerm);
    }
  }

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <div className="SearchBar">
        <input 
          type="text" 
          onKeyDown={this.isEnterKey} 
          onChange={this.updateInputValue} 
          value={this.props.searchTerm} 
          ref={input => { this.textInput = input; }} 
          placeholder="Search here"
        />
        <input type="button" value="Search" onClick={this.props.doSearch.bind(this, this.props.searchTerm)} />
      </div>
    );
  }
}

SearchBar.propTypes = {
    /**
     * Do search handler.
     * @type {function}
     */
    doSearch: React.PropTypes.func.isRequired,
    
    /**
     * Set search term handler.
     * @type {function}
     */
    setSearchValue: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
