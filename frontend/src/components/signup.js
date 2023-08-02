import {  useState } from "react";
import { useSignup } from "../hooks/useSignup";



const Signup = () => {


    const [firstname, setfirstname]= useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword]= useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const {signup, error, isloading}= useSignup()

    const handlesubmit = async (e)=>{
        e.preventDefault()
        if(password!==confirmpassword){
            throw Error("Please confirm your password")
        }
        
        await signup(firstname, lastname, email, password)

    
    }
    return ( <div className="signup">
        <div className="signupinput">
            <h2>Sign Up</h2>
            <form onSubmit={handlesubmit}>
                <input type="text"
                required
                placeholder="firstname"
                onChange={(e)=>{setfirstname(e.target.value)}}
                value={firstname} />
                
                <input type="text"
                required
                placeholder="lastname"
                onChange={(e)=>{setlastname(e.target.value)}} 
                value={lastname}/>
                 
                <input type="text"
                required
                placeholder="email"
                onChange={(e)=>{setemail(e.target.value)}} 
                value={email}/>

                <input type="password"
                required
                placeholder="password"
                onChange={(e)=>{setpassword(e.target.value)}}
                value={password}/>

                <input type="password"
                required
                placeholder="confirm password"
                onChange={(e)=>{setconfirmpassword(e.target.value)}}
                value={confirmpassword} />
                
                <button disabled={isloading} >Sign up</button>
                {error && <div>{error}</div>}
            </form>
            
            <p>Already have an account? <a href="/login"> login</a></p>
        </div>
    </div> );
}
 
export default Signup;