import { useReducer, createContext } from "react";

export const UserContext = createContext()

export const userReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case "LOGOUT":
            return{user:null}
        default:
            return state
    }   
}

export const UserContextProvider = ({children})=>{
    const [state,dispatch]=useReducer(userReducer,{user:null})

    console.log("state:",state)

    return (
        <UserContext.Provider value={{...state,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}