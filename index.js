//nnmpm install --save express
const express = require('express')
const cors = require('cors')

//npm install --save mongoose
const {mongoose} = require('./config/database')

const {contactsRouter} = require('./app/controllers/contactsControllers')
const {notesRouter} = require('./app/controllers/notesControllers')
const {usersRouter} = require('./app/controllers/UsersController')
const port =  3005
const app = express()

app.use(express.json())
app.use(cors())
app.use('/contacts',contactsRouter)
app.use('/notes',notesRouter)
app.use('/users',usersRouter)
app.listen(port,function(){
    console.log("listening to port",port)
})





