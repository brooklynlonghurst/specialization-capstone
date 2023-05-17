import React, {useContext, useState, useCallback, useEffect} from "react";

import GlobalContent from "../../state/GlobalContext";
import axios from "axios";

function ScoreBoard() {
    const {state} = useContext(GlobalContent)
    const [posts, setPosts] = useState([])

    const getUserPosts = useCallback(()=> {
        axios.get(`/api/getPosts/${state.userId}`)
             .then(res => setPosts(res.data))
             .catch(err => console.log(err))
    }, [state.userId])

    useEffect(() => {
        getUserPosts()
    }, [getUserPosts])

    const deletePost = id => {
        axios.delete(`/posts/${id}`)
            .then(() => {
                getUserPosts()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const mappedPosts = posts.map(post => {
        console.log(state.userId)
        return (
            <div key={post.id} className='post-card'>
                <h2 className="post-title">{post.title}</h2>
                <h4>{post.username}</h4>
                <p>{post.description}</p>
                {
                    state.userId === post.userId && 
                    <div>
                         <button className='form-btn'  onClick={() => deletePost(post.id)}>
                            delete post
                        </button>
                    </div>
                }
            </div>
        )
    })

    return (
        <section>
            <h1>Score Board</h1>
            
            <main>
                {mappedPosts}
            </main>
        </section>
    )
}

export default ScoreBoard