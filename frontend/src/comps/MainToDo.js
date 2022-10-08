import axios from "axios";
import { TestAPI } from "../api/TestAPI";
import React from "react";

const testArray = [1,2,3,4]
var currentID

const Test = new TestAPI()
Test.makeToDos()

const URL = `http://localhost:4010/toDoItems/:ToDoId`
class TODO_COMP extends React.Component {

    /*

    handleDelete(id){
        axios.delete(URL,{ params: { id: id }   })
        .then(res => {
            console.log(res);   
        })
        .catch((error) =>{
            console.log(error);
        }) 
    }
    
    removeToDo(event){
        event.preventDefault()
    
        console.log("clicked");
        
        this.handleDelete()
       
    
    }*/

    render() {
        return (
        <div>
            <ul>
            {this.props.toDos.map((i) => (
                <li>
                <input
                    className="btn waves-effect waves-light"
                    type="checkbox"
                    nme="action"
                />
                <label key={i._id}>{i.content}</label>
                </li>
            ))}
            </ul>
        </div>
        );
    }
}

export default TODO_COMP;
/*
{
    Test.makeToDos.map((i)=>{
        <li>Test.toDoList[i]</li>
    })
}
*/