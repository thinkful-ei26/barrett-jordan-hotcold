import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    
    return (
        <form onSubmit={(e) =>{e.preventDefault(); 
        props.formSubmit();
        console.log('something happend')}}>
        {/* inputs wil be onChange */}
            <input onChange={(e) => {
                props.guessInput(e.target.value)
            }}
                type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

