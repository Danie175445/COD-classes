const mongoose = require('mongoose')

const Classschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    barrel:{
        type:String,
        required:[true,"Barrel is required"]
    },
    muzel:{
        type:String,
        required:[true,"Muzel is required"]
    },
    underBarrel:{
        type:String,
        required:[true,"Under Barrel is required"]
    },
    ammunation:{
        type:String,
        required:[true,"ammunation is required"]
    },
    magazine:{
        type:String,
        required:[true,"Magazine is required"]
    },
    rearGrip:{
        type:String,
        required:[true,"Rear Grip is requied"]
    },
    stock:{
        type:String,
        required:[true,"Stock is required"]
    },
    optic:{
        type:String,
        required:[true,"optic is requied"]
    },
    lazer:{
        type:String,
        required:[true,"Lazer is required"]
    }
},{timestamps:true})

module.exports = mongoose.model ("class",Classschema)
