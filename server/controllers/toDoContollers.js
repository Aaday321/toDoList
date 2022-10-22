import mongoose from "mongoose";
import { ToDoSchema } from "../models/toDoModels";


const ToDo = mongoose.model(
    "toDos", ToDoSchema
)

//POST
export const addNewToDo = (req, res) =>{
    var newToDo = new ToDo(req.body)

    newToDo.save((err, ToDo)=>{
        if(err){
            res.send(err)
        }
        res.json(ToDo)
    })
}

//GET
export const getToDos = (req, res) => {
    
    ToDo.find({},(err, ToDo) =>{
        if (err){
            res.send(err)
        }
        res.json(ToDo)
    })
}

//GET WITH ID
export const getToDosWithID = (req, res) => {
    
    ToDo.findById(req.params.ToDoId,(err, ToDo) =>{
        if (err){
            res.send(err)
        }
        res.json(ToDo)
    })
}

//PUT
export const updateToDo = (req, res) => {
    
    ToDo.findOneAndUpdate({_id: req.params.ToDoId}, req.body, {new: true}, (err, ToDo) =>{
        if (err){
            res.send(err)
        }
        res.json(ToDo)
    })
}

//DELETE
export const deleteToDo = (req, res) => {

    
    ToDo.deleteOne({_id: req.params.ToDoId},(err, ToDo) =>{
        if (err){
            res.send(err)
        }
        res.json({message: 'Successfully deleted entry'})
    })
}
