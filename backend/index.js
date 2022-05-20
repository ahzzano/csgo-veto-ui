const express = require('express')
const fs = require('fs')
const bodyParser  = require('body-parser')

const app = express()
const config = JSON.parse(fs.readFileSync('./config.json'))

const state = require('./gameState')

// Global Constants
const PORT = 8000
const TEAM_1 = 1
const TEAM_2 = 2

let currentState = state.createState(config.maps)

currentState = state.banMap(currentState, "Mirage")
console.log(currentState)

app.use(express.json())

// App Calls

app.get('/', (req, res) => {
    res.json({hello: 'world'})
})

app.get('/restart', (req, res) => {
    currentState = createState(config.maps)
    res.redirect('/state')
})

app.get('/get_config', (req, res) => {
    res.json(config)
})

app.get('/pick', (req, res) => {
    res.redirect('/state')
})

app.get('/state', (req, res) => {
    res.json(currentState)
})

app.listen(PORT, () => {
    console.log(`started backend at ${PORT}`)
})
