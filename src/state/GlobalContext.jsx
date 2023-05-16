import { createContext, useReducer } from "react";

const initialState = {
    userId: null,
    username: "", 
    token: null,
}

const GlobalContext = createContext() 

function GlobalContextProvider(props) {
    function reducer(state, action) {
        switch(action.type) {
            case "LOGIN":
                let {username, id} = action.payload
                // console.log(state, username)
                return {...state, userId: id, username: username, token: true}
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
} 


export default GlobalContext
export {GlobalContextProvider}