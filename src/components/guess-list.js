import React from 'react';

import './guess-list.css';

export default function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));
    // console.log(guesses.guess)
    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};
