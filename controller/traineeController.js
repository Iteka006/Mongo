const { response } = require('express')
const Trainee = require('../model/trainee')

const getTrainees = (req, res, next) =>{
    Trainee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch (error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

const getOneTrainee = (req, res, next)=>{
    let traineeID = req.body.traineeID
    Trainee.findById(traineeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occureed'
        })
    })
}

const addTrainee = (req,res,next) => {
    let trainee = new Staff({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        field: req.body.field,
        phone: req.body.phone,
        gender: req.body.gender
    })
    trainee.save()
    .then(response =>{
        res.json({
            message: 'Trainee added successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}

const updateTrainee = (req, res, next)=>{
    let traineeID = req.body.traineeID
    let updateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        field: req.body.field,
        phone: req.body.phone,
        gender: req.body.gender
    }
    Trainee.findByIdAndUpdate(traineeID, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'Trainee updated successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured!'})
    })
}



const deleteTrainee = (req,res,next)=>{
    let traineeID = req.body.traineeID
    Staff.findByIdAndRemove(traineeID)
    .then(()=>{
        req.json({
            message: 'Trainee deleted successfully!'
        })
    })
    .catch (eror => {
        req.json({
            message: "An error occured!"
        })
    })
}
module.exports = {
    getTrainees, getOneTrainee, addTrainee, updateTrainee, deleteTrainee

}