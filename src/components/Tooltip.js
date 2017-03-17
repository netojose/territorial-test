import React, { Component } from 'react';

import './Tooltip.css';

/**
 * Tooltip.
 */
class Tooltip extends Component {

    /**
     * render
     * @return {ReactElement} markup.
     */
    render() {
        let {data: p} = this.props
        return this.props.display ? (
            <div className="Tooltip">
                <ul>
                    <li>Birth year: <strong data-info="birth_year">{p.birth_year}</strong></li>
                    <li>Eye color: <strong data-info="eye_color">{p.eye_color}</strong></li>
                    <li>Gender: <strong data-info="gender">{p.gender}</strong></li>
                    <li>Height: <strong data-info="height">{p.height}</strong></li>
                </ul>
            </div>
            ) : null;
    }
}

Tooltip.propTypes = {
    /**
     * Tooltip data.
     * @type {object}
     */
    data: React.PropTypes.object.isRequired,

    /**
     * Display tooltip flag.
     * @type {boolean}
     */
    display: React.PropTypes.bool.isRequired
};

export default Tooltip;