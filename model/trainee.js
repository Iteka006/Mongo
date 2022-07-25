const mongoose = require ('mongoose')
const Schema = mongoose.Schema 

const traineeSchema = new Schema ({
    name: {
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    field: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    }
})
const Trainee = mongoose.model('Trainee', traineeSchema)
module.exports = Trainee