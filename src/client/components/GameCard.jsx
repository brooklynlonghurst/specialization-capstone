import React from 'react'

function GameCard(props) {
    return (
        <div className='game-card-container'>
        <div className='game-card'>
            <h2>{props.title}</h2>
            {props.img}
            <button>Play Game</button>
        </div>
        </div>
    )
}

export default GameCard