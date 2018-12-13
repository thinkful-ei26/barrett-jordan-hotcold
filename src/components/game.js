import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            currentGuess: '',
            recentGuesses: [3, 12, 17, 14, 94],
            currentFeedback: 'hot',
            // currentSolution: ''
        }
    }
//inject data and see what's changing
    handleFormSubmit(){
        this.setState({
            count: this.state.count + 1, 
            recentGuesses: [],
            currentFeedback: 'cold'
        })
    };

    handleCurrentGuess(e){
        this.setState({
            currentGuess: e
        })
    }

    // handleCurrentCount(){
    //     if (this.state.currentGuess) {
    //         this.setState({
    //             count: this.state.count++ 
    //         })
    //     }
    // }
    
    render() {
        return (
            <div>
                <Header />
                <GuessSection 
                    feedback={this.state.currentFeedback} 
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    guessInput={(e) => this.handleCurrentGuess(e)}
                    />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.recentGuesses} />
            </div>
        );
    }
    
}

export default Game;

