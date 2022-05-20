const express = require('express')
const fs = require('fs')

const app = express()
const config = JSON.parse(fs.readFileSync('./config.json'))

const state = require('./gameState')
const consts = require('../constants')

let currentState = state.createState(config.maps)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({hello: 'world'})
})

app.get('/restart', (req, res) => {
    currentState = state.createState(config.maps)
    res.redirect('/state')
})

app.get('/get_config', (req, res) => {
    res.json(config)
})

app.get('/ban', (req, res) => {
    if(req.query.team != currentState.turn) {
        res.json({"error": "it is not your turn yet"})
        return
    }

    currentState = state.banMap(currentState, req.query.map)
    res.redirect('/state')
})

app.get('/pick', (req, res) => {
    if(req.query.team != currentState.turn) {
        res.json({"error": "it is not your turn yet"})
        return
    }
    currentState = state.pickMap(currentState, req.query.map)
    
    res.redirect('/state')
})

app.get('/state', (req, res) => {
    res.json(currentState)
})

app.listen(consts.PORT, () => {
    console.log(`started backend at ${consts.PORT}`)
})
