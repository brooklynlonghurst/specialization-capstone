import React, {useState} from "react";

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

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random()}))

        setCards(shuffledCards)
        setTurns(0)
    }
    console.log(cards, turns)

    return (
        <section>
            <h1>Memory Game</h1>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
                {cards.map(card => (
                    <div key={card.id} className="card">
                        <div>
                            <img className="front" src={card.src} alt="card front" />
                            <img src="/img/cover.jpeg" alt=""
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default MemoryGame