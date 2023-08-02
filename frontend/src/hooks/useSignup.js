import { useState } from "react";
import { useContexthook } from "./useContexthook";


export const useSignup = () => {
    const [error, seterror] = useState(null)
    const [isloading, setisloading] = useState(null)
    const { dispatch } = useContexthook()

    const signup = async (firstname, lastname, email, password) => {
        setisloading(true)
        seterror(null)

        const response = await fetch("http://localhost:4000/api/signup",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstname, lastname, email, password })
            })

        const json = await response.json()

        if (!response.ok) {
            setisloading(false)
            seterror(json.error)
        }
        if (response.ok) {
            // save token to local storage
            localStorage.setItem("user", JSON.stringify(json))

            dispatch({ type: "LOGIN", payload: json })

            setisloading(false)
        }
    }

    return { signup, error, isloading }
}