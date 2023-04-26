require('dotenv').config()
const cors= require('cors')
const express = require('express')
const mongoose = require('mongoose')
const carroutes = require('./routes/carsroute')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/',carroutes)

mongoose.connect(process.env.URI)
.then(
    ()=>{app.listen(process.env.PORT,()=>console.log('listening on port 1000'))
})
.catch(
    (error)=>{console.log(error)}
    )
