const mongoose= require('mongoose')
const car= require('../databasemodel/dbmodel')

// get cars for the home page
const getCars =async (req, res)=>{
    const cars = await car.find({}).sort({createdAt:-1})
    res.status(200).json(cars)
}

// get a single car
const getCar = async(req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Enter a correct id format"})
    }
    const onecar = await car.findById(id)
    if(!onecar){
        return res.status(404).json({error:'there is no such workout'})
    }
    res.status(404).json(onecar)
}


// post a car 
const postCar = async(req, res)=>{
    const {brand, model, year, condition, Price, color, picname} = req.body
    const post = await car.create({brand,model,year,condition,Price,color,picname})
    if(!post){
        return res.status(404).json({error:'error occured'})
    }
    res.status(200).json(post)
}

// delete a car
const deleteCar= async (req, res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"Please enter a valid id format"})
    }
    const del = await car.findOneAndRemove({_id:id})
    if(!del){
        res.status(404).json({error:"car not found"})
    }
    res.status(200).json(del)
}

module.exports={
    getCars,
    getCar,
    postCar,
    deleteCar
}