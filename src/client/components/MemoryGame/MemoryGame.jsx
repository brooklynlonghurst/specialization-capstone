import React, {useState} from "react";
import SingleCard from "./SingleCard";

const cardImages = [
    {"src": "/img/leo_major.webp"}, 
    {"src": "/img/libra.webp"}, 
    {"src": "/img/orion.webp"}, 
    {"src": "/img/sagittarius.webp"}, 
    {"src": "/img/scorpio.webp"}, 
    {"src": "/img/ursamajor.webp"}
]

function MemoryGame() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random()}))

        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    return (
        <section>
            <h1>Memory Game</h1>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard 
                        key={card.id} 
                        card={card}
                        handleChoice={handleChoice}
                    />
                ))}
            </div>

        </section>
    )
}

export default MemoryGame