import React, {useRef, useContext} from "react"
import axios from 'axios'
import GlobalContext from "../../state/GlobalContext"

function Post() {
    const {state} = useContext(GlobalContext)
    const titleRef = useRef()
    const descRef = useRef()
    const formRef = useRef();

    const handleClick = () => {
        formRef.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newPost = {
            title: titleRef.current.value, 
            description: descRef.current.value, 
            userId: state.userId 
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
            <form onSubmit={handleSubmit}>
                <input 
                ref={titleRef}
                className="title-input" 
                placeholder="Game & Score"/>
                <textarea 
                ref={descRef}
                className="description-input" 
                placeholder="What did you learn?"/>
                <button ref={formRef} onClick={handleClick}>Post It</button>
            </form>
        </section>
    )
}

export default Post