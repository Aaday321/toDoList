import{
    addNewUser, deleteUser, getUsers, getUsersWithID, updateUser
} from "../controllers/userControllers"

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

// PLAYERS END
//-------------------------------------------------//
// USERES START

    app.route('/users')
    //GET endpoint
        .get(getUsers)
        //POST endpoint
        .post(addNewUser);
        //GET player
    
    app.route("/users/:UserId")
    //Get Specific player
        .get(getUsersWithID)

        //update a specific player
        .put(updateUser)

        //delete a specific player
        .delete(deleteUser);
}

export default routes