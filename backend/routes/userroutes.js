const express = require("express")
const {signUp , loginUser}= require('../controller/usercontroller')
const router = express.Router()

// login 
router.post('/login',loginUser)


// signup
router.post('/signup',signUp)


module.exports = router