import React, {useContext} from 'react'
import GlobalContext from "../../state/GlobalContext";
import GameCard from '../components/GameCard';
import { IoPlanet } from "react-icons/io5";

function Home() {
    const {state} = useContext(GlobalContext)
    return (
        <div className='home-container'>
            <div className='intro-container'>
                <h1>Welcome, {state.username}!</h1>
                <br />
                <p className='intro-p'><IoPlanet size='15px'/>Constellation Kids is a place for you to learn all about the stars! Play games and write posts of what you've learned about constellations. Check your progress on your scoreboard. Go explore the world that is right above you!</p>
            </div>
            <div className='home-page-card'>
                <GameCard title={'Memory Game'} img={<img className='game-card-img' src='./img/memory.png' alt='memory game img'/>}/>
                <GameCard title={'Quiz'} img={<img className='game-card-img' src='./img/quiz.png' alt='quiz img'/>} />  
                <GameCard title={'Create Your Constellation'} img={<img className='game-card-img' src='./img/drawing.png' alt='constellation img'/>} /> 
                <GameCard title={'Tic Tac Toe'} img={<img className='game-card-img' src='./img/tictactoe.png' alt='tic tac toe img'/>} />         
            </div>
            <br />
        </div>
    )
}

export default Home