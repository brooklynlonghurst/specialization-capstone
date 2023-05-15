import React, {useRef} from "react"
import axios from 'axios'

function Post() {
    const titleRef = useRef()
    const descRef = useRef()

    const handleSumbit = (e) => {
        e.preventDefault()
        let newPost = {
            title: titleRef.current.value, 
            description: descRef.current.value
        }
        console.log("POST", newPost)
        axios 
            .post('/api/addPost', newPost)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
 }
    return (
        <section>
            <h1>Make a Post</h1>
            <form onSumbit={handleSumbit}>
                <input 
                ref={titleRef}
                className="title-input" 
                placeholder="Game & Score"/>
                <textarea 
                ref={descRef}
                className="description-input" 
                placeholder="What did you learn?"/>
                <button>Post It</button>
            </form>
        </section>
    )
}

export default Post