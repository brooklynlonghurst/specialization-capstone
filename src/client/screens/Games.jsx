import React from 'react'
import Quiz from '../components/Quiz';
import MemoryGame from '../components/MemoryGame/MemoryGame';
import Canvas from '../components/Drawing/Canvas';
import TicTacToe from '../components/TicTacToe/TicTacToe';

function Games() {
    return (
        <section>
            <h1>Games</h1>
            <MemoryGame />
            <Quiz />
            <Canvas />
            <TicTacToe />
        </section>
    )
}

export default Games