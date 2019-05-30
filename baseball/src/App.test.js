
//IMPORTS
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'jest-dom/extend-expect';
import { render , fireEvent } from 'react-testing-library';
import Score from './components/score';
import Megatron from './components/megatron';

//BASEBALL TESTER SETUP ⬇︎
it ( 'renders without crashing' , () => {
    render ( <App/> )
});

describe ( 'The App Component' , () => {

    const app = render ( <App/> );
    const scoreComponent = render ( <Score/> );
    const megatronComponent = render ( <Megatron/> );

    it ( 'it exists' , () => {
        expect ( app ) .toBeTruthy();
    })
    it ( 'contains content' , () => {
        expect.anything();
    })


    const balls = app.getByText ( /balls/i );
    const strikes = app.getByText ( /strikes/i );

    describe ( 'Balls and Strikes' , () => {
        it ( 'Balls' , () => {
            expect ( balls ) .toHaveTextContent ( /balls/i )
        })
        it ( 'Strikes' , () => {
            expect ( strikes ) .toHaveTextContent ( /strikes/i )
        })
    })

    describe ( 'Action Buttons' , () => {
        //BALLS ⬇︎
        test ( 'Ball Button' , () => {
            const ballButton = megatronComponent .getByTitle ( 'ballButton' )
                fireEvent.click( ballButton );
                const ballCount = scoreComponent .getByTitle ( 'ballCount' )
                expect ( ballCount ) .toHaveTextContent( '1' );
        })
        //STRIKES ⬇︎
        test ( 'Strike Button' , () => {
            const strikeButton = megatronComponent .getByTitle ( 'strikeButton' )
                fireEvent.click( strikeButton );
                const strikeCount = scoreComponent .getByTitle ( 'strikeCount' )
                expect ( strikeCount ) .toHaveTextContent( '1' );
        })
        //RESET SCORE ⬇︎
        test ( 'Score resets at 3' , () => {
            const strikeButton = megatronComponent .getByTitle ( 'strikeButton' )
                fireEvent.click( strikeButton );
                //using 1 strike button here only returned 2 strikes so i had to invoke it again to recieve 3 strikes so the counter would reset
                fireEvent.click( strikeButton );
                const strikeCount = scoreComponent .getByTitle ( 'strikeCount' )
                expect ( strikeCount ) .toHaveTextContent( '0' );
        })
    })
})