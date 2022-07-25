const express = require('express')

const router = express.Router()

const TraineeController = require ('../controller/traineeController')

router.get('/', TraineeController.getTrainees)
router.get('/getOne', TraineeController.getOneTrainee)
router.post('create', TraineeController.addTrainee)
router.patch('/update', TraineeController.updateTrainee)
router.delete('/delete', TraineeController.deleteTrainee)

module.exports = router