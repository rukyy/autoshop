import { useState } from "react";


export const useSignup = () =>{
    const [error, seterror] = useState(null)
    const [isloading, setisloading]= useState(null)

    const signup = async (firstname,lastname,email, password) =>{}
}