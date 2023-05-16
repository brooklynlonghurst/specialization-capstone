import React, { useState } from 'react'
import Post from "../components/Post";
import Quiz from '../components/Quiz';
import MemoryGame from '../components/MemoryGame/MemoryGame';

function Games() {
    return (
        <section>
            <h1>Games</h1>
            <MemoryGame />
            <Quiz />
            <Post />
        </section>
    )
}

export default Games