
//IMPORTS ⬇︎
import React from "react";

//SCORE MAP ⬇︎
const Score = props => {
    return (
        <div className = 'score'>
            <div title = 'ballCount' className = 'count'>
            <p>Balls: </p>{props.ballCount}
			</div>
			<div title = 'strikeCount' className = 'count'>
				<p>Strikes: </p>{props.strikeCount}
			</div>
        </div>
    )
}

//EXPORTS ⬇︎
export default Score;