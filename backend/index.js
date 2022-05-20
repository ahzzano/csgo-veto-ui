import { readFileSync } from 'fs'
import { express } from 'express'
import { banMap, pickMap, createState } from './gameState'

const app = express()
const config = JSON.parse(readFileSync('./config.json'))

// Global Constants
const PORT = 8000
const TEAM_1 = 1
const TEAM_2 = 2

let currentState = createState(config.maps)

currentState = banMap(currentState, "Mirage")
console.log(currentState)

// App Calls

app.get('/', (req, res) => {
    res.json({hello: 'world'})
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
