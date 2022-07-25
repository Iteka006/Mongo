const mongoose = require ('mongoose')
const Schema = mongoose.Schema 

const staffSchema = new Schema ({
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
const Staff = mongoose.model('Staff', staffSchema)
module.exports = Staff