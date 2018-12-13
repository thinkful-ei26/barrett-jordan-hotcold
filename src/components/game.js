import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

const feedback = (solution, guess) => {
    const difference = Math.abs(solution - guess);

    if (difference === 0) {
        return 'You win!!!';
    }
    else if (difference < 5) {
        return 'Fuego!!';
    }
    else if (difference < 10) {
        return 'Hotter';
    }
    else if (difference < 20) {
        return 'Hot';
    }
    else if (difference < 30) {
        return 'Cold'
    }
    else if (difference < 40) {
        return 'Colder'
    }
    else {
        return 'Freezing!';
    }

}


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            currentGuess: '',
            recentGuesses: [], // make dynamic
            currentFeedback: 'Make a Guess!',
            solution: Math.floor(Math.random()*100)+1
        }
    }

    // Start new game/ reset 
    handleNewGameClick(){
        
        this.setState({
            solution: Math.floor(Math.random()*100)+1,
            count: 0,
            recentGuesses: [], // make dynamic
            currentFeedback: 'Make a Guess!'
        })
    }


//inject data and see what's changing
    handleFormSubmit(){
        this.setState({
            count: this.state.count + 1, 
            currentFeedback: feedback(this.state.currentGuess, this.state.solution)
        })
    };

    handleRecentGuesses(){
        this.setState({
            recentGuesses: [...this.state.recentGuesses, this.state.currentGuess]
        })
    }


    handleCurrentGuess(e){
        this.setState({
            currentGuess: e
        })
    }
    
    render() {
        return (
            <div>
                <Header newGame={(e) => this.handleNewGameClick(e)}/>
                <GuessSection 
                    feedback={this.state.currentFeedback} 
                    formSubmit={(e) => this.handleFormSubmit(e)}
                    guessInput={(e) => this.handleCurrentGuess(e)}
                    history={(e)=>this.handleRecentGuesses(e)}
                    />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.recentGuesses} />
            </div>
        );
    }
    
}

export default Game;

