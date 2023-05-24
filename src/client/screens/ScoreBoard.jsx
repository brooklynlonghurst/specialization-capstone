import React, {useContext, useState, useCallback, useEffect} from "react";
import GlobalContent from "../../state/GlobalContext";
import axios from "axios";
import Post from "../components/Post";

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
        const date = new Date(post.createdAt);

        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

        console.log(state.userId)
        return (
            <div key={post.id} className='post-card'>
                <h2 className="post-title">{post.title}</h2>
                <h6>{formattedDate}</h6>
                <p>{post.description}</p>
                {
                    state.userId === post.userId && 
                    <div className="post-button">
                         <button className='form-btn'  onClick={() => deletePost(post.id)}>
                            Delete
                        </button>
                    </div>
                }
            </div>
        )
    })

    return (
        <section>
            <h1>Score Board</h1>
            <br />
            <Post getUserPosts={getUserPosts}/>
            <main>
                {mappedPosts}
            </main>
            <br/>
        </section>
    )
}

export default ScoreBoard