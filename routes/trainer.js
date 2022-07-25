const express = require('express')

const router = express.Router()

const TrainerController = require ('../controller/trainerController')

router.get('/', TrainerController.getTrainers)
router.get('/getOne', TrainerController.getOneTrainer)
router.post('create', TrainerController.addTrainer)
router.patch('/update', TrainerController.updateTrainer)
router.delete('/delete', TrainerController.deleteTrainer)

module.exports = router