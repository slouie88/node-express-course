// packages and modules
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const {connectDB} = require('./db/connect')
require('dotenv').config()
const {notFound} = require('./middleware/not-found')
const {errorHandlerMiddleware} = require('./middleware/error-handler')


// middleware
app.use(express.json())
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasks)

// middleware
app.use(notFound)
app.use(errorHandlerMiddleware)

// port
const port = 3000

// application start
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}...`))
    }
    catch(err) {
        console.log(err)
    }
}

start()
