import React, {useState, useEffect} from "react";
import SingleCard from "./SingleCard";

const cardImages = [
    {"src": "/img/leo_major.webp", matched: false }, 
    {"src": "/img/libra.webp", matched: false }, 
    {"src": "/img/orion.webp", matched: false }, 
    {"src": "/img/sagittarius.webp", matched: false }, 
    {"src": "/img/scorpio.webp", matched: false }, 
    {"src": "/img/ursamajor.webp", matched: false }
]

function MemoryGame() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random()}))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
        if(choiceOne && choiceTwo) {
            setDisabled(true)
            if(choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
                
            }
        }
    }, [choiceOne, choiceTwo])

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <section>
            <h2>Memory Game</h2>
            <h3>Turns: {turns}</h3>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard 
                        key={card.id} 
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
        </section>
    )
}

export default MemoryGame