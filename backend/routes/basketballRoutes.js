import {
    addNewPlayer, 
    deletePlayer, 
    getPlayers,
    getPlayersWithID,
    updatePlayer
} from "../controllers/playerControllers"


const routes = (app) =>{
    app.route('/players')
    //GET endpoint
    .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);
    //GET player
    
    app.route("/players/:PlayerId")
    //Get Specific player
        .get(getPlayersWithID)

        //update a specific player
        .put(updatePlayer)

        //delete a specific player
        .delete(deletePlayer);
}

export default routes