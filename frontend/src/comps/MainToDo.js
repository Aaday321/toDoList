import axios from "axios";
import { TestAPI } from "../api/TestAPI";
import React from "react";

const testArray = [1,2,3,4]
var currentID

const Test = new TestAPI()
Test.makeToDos()

const URL = (id)=>{
    return `http://localhost:4010/toDoItems/${id}`
}
class TODO_COMP extends React.Component {



    handleDelete(id){
        
        console.log("clicked");
        axios.delete(URL(id))
        .then(res => {
            console.log(res);   
        })
        .catch((error) =>{
            console.log(error);
        }) 
    }
    /*
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
                    className="checkBox"
                    type="checkbox"
                    nme="action2"
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