import { useContexthook } from "./useContexthook"

export const useLogout = ()=>{
    const {dispatch}= useContexthook()

    const logout =()=>{
        // remove user from local storage
        localStorage.removeItem('user')
        // dispatch the logout function
        dispatch({type: 'LOGOUT'})
        
    }
    return {logout}
}