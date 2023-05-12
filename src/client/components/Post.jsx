import React from "react";

function Post() {
    return (
        <section>
            <h1>Make a Post</h1>
            <form>
                <input className="title-input" placeholder="Game & Score"/>
                <textarea className="description-input" placeholder="What did you learn?"/>
                <button>Post It</button>
            </form>
        </section>
    )
}

export default Post