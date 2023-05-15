import React, {useContext} from 'react'
import GlobalContext from "../../state/GlobalContext";

function Home() {
    const {state} = useContext(GlobalContext)
    return (
        <section>
            <h1>HOME OF CONSTELLION KIDS</h1>
            <h3>Welcome, {state.username}</h3>
        </section>
    )
}

export default Home