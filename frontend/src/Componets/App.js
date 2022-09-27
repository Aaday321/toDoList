
import React from 'react';
import axios from "axios";
import './App.css';
import PlayerForm from './Player/PlayerForm';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';

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
  const url = "http://localhost:4000/basketballDB/players"
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
    
    return (
      <div className="container-fluid">

        <div className="row">
           <nav>
              <div className="nav-wrapper blue green">
                <a href="#" className="brand-logo">Basketball Management</a>
                
              </div>
            </nav>
        </div>

        <div className="row">
          <div className="col s3"><PlayerList 
            updateCurrentPlayer={this.updateCurrentPlayer}
            players={this.state.players}
            /></div>
          <div className="col s9"><PlayerSingle player={this.state.currentPlayer}/></div>
        </div>

        <div className="row">
          <div className="col s12"><PlayerForm/></div>
        </div>

      </div>
    );
  }
}

export default App;
