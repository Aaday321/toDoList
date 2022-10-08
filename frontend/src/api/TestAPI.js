import { ToDoItem } from "./ToDoAPI"



export class TestAPI{

    constructor(){
        this.thingsToDo = [
            "Pat yourself on the back",
            "*Go buy Mlik*",
            "Watch the new Rick and Morty",
            "Learn more C++"
        ]

        this.titles = [
            "pat yourself",
            "go buy",
            "Watch this",
            "C++"
        ]

        this.toDoList = []
    }

    makeToDos(){

        for(var i=0; i<this.thingsToDo.length; i++){
    
            const ToDo = new ToDoItem(i)

            ToDo.title = this.thingsToDo[i]
            ToDo.content = this.titles[i]
            this.toDoList.push(ToDo)
        
        }
        
    }

}
