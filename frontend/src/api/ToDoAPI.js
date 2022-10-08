
export class ToDoItem{
    constructor(id){
        this.id = id
        this.title = ""
        this.content = ""
    }

    editMe(PARAM){
        if(PARAM.title){
            this.title = PARAM.title
        }

        if(PARAM.content){
            this.content = PARAM.title
        }
        
    }
}