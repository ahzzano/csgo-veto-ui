const express = require('express')
const fs = require('fs')

const app = express()
const config = JSON.parse(fs.readFileSync('./config.json'))

const state = require('./gameState')
const consts = require('./constants')

let currentState = state.createState(config.maps)

app.use(express.json())

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

app.listen(consts.PORT, () => {
    console.log(`started backend at ${consts.PORT}`)
})
