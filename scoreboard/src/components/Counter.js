import React from 'react';
import PropTypes from 'prop-types';

// const Counter = ({ index, score, changeScore }) => { 
// props.score ---> score
const Counter = (props) => {

    let index = props.index;

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
        </div>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
};

export default Counter;