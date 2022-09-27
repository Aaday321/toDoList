import {
    addNewPlayer, 
    deletePlayer, 
    getPlayers,
    getPlayersWithID,
    updatePlayer
} from "../controllers/playerControllers"


const routes = (app) =>{
    app.route('/books')
    //GET endpoint
    .get(getPlayers)
    //POST endpoint
        .post(addNewPlayer);
    //GET player
    
    app.route("/books/:PlayerId")
    //Get Specific player
        .get(getPlayersWithID)

        //update a specific player
        .put(updatePlayer)

        //delete a specific player
        .delete(deletePlayer);
}

export default routes