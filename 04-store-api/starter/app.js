require('dotenv').config()
// async errors

const express = require('express')
const app = express()

// Database connection
const connectDB = require('./db/connect')
const productsRouter = require("./routes/products")

// Error handling
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const { connect } = require('mongoose')

// Middleware and routes
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

// Run application
port = process.env.PORT || 3000

const start = async () => {
    try {
        // Connect to DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    }
    catch(err) {
        console.log(err)
    }
}

start()