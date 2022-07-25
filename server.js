require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const StaffRoute = require('./routes/staff')
const TraineeRoute = require('./routes/trainee')
const TrainerRoute = require('./routes/trainer')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'));
const app = express()

app.use(express.json())

app.use(bodyparser.json())

const PORT= process.env.PORT ||3000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/staff', StaffRoute)
app.use('/api/trainee', TraineeRoute)
app.use('/api/trainer', TrainerRoute)

    