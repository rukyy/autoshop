const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema
const validator = require("validator")

const userschema = new schema({
    firstname : {type:String, required:true},
    lastname: {type:String, required:true},
    email:{type:String, required:true, unique:true},
    password: {type:String, required:true}
},{timestamps:true})

// static signup method 
userschema.statics.signup = async function(firstname, lastname,email,password){
    if(!email || !password){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){ 
        throw Error("please enter a correct format")
     }  
    if(!validator.isStrongPassword(password)){
        throw Error("password is not strong enough")
    }

    const exists = await this.findOne({ email}) 
    if(exists){
        throw Error("Email already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({firstname,lastname,email,password:hash})
    return user
}

// static login method
userschema.statics.login= async function(email, password){
    
    if(!email || !password){
        throw Error("Please fill all forms")
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error("incorrect email")
    }
    const match =await  bcrypt.compare(password,user.password)
    if(!match){
        throw Error("Incorrect password")
    }
    return user
}

module.exports= mongoose.model('user',userschema)