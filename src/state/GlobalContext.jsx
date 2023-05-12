import { createContext, useReducer } from "react";

const initalState = {
    userId: null,
    username: "", 
    token: null
}

const GlobalContext = createContext() 

function GlobalContextProvider(props) {
    function reducer(state, action) {
        switch(action.type){
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
} 

export default GlobalContext
export {GlobalContextProvider}