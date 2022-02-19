const express = require('express')
const router = express.Router()

const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')

app.get("/", getPeople)

app.post("/", createPerson) 

app.put('/:id', updatePerson)

app.delete('/:id', deletePerson)

module.exports = router