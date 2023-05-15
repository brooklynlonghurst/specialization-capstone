import React, {useContext, useState, useCallback, useEffect} from "react";
import Post from "../components/Post";
import GlobalContext from "../../state/GlobalContext";
import axios from "axios";



function ScoreBoard() {
    const {state} = useContext(GlobalContext)

    const [posts, setPosts] = useState([])

    const getUserPosts = useCallback(()=> {
        axios.get(`/userposts/${state.username}`)
             .then(res => setPosts(res.data))
             .catch(err => console.log(err))
    }, [state.username])

    useEffect(() => {
        getUserPosts()
    }, [getUserPosts])

    const mappedPosts = posts.map(post => {
        console.log(state.username)
        return (
            <div key={post.id} className='post-card'>
                <h2>{post.title}</h2>
                <h4>{post.user.username}</h4>
                <p>{post.content}</p>
            </div>
        )
    })

    return (
        <section>
            <h2>This is the Score Board</h2>
            <Post />
            {mappedPosts}
        </section>
    )
}

export default ScoreBoard