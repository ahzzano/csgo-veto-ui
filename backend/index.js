const express = require('express')
const fs = require('fs')

const app = express()
const config = JSON.parse(fs.readFileSync('./config.json'))

// Global Constants
const PORT = 8000
const TEAM_1 = 1
const TEAM_2 = 2

let state = {
    available_maps: config.maps,
    turn: TEAM_1,
    team1_picks: [],
    team2_picks: []
}

function pickMap(team, map) {
    filtered_maps = state.available_maps.filter((v) => map == v.name)

    if(filtered_maps.length <= 0) {
        throw new Error(`Map: ${map} does not exist`)
    }

    map = filtered_maps[0]

    if(team == TEAM_1) {
        state.turn = TEAM_2
        return
    }
    
    if(team == TEAM_2) {
        state.turn = TEAM_1
        return
    }
    throw new Error('invalid team argument')
}

// App Calls

app.get('/', (req, res) => {
    res.json({hello: 'world'})
})

app.get('/get_config', (req, res) => {
    res.json(config)
})

app.get('/state', (req, res) => {
    res.json(state)
})

app.listen(PORT, () => {
    console.log(`started backend at ${PORT}`)
})
