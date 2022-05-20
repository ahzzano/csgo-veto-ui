const rx = require('rxjs')
const consts = require('./constants')
const fetch = require('node-fetch-commonjs');

const url = `localhost:${consts.PORT}`

let hasUpdated = false
let currentState = undefined

const APIState = new rx.Observable((subscriber) => {
    setInterval(async () => {
        let apiReq = await fetch(`http://${url}/state`)
        let req = await apiReq.json()

        if(currentState == undefined) {
            currentState = req
        }

        if(req.turn != currentState.turn) {
            currentState = req        
            subscriber.next(req)
        }
    }, consts.UPDATE_EVERY)
})

exports.APIState = APIState