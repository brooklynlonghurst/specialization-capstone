import React, {useContext, useState, useCallback, useEffect} from "react";
import Post from "../components/Post";
import initialState from "../../state/GlobalContext";
import axios from "axios";



function ScoreBoard() {
    const {userId} = useContext(initialState)
    console.log(userId)
    const [posts, setPosts] = useState([])

    const getUserPosts = useCallback(()=> {
        axios.post(`/api/addPost/${userId}`)
             .then(res => setPosts(res.data))
             .catch(err => console.log(err))
    }, [userId])

    useEffect(() => {
        getUserPosts()
    }, [getUserPosts])

    const mappedPosts = posts.map(post => {
        console.log(userId)
        return (
            <div key={post.id} className='post-card'>
                <h2>{post.title}</h2>
                <h4>{post.username}</h4>
                <p>{post.description}</p>
            </div>
        )
    })

    return (
        <section>
            <h2>This is the Score Board</h2>
            <Post />
            <main>
                {mappedPosts}
            </main>
        </section>
    )
}

export default ScoreBoard