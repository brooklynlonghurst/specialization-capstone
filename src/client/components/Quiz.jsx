import React, { useState } from 'react'

function Quiz() {
    const [showFinalResults, setFinalResults] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const questions = [
        {
        text: "What are constellations?",
        options: [
            { id: 0, text: "A group of moons", isCorrect: false },
            { id: 1, text: "Floating balloons", isCorrect: false },
            { id: 2, text: "A group of stars", isCorrect: true },
            { id: 3, text: "Planets", isCorrect: false },
        ]
        },
        {
        text: "What is a star?",
        options: [
            { id: 0, text: "Cluster of gas and dust", isCorrect: true },
            { id: 1, text: "A hole poked through Earth's sky", isCorrect: false },
            { id: 2, text: "Nightlights", isCorrect: false },
            { id: 3, text: "Someone famous", isCorrect: false },
        ]
        }, 
        {
        text: "Why are some stars different colors?",
        options: [
            { id: 0, text: "It depends on what type of star it is", isCorrect: false },
            { id: 1, text: "It determines how much heat the star is giving off", isCorrect: true },
            { id: 2, text: "The distance it is from Earth", isCorrect: false },
            { id: 3, text: "It's what color of shirt they are wearing that day", isCorrect: false },
        ]
        }, 
        {
        text: "How many stars can we see on a clear night?",
        options: [
            { id: 0, text: "100,000", isCorrect: false },
            { id: 1, text: "500", isCorrect: false },
            { id: 2, text: "1,000,000,000", isCorrect: false },
            { id: 3, text: "2,000-2,500", isCorrect: true },
        ]
        }, 
        {
        text: "What are constellations used for?",
        options: [
            { id: 0, text: "Navigation and telling time", isCorrect: true },
            { id: 1, text: "Basing personality types off of", isCorrect: false },
            { id: 2, text: "Cooking soup", isCorrect: false },
            { id: 3, text: "Reading books", isCorrect: false },
        ]
        }, 
    ]

    const optionClicked = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1)
        }

        if(currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setFinalResults(true)
        }
        console.log(isCorrect)
    }

    const restartGame = () => {
        setScore(0)
        setCurrentQuestion(0)
        setFinalResults(false)
    }

    return (
        <section>
            <h2>Quiz</h2>
            <h3>Current Score: {score}</h3>
        {showFinalResults ? (
            <div className='final-results'>
            <h1>Final Results</h1>
            <h2>{score} out of {questions.length} correct - {(score/questions.length) * 100}%</h2>
                <button onClick={() => restartGame()}>Reset Game</button>
            </div>
        ) : (
            <div className='question-card'>
                <h2>Question {currentQuestion + 1} out {questions.length} </h2>
                <h3 className='question-text'>{questions[currentQuestion].text}</h3>

                <ul>
                    {questions[currentQuestion].options.map((option) => {
                        return (
                            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                        )
                    })}
                </ul>
            </div>
        )}

        </section>
    )
}

export default Quiz