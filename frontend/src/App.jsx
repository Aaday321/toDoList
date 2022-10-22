
import React, {useState} from 'react';
import InputComp from './comps/InputComp';
import ToDosComp from './comps/ToDosComp';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"


function App(){

  const valid = (str)=>{
    if(!str) return false;
    
    for(let i of str){
      if(i != " ")return true;
    }
    return false;
  }

  const [state, setState] = useState([])
  
  const addToDos = (param) =>{

    if(valid(param) && !state.includes(param)){
      setState([...state, {note: param, id: uuidv4()}]);
    }else{
      console.log("It's already in there bro");
    }
    
  }

  const deleteMe = (id) =>{

    setState(state.filter((i)=>id !== i.id));

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
