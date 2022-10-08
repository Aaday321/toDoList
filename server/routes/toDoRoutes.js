import{
    addNewToDo, deleteToDo, getToDos, getToDosWithID, updateToDo
} from "../controllers/toDoContollers"

const routes = (app) =>{

    app.route(`/toDoItems`)
    .get(getToDos)
    .post(addNewToDo);

    app.route(`/toDoItems/:ToDoId`)
    .get(getToDosWithID)
    .put(updateToDo)
    .delete(deleteToDo)

}

export default routes