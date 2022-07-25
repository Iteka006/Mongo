const express = require('express')

const router = express.Router()

const StaffController = require ('../controller/staffController')

router.get('/', StaffController.getStaffMembers)
router.get('/getOne', StaffController.getOneMember)
router.post('create', StaffController.addStaffMember)
router.patch('/update', StaffController.updateMember)
router.delete('/delete', StaffController.deleteMember)

module.exports = router