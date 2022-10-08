
import React from 'react';
import axios from 'axios';



class ADD_TODO extends React.Component {

    

    addToDo(event){
        event.preventDefault()

        axios.post("http://localhost:4010/toDoItems",{
            content: this.refs.content.value
        //  title: this.refs.title.value,
        })
        .then((response) =>{
            console.log(response);
            window.location.reload()
        })
        .catch((error) =>{
            console.log(error);
        }) 

    }

    getNextID(){
       // console.log(this.props.toDos);
        if(this.props.toDos.length>1){
            console.log("Here");
            console.log(this.props.toDos[this.props.toDos.length-1]+1);
           return this.props.toDos[this.props.toDos.length-1]+1
        }else{
            return 0
        }
        
    }
    
    render() {
        return ( 
        
        <div className="row">
            <h1 className='center'>ADE AND ALEX'S TO-DO LIST</h1>


            <form className="col s12" onSubmit={this.addToDo.bind(this)}>


                <div className="input-field col s6">
                    <input id="content" ref="content" type="text" />
                        <label htmlFor="content">
                            <button
                                className='btn waves-effect waves-light'
                                type="submit"
                                nme="action"
                            >
                                Add
                            </button>
                        </label>
                </div>
                
            </form>
        </div>

        );
    }
}
 
export default ADD_TODO;

const handleOnChangeEvent = (selection)=>{
    return (selection)
}
