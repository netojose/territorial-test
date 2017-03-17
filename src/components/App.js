import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

/**
 * App.
 */
class App extends Component {

  /**
   * render
   * @return {ReactElement} markup.
   */
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
