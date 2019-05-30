
//IMPORTS ⬇︎
import React from 'react'

//ACTION BUTTONS ⬇︎
const Megatron = props => {
    return (
        <div title = 'megatron' className = 'megatron'>
            <button title = 'ballButton' className = 'actionButton' onClick = { props.addBall }>Ball</button>
            <button title = 'strikeButton' className = 'actionButton' onClick = { props.addStrike }>Strike</button>
            <button title = 'foulButton' className = 'actionButton' onClick = { props.addFoul }>Foul</button>
            <button title = 'hitButton' className = 'actionButton' onClick = { props.hit }>Hit</button>
        </div>
    );
};

//EXPORTS ⬇︎
export default Megatron;