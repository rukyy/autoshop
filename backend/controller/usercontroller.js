require('dotenv').config()
const User =require("../databasemodel/usermodel")
const jwt = require('jsonwebtoken')

const createtoken = (_id)=>{
   return jwt.sign({_id}, process.env.SECRETSTRING)
}

// Login
const loginUser = async (req,res)=>{
    const {email, password }= req.body
    try {
        const user = await User.login(email, password)
        // create a token
        const token = createtoken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

// signup
const signUp = async (req,res)=>{
    const {firstname,lastname,email,password}=req.body

    try {
        const user = await User.signup(firstname,lastname,email,password)
        // create a token
        const token = createtoken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    loginUser,
    signUp
}