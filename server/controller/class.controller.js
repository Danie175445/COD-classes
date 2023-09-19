const classModel = require("../models/class.model")

module.exports.createClass = (req,res) =>{
    const {name,barrel,muzel,underBarrel,ammunation,magazine,rearGrip,stock,optic,lazer} = req.body
    classModel.create({
        name:name,
        barrel:barrel,
        muzel:muzel,
        underBarrel:underBarrel,
        ammunation:ammunation,
        magazine:magazine,
        rearGrip:rearGrip,
        stock:stock,
        optic:optic,
        lazer:lazer
    })
        .then((newClass)=> res.json(newClass))
        .catch((err)=> res.status(400).json(err))
}

module.exports.findAll = (req,res) =>{
    classModel.find()
        .then(allClasses => res.json(allClasses))
        .catch(err => res.json(err))
}

module.exports.findOne = (req,res) =>{
    classModel.findById(req.params.id)
        .then(singleClass => res.json(singleClass))
        .catch(err => res.json(err))
}

module.exports.updateClass = (req,res) =>{
    classModel.findByIdAndUpdate({
        _id: req.params.id
    },
    req.body,
    {new:true,runValidators:true})
        .then(updateClass => res.json(updateClass))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteClass = (req,res) =>{
    classModel.findByIdAndDelete(req.params.id)
    .then(results => res.json(results))
    .catch(err => res.json(err))
}