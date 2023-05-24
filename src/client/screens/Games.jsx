import React from 'react'
import Post from "../components/Post";
import Quiz from '../components/Quiz';
import MemoryGame from '../components/MemoryGame/MemoryGame';
import Canvas from '../components/Drawing/Canvas';

function Games() {
    return (
        <section>
            <h1>Games</h1>
            <MemoryGame />
            <Quiz />
            <Canvas />
        </section>
    )
}

export default Games