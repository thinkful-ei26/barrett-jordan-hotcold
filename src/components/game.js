import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGuess: '',
            recentGuess: '',
            guessHistory: '',
            currentFeedback: '',
            // currentSolution: ''
        }
    }
    
    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
    
}

export default Game;

