import { useState } from "react";

const Login = () => {

    let [emailaddress, setemailaddress] = useState('')
    let [password, setpassword]=useState('')


    return ( <div className="login">
        <div className="logincard">
            <h2>Sign in</h2>
            <p>Please fill in your details</p>
            <form action="">
                <input type="text"
                required
                value={emailaddress}
                placeholder="Email address"
                onChange={(e)=>setemailaddress(e.target.value)} />

                <input type="password" 
                required
                value={password}
                placeholder="password"
                onChange={(e)=>setpassword(e.target.value)} />
            </form>
            <p className="forgotpassword">forgot password?</p>
            <button>sign in</button>
            <p>You don't have an account yet? click here to <a href="/">sign up</a></p>
        </div>
    </div> );
}
 
export default Login;