import React, {useState, useRef, useContext} from "react";
import axios from "axios";
import GlobalContext from "../../state/GlobalContext";

function Auth() {
    const [register, setRigster] = useState(false)
    const toggle = () => setRigster(!register)
    const userRef = useRef()
    const passRef = useRef()
    const {state, dispatch} = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            username: userRef.current.value, 
            password: passRef.current.value
        }
        axios
            .post(register ? '/api/register' : '/api/login', body)
            .then((res) => {
                dispatch({type: "LOGIN", payload: res.data})
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>{register ? "Register" : "Log In"}</h1>
                <br />
                <input 
                ref={userRef} 
                type="text" 
                placeholder="Username">
                </input>
                <input 
                ref={passRef} 
                type="password" 
                placeholder="Password">
                </input>
                <button className="auth-button">{register ? "Register" : "Login"}</button>
            </form>
            <button onClick={toggle}>Click here to {!register ? "Register" : "Login"}</button>
        </section>
    )
}

export default Auth