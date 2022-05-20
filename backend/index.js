const express = require('express')
const fs = require('fs')

const app = express()
const config = JSON.parse(fs.readFileSync('./config.json'))

let state = {
    available_maps: config.maps,
    team1_picks: [],
    team2_picks: []
}

PORT = 8000
TEAM_1 = 1
TEAM_2 = 2

function pickMap(team, map) {
    map = state.available_maps.filter((v) => map == v.name)
    console.log(map)

    if(team == TEAM_1) {
        return;
    }
    
    if(team == TEAM_2) {
        return;
    }
    throw new Error('invalid team argument')
}

console.log(state)
pickMap(TEAM_1, "Mirage")

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
