import logo from './logo.svg';
import './App.css';
import TODO_COMP from "./comps/MainToDo"
import ADD_TODO from './comps/AddToDo';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toDos: [],
      currentToDo: {}
    }
  
    this.updateCurrentToDo = this.updateCurrentToDo.bind(this)
  }
  
  componentDidMount(){
    const url = "http://localhost:4010/toDoItems"
    axios.get(url)
      .then((reponse) => {
        console.log(reponse.data);
        this.setState({
          toDos: reponse.data
        })
      })
      .catch((error)=>{
        console.log(error);
      })
  
      
  }
  
  updateCurrentToDo(item){
    this.setState({
      currentToDo: item
    })
  }


  render(){
    console.log(this.state);
    return (
      <div className="App">

      <ADD_TODO
        toDos={this.state.toDos}
        updateCurrentToDo={this.updateCurrentToDo}
      />

      <TODO_COMP
        toDos={this.state.toDos}
        updateCurrentToDo={this.updateCurrentToDo}
      />
        
      </div>
    );
  }
  
}

export default App;
