# DEPRECATED
# csgo-veto-ui

This is the hud that we used for the Ubay Invitational Streams. This hud shows the team map picks and bans for CSGO. Functionality for Valorant could also be expanded

## Architecture
< to be built >

## Requirements
< to be determined >

## How to Use
1. Run the Backend
2. Run the Frontend
3. Add the Frontend to OBS as a browser source 

## Important Backend API
`/state` - returns the current state of the game

`/get_config` - returns the config of the server

`/restart` - restarts the state of the game

`/ban` - bans a map

`/pick` - picks a map

Note: `/ban` and `/pick` track turns between two teams. 
## Acknowledgements
I would like to thank everyone else who decides to contribute to this repository
