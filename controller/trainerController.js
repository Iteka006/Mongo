const { response } = require('express')
const Trainer = require('../model/trainer')

const getTrainers = (req, res, next) =>{
    Trainer.find()
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

const getOneTrainer = (req, res, next)=>{
    let trainerID = req.body.trainerID
    Trainer.findById(trainerID)
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

const addTrainer = (req,res,next) => {
    let trainer = new Trainer({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        field: req.body.field,
        phone: req.body.phone,
        gender: req.body.gender
    })
    trainer.save()
    .then(response =>{
        res.json({
            message: 'Trainer added successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}

const updateTrainer = (req, res, next)=>{
    let trainerID = req.body.trainerID
    let updateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        field: req.body.field,
        phone: req.body.phone,
        gender: req.body.gender
    }
    Trainer.findByIdAndUpdate(trainerID, {$set: updateData})
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



const deleteTrainer = (req,res,next)=>{
    let trainerID = req.body.trainerID
    Trainer.findByIdAndRemove(trainerID)
    .then(()=>{
        req.json({
            message: 'Trainer deleted successfully!'
        })
    })
    .catch (eror => {
        req.json({
            message: "An error occured!"
        })
    })
}
module.exports = {
    getTrainers, getOneTrainer, addTrainer, updateTrainer, deleteTrainer

}