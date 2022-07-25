const mongoose = require ('mongoose')
const Schema = mongoose.Schema 

const trainerSchema = new Schema ({
    name: {
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    position: {
        type: String
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    }
})
const Trainer = mongoose.model('Trainer', trainerSchema)
module.exports = Trainer