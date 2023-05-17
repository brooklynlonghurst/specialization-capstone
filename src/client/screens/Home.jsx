import React, {useContext} from 'react'
import GlobalContext from "../../state/GlobalContext";

function Home() {
    const {state} = useContext(GlobalContext)
    return (
        <section>
            <h1>HOME OF CONSTELLION KIDS</h1>
            <h3>Welcome, {state.username}</h3>
            <img src='https://s3.us-east-1.amazonaws.com/s3.discoveryplace.org/craft3/_mediumWidth/Constellations-shutterstock_267383846.jpg' alt='constellation img'/>
            
        </section>
    )
}

export default Home