import React from 'react'
import { useNavigate } from 'react-router-dom'

function GameCard(props) {
    const navigate = useNavigate()
    return (
        <div className='game-card-container'>
        <div className='game-card'>
            <h2>{props.title}</h2>
            {props.img}
            <button onClick={() => navigate('/games')}>Play Game</button>
        </div>
        </div>
    )
}

export default GameCard