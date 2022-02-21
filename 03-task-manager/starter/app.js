// packages and modules
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const {connectDB} = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())


// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


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
