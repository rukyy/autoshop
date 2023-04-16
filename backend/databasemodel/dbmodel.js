const mongoose = require('mongoose')

const schema = mongoose.Schema
// defining the schema , what each data is made up of 
const carschema = new schema({
    brand: {type:String, required:true},
    model: {type:String, required:true},
    year: {type:String, required:true},
    condition: {type:String, required:true},
    Price: {type:String, required:true},
    color: {type:String, required:true},
    picname: {type:String, required:true}
},{timestamps:true})

module.exports= mongoose.model('car',carschema) 