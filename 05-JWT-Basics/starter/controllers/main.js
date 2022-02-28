// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// set up authentication so only request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const { username, password } = req.body
    
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400)
    }

    // mongoose validation
    // Joi
    // check in the controller

    res.send('Fake login register/signup route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, John Doe`, secret: `Here is your authorized date ${luckyNumber}` })
}

module.exports = {
    login,
    dashboard
}