
import React from 'react';
import axios from "axios";
import './App.css';
import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import { MakeNewUser } from "../USER_INFO"



//Creates a new user
//MakeNewUser()
console.log("EXECUTED!!!");

class App extends React.Component {
  
constructor(props){
  super(props);
  this.state = {
    players: [],
    currentPlayer: {}
  }

  this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
}

componentDidMount(){
  const url = "http://localhost:4001/basketballDB/players"
  axios.get(url)
    .then((reponse) => {
      this.setState({
        players: reponse.data
      })
    })
    .catch((error)=>{
      console.log(error);
    })

    
}

updateCurrentPlayer(item){
  this.setState({
    currentPlayer: item
  })
}

  render(){
    
    return(
      <div>
        <MakeNewUser/>
        <div className="row">
          <div className="col s12"><PlayerForm/></div>
        </div>
      </div>
    );
  }
}

export default App;
