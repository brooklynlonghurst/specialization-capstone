import React, { useState } from 'react'
import Post from "../components/Post";
import Quiz from '../components/Quiz';

function Games() {
    return (
        <section>
            <h1>Games</h1>
            <Quiz />
            <Post />
        </section>
    )
}

export default Games