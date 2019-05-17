import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

    // Another way to define propTypes in the class
    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    };

    render() {
        // const { name, id, score, index, removePlayer, changeScore } = this.props;
        return (
            <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
                <Icon isHighScore={this.props.isHighScore} /> 
                { this.props.name }
            </span>
    
            <Counter 
                score={this.props.score}
                index={this.props.index}
                changeScore={this.props.changeScore}
            />
            </div>
        );
    }
}

Player.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Player;