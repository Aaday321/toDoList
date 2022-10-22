
import React, {useState, useEffect} from 'react';
import InputComp from './comps/InputComp';
import ToDosComp from './comps/ToDosComp';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"
import axios from 'axios';


function App(){



  const getEndPoint = "http://localhost:4010/toDoItems/"

  const [state, setState] = useState([])

  const fetchList = () =>{
    axios.get(getEndPoint)
    .then((reponse) => {
      console.log(reponse.data);

      setState(reponse.data)
      console.log(state);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  useEffect(fetchList,[])

  const valid = (str)=>{
    if(!str) return false;
    
    for(let i of str){
      if(i != " ")return true;
    }
    return false;
  }



  
  const addToDos = (param) =>{

    
    if(valid(param) && !state.includes(param)){
      const newNote = {note: param, myId: uuidv4()}
    axios.post(getEndPoint, newNote).then((res)=>console.log(res)).catch(err=>console.log(err))
    fetchList()
      setState([...state, newNote]);
    }else{
      console.log("Unvalid entry");
    }
    
  }

  const deleteMe = (_id) =>{
    
    axios.delete(getEndPoint+_id)
    .then(res => {
        console.log(res);
        fetchList()   
    })
    .catch((error) =>{
        console.log(error);
    }) 

    

  }

  return(
    <div className='box'>
      <h1>To Do List!</h1>
      <h3>Get it done.</h3>
      <InputComp addToDos={addToDos}/>
      <ToDosComp state={state} deleteMe={deleteMe}/>
    </div>
   
  )

}
export default App;


/*
Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@Aaday321 
Aaday321
/
toDoList
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
toDoList/frontend/src/App.js /
@Aaday321
Aaday321 fixed nested repo - I think
Latest commit e909015 14 days ago
 History
 1 contributor
64 lines (50 sloc)  1.13 KB

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
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
toDoList/App.js at main · Aaday321/toDoList
*/