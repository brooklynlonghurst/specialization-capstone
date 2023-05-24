import React, {useContext} from 'react'
import GlobalContext from "../../state/GlobalContext";
import GameCard from '../components/GameCard';
import { IoPlanet } from "react-icons/io5";

function Home() {
    const {state} = useContext(GlobalContext)
    return (
        <div className='home-container'>
            <div className='intro-container'>
                <h1>Welcome, {state.username}</h1>
                <br />
                <p className='intro-p'><IoPlanet size='15px'/>Constellation Kids is a place for you to learn all about the stars! Play games and write posts of what you've learned about constellations. Check your progress on your scoreboard. Go explore the world that is right above you!</p>
            </div>
            <div className='home-page-card'>
                {/* <img src='https://s3.us-east-1.amazonaws.com/s3.discoveryplace.org/craft3/_mediumWidth/Constellations-shutterstock_267383846.jpg' alt='constellation img'/>   */}
                <GameCard title={'Memory Game'} img={<img className='game-card-img' src='./img/memory.png'/>}/>
                <GameCard title={'Quiz'} img={<img className='game-card-img' src='./img/quiz.png' />} />  
                <GameCard title={'Create Your Constellation'} img={<img className='game-card-img' src='./img/drawing.png' />} />        
            </div>
        </div>
    )
}

export default Home