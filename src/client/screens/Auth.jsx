import React, {useState} from "react";

function Auth() {
    const [register, setRigster] = useState(false)

    const toggle = () => setRigster(!register)

    return (
        <section>
            <h1>Auth</h1>
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <button>{register ? "Register" : "Login"}</button>
            </form>
            <button>Click here to {!register ? "Register" : "Login"}</button>
        </section>
    )
}

export default Auth