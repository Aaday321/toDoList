import React from 'react';


const outOf = 3*4

const PlayerSingle = (props) => {
    return ( 
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src="1.jpg" alt="placehoder of a woman"/>
                        <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                    </div>

                    <div className="card-content">
                        <p>{runable(props.player.phone)}</p>
                        <p>Email: {props.player.email}</p>
                        <p>Rating: {ratingFunction(
                            props.player.shooting,
                            props.player.speed,
                            props.player.offense,
                            props.player.defense
                            )}/{outOf}</p>
                    </div>

                    <div className="card-action">
                        {props.player.team}
                    </div>
                </div>
            </div>
        </div>
     );
}

let information = null
export default PlayerSingle;

function testFun(passed){
    if(passed != null){
        information = true
    }
}

function runable(passed){
    testFun(passed)
    if(information === true){
        information = null
        return `Phone: ${passed}`
    }
}

const formatPhoneNumber = (number) =>{
    if(number.length === 10){

    }
}

const ratingFunction = (shooting, speed, offense, defense) =>{
    
    let total = 0
    let scores = [shooting, speed, offense, defense]

    for(let i=0; i<scores.length; i++){
        total += scores[i]
    }
    return total
}