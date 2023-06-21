import {  useState } from "react";
import { useContexthook } from "../hooks/useContexthook";



const Signup = () => {
    const {dispatch}= useContexthook()

    const [firstname, setfirstname]= useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword]= useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [error, seterror] = useState(false)

    const handlesubmit = async (e)=>{
        e.preventDefault()
        if(password!==confirmpassword){
            throw Error("Please confirm your password")
        }
        const userinfo = {firstname, lastname, email, password}
        // console.log(userinfo)
        const response = await fetch("https://autoshop.onrender.com/api/signup",
        {
            method:"POST",
            body:JSON.stringify(userinfo),
            headers:{"Content-Type":"application/json"}
        }
        )
        const json = await response.json()
        if(!response.ok){
            seterror(json.error)
            console.log(error)
        }
        if(response.ok){
            setfirstname('')
            setlastname('')
            setemail('')
            setpassword('')
            setconfirmpassword('')
            dispatch({type:"LOGIN",payload:json})
            console.log(json)
        }
    
    }
    return ( <div className="signup">
        <div className="signupinput">
            <h2>Sign Up</h2>
            <form onSubmit={handlesubmit}>
                <input type="text"
                required
                value={firstname}
                placeholder="firstname"
                onChange={(e)=>{setfirstname(e.target.value)}} />
                <input type="text"
                required
                value={lastname}
                placeholder="lastname"
                onChange={(e)=>{setlastname(e.target.value)}} />
                <input type="text"
                required
                value={email}
                placeholder="email"
                onChange={(e)=>{setemail(e.target.value)}} />
                <input type="password"
                required
                value={password}
                placeholder="password"
                onChange={(e)=>{setpassword(e.target.value)}}/>
                <input type="password"
                required
                value={confirmpassword}
                placeholder="confirm password"
                onChange={(e)=>{setconfirmpassword(e.target.value)}} />
                <button >Sign up</button>
            </form>
            
            <p>Already have an account? <a href="/login"> login</a></p>
        </div>
    </div> );
}
 
export default Signup;