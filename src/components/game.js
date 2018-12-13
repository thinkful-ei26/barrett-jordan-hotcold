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
            recentGuesses: [2, 9, 67], // make dynamic
            currentFeedback: 'Make a Guess!',
            solution: Math.floor(Math.random()*100)+1
        }
    }

    // Start new game/ reset 
    handleNewGameClick(){
        
        this.setState({
            solution: Math.floor(Math.random()*100)+1,
            count: 0,
            recentGuesses: [2, 9, 67], // make dynamic
            currentFeedback: 'Make a Guess!'
        })
    }


//inject data and see what's changing
    handleFormSubmit(){
        this.setState({
            count: this.state.count + 1, 
        })
        this.handleHotFeedback()
        this.handleHotterFeedback()
        this.handleFuegoFeedback()
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

    handleHotFeedback(){
        const differenceGreater = this.state.currentGuess >= (this.state.solution + 20);
        const differenceLess = this.state.currentGuess <= (this.state.solution - 20);
        console.log(differenceGreater, differenceLess);
        if (differenceGreater || differenceLess) {
            this.setState({
                currentFeedback: 'Hot'
            }) 
        } 
    }

    handleHotterFeedback(){
        // const difference = this.state.currentGuess - this.state.solution;
        const differenceGreater = this.state.currentGuess >= (this.state.solution + 10);
        const differenceLess = this.state.currentGuess <= (this.state.solution - 10);
        console.log(differenceGreater, differenceLess);
        if (differenceGreater || differenceLess) {
            this.setState({
                currentFeedback: 'Hotter'
            }) 
        } 
    }

    handleFuegoFeedback(){
        const differenceGreater = this.state.currentGuess >= (this.state.solution + 5) && 
        this.state.currentGuess <= (this.state.solution + 10) ;
        const differenceLess = this.state.currentGuess <= (this.state.solution - 5);
        console.log(differenceGreater, differenceLess);
        if (differenceGreater || differenceLess) {
            this.setState({
                currentFeedback: 'Fuego!!!!'
            }) 
        } 
       
    }


    // const differenceGreater = this.state.currentGuess >= (this.state.solution + 10)
    // const differenceLess = this.state.currentGuess <= (this.state.solution - 10)

    // if (this.state.currentGuess - this.state.solution > 10) {
    //     this.setState({
    //         feedback: 'cold'
    //     }) 
    // }  
    
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

