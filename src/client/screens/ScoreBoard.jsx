import React, {useContext} from "react";
import Post from "../components/Post";
import GlobalContext from "../../state/GlobalContext";

function ScoreBoard() {
    const {state} = useContext(GlobalContext)
    return (
        <section>
            <h2>This is the Score Board</h2>
            <h3>Welcome, {state.username}</h3>
            <Post />
        </section>
    )
}

export default ScoreBoard