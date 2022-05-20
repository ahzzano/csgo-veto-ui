
const TEAM_1 = 1
const TEAM_2 = 2

function createState(maps) {
    return {
        available_maps: maps,
        turn: TEAM_1,
        team1_picks: [],
        team2_picks: [],
        decider: undefined 
    }
 
}

function getMap(state, map) {
    filtered_maps = state.available_maps.filter((v) => map == v.name)

    if(filtered_maps.length <= 0) {
        throw new Error(`Map: ${map} does not exist`)
    }

    map = filtered_maps[0]
    return map
}

function changeTurnState(state) {
    if(state.turn == TEAM_1) {
        state.turn = TEAM_2
    }
    else {
        state.turn = TEAM_1
    }
    return state
}

function pickMap(state, mapName) {
    map = getMap(state, mapName)

    if(state.turn == TEAM_1) {
        state.team1_picks.push(map)
    }
    
    else if(state.turn == TEAM_2) {
        state.team2_picks.push(map)
    }
    else {
        throw new Error('invalid team argument')
        return
    }
    state.available_maps = state.available_maps.filter((v) => v != map)
    state = changeTurnState(state)
    return state
}

function banMap(state, mapName) {
    map = getMap(state, mapName)

    state.available_maps = state.available_maps.filter((v) => v != map)

    changeTurnState(state)

    return state
}

export default {
    pickMap,
    banMap,
    createState
}