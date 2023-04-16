require('dotenv').config()
const cors= require('cors')
const express = require('express')
const mongoose = require('mongoose')
const {getCars, getCar, postCar, deleteCar}=require('../backend/controller/controller')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',getCars)
app.get('/:id',getCar)
app.post('/',postCar)
app.delete('/:id',deleteCar)

mongoose.connect(process.env.URI)
.then(
    ()=>{app.listen(process.env.PORT,()=>console.log('listening on port 1000'))
})
.catch(
    (error)=>{console.log(error)}
    )
