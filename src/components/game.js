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
            recentGuesses: [2, 9, 67],
            currentFeedback: 'hot',
            solution: ''
        }
    }

    currentSolution(){

    console.log('current solution is working')
    const number = Math.floor(Math.random()*100)+1

    if (this.state.solution === '') {
        this.setState({
            solution: number
        })
    }
    }


//inject data and see what's changing
    handleFormSubmit(){
        this.setState({
            count: this.state.count + 1, 
            currentFeedback: 'cold',
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

    // handleFeedback(){
        
    // }
    
    render() {
        return (
            <div>
                <Header newGame={(e) => this.currentSolution(e)}/>
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

