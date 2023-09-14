import mongoose, { model } from "mongoose";

const Classschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    }
},{timestamps:true})

module.exports = mongoose.model ("class",Classschema)
