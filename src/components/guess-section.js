import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm 
                guessInput={(e) => props.guessInput(e)}
                formSubmit={(e) => props.formSubmit(e)}
                history={(e) => props.history(e)}
            />
        </section>
    );
}

