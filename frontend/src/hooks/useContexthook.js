import { useContext } from "react";
import { UserContext } from "../context/usercontext";

export const useContexthook = ()=>{
    const user = useContext(UserContext)

    if (!user){
        throw Error("useContexthook must be used inside UserContextProvider")
    }
    return(user)
}
