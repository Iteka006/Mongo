const { response } = require('express')
const Staff = require('../model/staff')

const getStaffMembers = (req, res, next) =>{
    Staff.find()
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

const getOneMember = (req, res, next)=>{
    let staffID = req.body.staffID
    Staff.findById(staffID)
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

const addStaffMember = (req,res,next) => {
    let staff = new Staff({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        position: req.body.position,
        phone: req.body.phone,
        gender: req.body.gender
    })
    staff.save()
    .then(response =>{
        res.json({
            message: 'Employee added successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured!'
        })
    })
}

const updateMember = (req, res, next)=>{
    let staffID = req.body.staffID
    let updateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        position: req.body.position,
        phone: req.body.phone,
        gender: req.body.gender
    }
    Staff.findByIdAndUpdate(staffID, {$set: updateData})
    .then(()=>{
        res.json({
            message: 'Member updated successfully!'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured!'})
    })
}



const deleteMember = (req,res,next)=>{
    let staffID = req.body.staffID
    Staff.findByIdAndRemove(employeeID)
    .then(()=>{
        req.json({
            message: 'Employee deleted successfully!'
        })
    })
    .catch (eror => {
        req.json({
            message: "An error occured!"
        })
    })
}
module.exports = {
    getStaffMembers, getOneMember, addStaffMember, updateMember, deleteMember

}