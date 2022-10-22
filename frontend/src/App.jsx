
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
        setState(reponse.data)
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  
  useEffect(fetchList,[state])
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
      axios.post(getEndPoint, newNote)
        .then((res)=>{
          setState([...state, newNote])
        })
        .catch(err=>console.log(err))
    }else{
      console.log("Invalid entry");
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
