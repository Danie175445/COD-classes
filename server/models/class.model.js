const mongoose = require('mongoose')

const Classschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    barrel:{
        type:String,
        required:true
    },
    muzel:{
        type:String,
        required:true
    },
    underBarrel:{
        type:String,
        required:true
    },
    ammunation:{
        type:String,
        required:[true,"ammunation is required"]
    },
    magazine:{
        type:String,
        required:true
    },
    rearGrip:{
        type:String,
        required:[true,"Rear Grip is requied"]
    },
    stock:{
        type:String,
        required:true
    },
    optic:{
        type:String,
        required:[true,"optic is requied"]
    },
    lazer:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model ("class",Classschema)
