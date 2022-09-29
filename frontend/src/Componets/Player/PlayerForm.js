import React from 'react';
import axios from 'axios';



const skillsArray = ["shooting", "speed", "offense", "defense"]


class PlayerForm extends React.Component {
    submitPlayer(event){
        event.preventDefault()
        axios.post("http://localhost:4001/players",{
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
            // phone: this.refs.phone.ariaValueMax,
            // offense: this.refs.offense.ariaValueMax,
            // defense: this.refs.defense.ariaValueMax,
            // speed: this.refs.speed.ariaValueMax,
            // shooting: this.refs.shooting.ariaValueMax,
            // isCoach: this.refs.isCoach.ariaValueMax,
            team: this.refs.team.value
        })
        .then((response) =>{
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    
    render() { 
        return ( 
        
            <div className="row">
            <h1 className='center'>Add a new Player</h1>
            <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" ref="lastName" type="text" />
                            <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" ref="email" type="text" />
                            <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="phone" ref="phone" type="text" />
                            <label htmlFor="phone">Phone Number</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="team" ref="team" type="text" />
                            <label htmlFor="team">Team</label>
                    </div>
                    {/* <div className="input-field col s6">
                        <p>
                            <label>
                                <input id="isCoach" className='filled-in' ref="osCoach" htmlFor="isCoach" type="checkbox" />
                                <span>Coach</span>
                            </label>
                        </p>
                    </div> */}
                </div>

                {/* <div className="row">
                        <div>
                            {skillsArray.map((i) => (
                                <div>
                                    <p className='center' className="col s12">{i}</p>
                                    <p>
                                        <label>
                                            <input name={i} type="radio" onChange={handleOnChangeEvent(this.value)} checked />
                                            <span>1</span>
                                        </label>
                                    </p>
                                    <p>
                                    <label>
                                            <input name={i} type="radio" onChange={handleOnChangeEvent(this.value)} checked />
                                            <span>2</span>
                                        </label>
                                    </p>
                                    <p>
                                    <label>
                                            <input name={i} type="radio" onChange={handleOnChangeEvent(this.value)} checked />
                                            <span>3</span>
                                        </label>
                                    </p>
                                </div>
                            ))}
                        </div>
                    
                </div> */}

            <button className='btn waves-effect waves-light' type="submit" nme="action">Add Player</button>
            </form>
            </div>

            );
    }
}
 
export default PlayerForm;

const handleOnChangeEvent = (selection)=>{
    return (selection)
}
