// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// set up authentication so only request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const { username, password } = req.body

    // mongoose validation
    // Joi
    // check in the controller
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400)
    }

    // Just for demo, usually we'd use an Id from a database!
    const id = new Date().getDate()
    // Try to keep the payload small, better for user experience
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
    console.log(req.user)

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized date ${luckyNumber}` })
}

module.exports = {
    login,
    dashboard
}