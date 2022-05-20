const express = require('express')
const fs = require('fs')

const app = express()
const config = JSON.parse(fs.readFileSync('./config.json'))

console.log(config)

PORT = 8000

/*
    THE API SHOULD RETURN
    state: {
        available_maps: []
        team1_picks: []
        team2_picks: []
    }

    event: {
        type: "map_pick" | "side_pick" |  "map_ban"
        team: A | B
    }
*/

app.get('/', (req, res) => {
    res.json({hello: 'world'})
})

app.get('/get_config', (req, res) => {
    res.json(config)
})

app.listen(PORT, () => {
    console.log(`started backend at ${PORT}`)
})
