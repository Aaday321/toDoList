
import React, {useState, useEffect} from 'react';
import InputComp from './comps/InputComp';
import ToDosComp from './comps/ToDosComp';
import { v4 as uuidv4 } from 'uuid';
import "./App.css"
import axios from 'axios';
import Alerts from './comps/Alerts';


function App(){
  const allNotesArr = [];



  const getEndPoint = "http://localhost:4010/toDoItems/"
  const [alerts, setAlerts]=useState([])
  const [state, setState] = useState([])

  const makeAlert = (type, message)=>{
    let uuid = uuidv4()
    setAlerts(  [...alerts, {type, message, uuid:uuid}]  );
    setTimeout(()=>setAlerts(alerts.filter(()=>(alert.uuid !== uuid))),4000);
  }

  const fetchList = () =>{
    
    axios.get(getEndPoint)
      .then((reponse) => {
        setState(reponse.data)
      })
      .catch((error)=>{
        
        makeAlert("Error", error+" 🤒")
        
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

    if(valid(param) &&
      !state.map((item)=>item.note.toLowerCase()).includes(param.toLowerCase())){

      const newNote = {note: param}

      
      axios.post(getEndPoint, newNote)
        .then((res)=>{
          
          fetchList();

        })
        .catch((err)=>{

          console.log(err)
          if(err == "AxiosError: Network Error"){
            window.alert("No connection to server")
          }

        })
    }else{
      
      makeAlert("Error", "Invalid Entry")

    }
    
  }

  const deleteMe = (_id) =>{
    axios.delete(getEndPoint+_id)
      .then(res => {

        fetchList();

      })
      .catch((error) =>{
          makeAlert("Error", "POST ALERT 😵‍💫")
      }) 
  }

  return(
    <>
    <Alerts/>
    <div className='box'>
      
      <h1>To Do List!</h1>
      <h3>Get it done.</h3>
      <InputComp addToDos={addToDos}/>
      <ToDosComp state={state} deleteMe={deleteMe}/>
    </div>
   </>
  )

}
export default App;
