import React, { Component } from 'react';
import './Paginator.css';

/**
 * Paginator.
 */
class Paginator extends Component {

    /**
     * Class constructor.
     * @param {object} props - Component props.
     */
    constructor(props){
        super(props);
        this.handleClickPaginate = this.handleClickPaginate.bind(this);
    }

    /**
     * Handle click pagination item.
     * @return void.
     */
    handleClickPaginate(page){
        if(page !== this.props.currentPage){
            this.props.onClickHandler(page);
        }
    }

    /**
     * render
     * @return {ReactElement} markup.
     */
    render() {
      let numPages = this.props.totalPages;
      return numPages > 1 ? (
          <div className="Paginator">
            {(() => {
                let links = [];
                for(let i = 1; i <= numPages; i++){
                    let cls = i === this.props.currentPage ? 'current' : '';
                    links.push(<li key={i} className={cls} onClick={this.handleClickPaginate.bind(this, i)}>{i}</li>);
                }
                return <ul>{links}</ul>
            })()}
          </div>
      ) : null;
  }
}

Paginator.propTypes = {
    /**
     * Current page.
     * @type {number}
     */
    currentPage: React.PropTypes.number.isRequired,

    /**
     * Total number of pages.
     * @type {number}
     */
    totalPages: React.PropTypes.number.isRequired,

    /**
     * Link page event click handler.
     * @type {function}
     */
    onClickHandler: React.PropTypes.func.isRequired
};

export default Paginator;